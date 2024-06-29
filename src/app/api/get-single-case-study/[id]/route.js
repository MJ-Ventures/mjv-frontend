export async function GET(request, { params }) {
  const id = params.id.split("id=")[1];
  console.log("running")
  const res = await fetch(
    `https://blogs-xxj7aq26ia-uc.a.run.app/case-study/${id}`,
    { cache: "no-store" }
  );
  const caseStudy = await res.json();

  return Response.json({ caseStudy });
}
