import BlogHeadingBlock from "../heading-block";
import BlogImageBlock from "../image-block";
import BlogListItemsBlock from "../list-items-block";
import BlogParagraphBlock from "../paragraph-block";
import BlogVideoBlock from "../video-block";

export default function BlogSubSectionBlock({ subSections, tableOfContent }) {
  if(!subSections?.length) return
  return subSections.map((section, index) => {
    const { heading, paragraphs, image, listItems, videoUrl } = section || {};
    tableOfContent.push(heading);
    return (
      <div key={index} className="max-w-[730px] mx-auto" id={heading}>
        <BlogHeadingBlock heading={heading} />
        <BlogParagraphBlock paragraphs={paragraphs} />
        <BlogListItemsBlock listItems={listItems} />
        <BlogImageBlock image={image} />
        <BlogVideoBlock videoUrl={videoUrl} />
      </div>
    );
  });
}
