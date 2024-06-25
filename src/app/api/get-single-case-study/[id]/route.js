export async function GET(request, { params }) {
  const slugName = params.id.split("slug=")[1];
  const res = await fetch(
    `https://blogs-xxj7aq26ia-uc.a.run.app/case-study/${slugName}` , {cache: 'no-store'}
  );
  const caseStudy = await res.json();

  return Response.json({ caseStudy });
}
