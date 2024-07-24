export default function BlogListItemsBlock({ listItems }) {
  if (!listItems?.length) return;
  return listItems.map((listItem, index) => {
    const { description } = listItem || {};
    return (
      description && (
        <ul key={index} className="list-inside list-disc">
          <li key={index} className="text-base pb-1 text-[#838381] leading-6">
            {description}
          </li>
        </ul>
      )
    );
  });
}
