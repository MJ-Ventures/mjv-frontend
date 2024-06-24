export async function GET(request, { params }) {
  const slugName = params.id.split("slug=")[1];
  console.log(slugName , "slugName")
  const res = await fetch(
    `https://blogs-xxj7aq26ia-uc.a.run.app/blog/${slugName}` , {cache: 'no-store'}
  );
  const blog = await res.json();

  return Response.json({ blog });
}
