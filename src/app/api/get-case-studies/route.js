export async function GET() {
  const res = await fetch(`https://blogs-xxj7aq26ia-uc.a.run.app/case-studies`, {
    cache: "no-store",
  });
  const caseStudies = await res.json();

  return Response.json({ caseStudies });
}
