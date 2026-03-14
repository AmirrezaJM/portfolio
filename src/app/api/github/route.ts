import { NextResponse } from "next/server";

const GITHUB_USER = "AmirrezaJM";

export async function GET() {
  try {
    const [contribRes, userRes] = await Promise.all([
      fetch(
        `https://github-contributions-api.jogruber.de/v4/${GITHUB_USER}?y=last`,
        { next: { revalidate: 3600 } }
      ),
      fetch(`https://api.github.com/users/${GITHUB_USER}`, {
        headers: {
          Accept: "application/vnd.github+json",
          ...(process.env.GITHUB_TOKEN
            ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` }
            : {}),
        },
        next: { revalidate: 3600 },
      }),
    ]);

    if (!contribRes.ok) throw new Error("contributions fetch failed");

    const contributions = await contribRes.json();
    const user = userRes.ok ? await userRes.json() : null;

    return NextResponse.json({ contributions, user });
  } catch {
    return NextResponse.json({ error: "Failed to fetch GitHub data" }, { status: 500 });
  }
}
