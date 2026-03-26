import { NextResponse } from "next/server";

const GITHUB_USER = "AmirrezaJM";

const CONTRIBUTION_QUERY = `
query($login: String!) {
  user(login: $login) {
    contributionsCollection {
      contributionCalendar {
        totalContributions
        weeks {
          contributionDays {
            date
            contributionCount
            contributionLevel
          }
        }
      }
    }
  }
}
`;

const LEVEL_MAP: Record<string, number> = {
  NONE: 0,
  FIRST_QUARTILE: 1,
  SECOND_QUARTILE: 2,
  THIRD_QUARTILE: 3,
  FOURTH_QUARTILE: 4,
};

export async function GET() {
  try {
    const token = process.env.GITHUB_TOKEN;

    const [graphqlRes, userRes] = await Promise.all([
      fetch("https://api.github.com/graphql", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "User-Agent": "portfolio-site",
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
        body: JSON.stringify({
          query: CONTRIBUTION_QUERY,
          variables: { login: GITHUB_USER },
        }),
        next: { revalidate: 3600 },
      }),
      fetch(`https://api.github.com/users/${GITHUB_USER}`, {
        headers: {
          Accept: "application/vnd.github+json",
          "User-Agent": "portfolio-site",
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
        next: { revalidate: 3600 },
      }),
    ]);

    let contributions: Array<{ date: string; count: number; level: number }> =
      [];
    let totalContributions = 0;

    if (graphqlRes.ok) {
      const json = await graphqlRes.json();
      const calendar =
        json?.data?.user?.contributionsCollection?.contributionCalendar;

      if (calendar) {
        totalContributions = calendar.totalContributions;
        contributions = calendar.weeks.flatMap(
          (week: { contributionDays: Array<{ date: string; contributionCount: number; contributionLevel: string }> }) =>
            week.contributionDays.map((day) => ({
              date: day.date,
              count: day.contributionCount,
              level: LEVEL_MAP[day.contributionLevel] ?? 0,
            }))
        );
      }
    }

    const user = userRes?.ok ? await userRes.json() : null;

    return NextResponse.json({
      contributions: {
        contributions,
        totalLastYear: totalContributions,
      },
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
