export default function BlogHeadingBlock({ heading }) {
  if (!heading) return;
  return (
    <h1 className="text-white text-xl leading-7 font-bold pb-4" id={heading}>
      {heading}
    </h1>
  );
}
