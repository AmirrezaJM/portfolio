import { NextResponse } from "next/server";

const GITHUB_USER = "AmirrezaJM";

// Fetch contribution data for a given year
async function fetchYear(year: string) {
  const res = await fetch(
    `https://github-contributions-api.jogruber.de/v4/${GITHUB_USER}?y=${year}`,
    { next: { revalidate: 3600 } }
  );
  if (!res.ok) return null;
  return res.json();
}

export async function GET() {
  try {
    const currentYear = new Date().getFullYear();

    // Fetch current + last year to ensure we have a full 52-week window
    // (matches GitHub's "last year" logic which spans two calendar years)
    const [thisYear, lastYear, userRes] = await Promise.all([
      fetchYear(String(currentYear)),
      fetchYear(String(currentYear - 1)),
      fetch(`https://api.github.com/users/${GITHUB_USER}`, {
        headers: {
          Accept: "application/vnd.github+json",
          "User-Agent": "portfolio-site",
          ...(process.env.GITHUB_TOKEN
            ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` }
            : {}),
        },
        next: { revalidate: 3600 },
      }),
    ]);

    // Merge and deduplicate contributions from both years, sorted by date
    const allContribs: Array<{ date: string; count: number; level: number }> = [];
    const seen = new Set<string>();

    for (const data of [lastYear, thisYear]) {
      if (data?.contributions) {
        for (const c of data.contributions) {
          if (!seen.has(c.date)) {
            seen.add(c.date);
            allContribs.push(c);
          }
        }
      }
    }

    allContribs.sort((a, b) => a.date.localeCompare(b.date));

    // Total across all fetched years
    const total: Record<string, number> = {};
    for (const data of [lastYear, thisYear]) {
      if (data?.total) {
        for (const [year, count] of Object.entries(data.total)) {
          total[year] = (total[year] ?? 0) + (count as number);
        }
      }
    }
    // Deduplicate total (jogruber may double-count "lastYear" key)
    const totalLastYear =
      (thisYear?.total?.lastYear as number | undefined) ??
      (total[currentYear] ?? 0);

    const user = userRes?.ok ? await userRes.json() : null;

    return NextResponse.json({
      contributions: { contributions: allContribs, total, totalLastYear },
      user,
    });
  } catch (err) {
    console.error("GitHub API error:", err);
    return NextResponse.json(
      { error: "Failed to fetch GitHub data" },
      { status: 500 }
    );
  }
}
