export async function GET() {
  const res = await fetch(`https://blogs-xxj7aq26ia-uc.a.run.app/blogs`, {
    cache: "no-store",
  });
  const blogs = await res.json();

  return Response.json({ blogs });
}
