import moment from "moment";
import ContentSection from "./content-section";
import { Spinner } from "@nextui-org/react";
import { calculateTextAnalysis } from "@/components/utils";
import BlogHeadingBlock from "./content-section/heading-block";
import BlogParagraphBlock from "./content-section/paragraph-block";
import BlogListItemsBlock from "./content-section/list-items-block";
import BlogSubSectionBlock from "./content-section/sub-section-block";
import BlogImageBlock from "./content-section/image-block";
import BlogVideoBlock from "./content-section/video-block";

export default function BlogMainSection({ blog, isLoading }) {
  const tableOfContent = [];
  const { author, category, content, date, featuredImage, title } = blog || {};
  if (!content) return;
  const { readingTime } = calculateTextAnalysis(content);
  return isLoading ? (
    <div className="text-base flex items-center gap-2 mx-auto pb-2 text-white">
      {" "}
      <Spinner color="white" size="md" /> Loading Blog....{" "}
    </div>
  ) : (
    <section className="lg:bg-[#151515] bg-transparent">
      <div className="h-full max-w-[1440px] mx-auto">
        <div className="relative w-full">
          <img src={featuredImage} className="w-full bg-cover" />
          <p className="absolute text-white text-center lg:text-[44px] text-[28px] font-semibold pb-5 blog-gradient bottom-0 w-full">
            {title}
          </p>
        </div>
        <div className="grid grid-cols-12 border-y border-white/10">
          <ContentSection className="lg:col-span-8 lg:order-first order-last col-span-12 border-r border-white/10">
            {content?.map((item, index) => {
              const {
                heading,
                paragraphs,
                image,
                subSections,
                listItems,
                videoUrl,
              } = item;
              tableOfContent.push(heading);
              return (
                <div
                  key={index}
                  className="py-10 space-y-10 border-b border-white/10"
                >
                  <div className="max-w-[730px] mx-auto">
                    <BlogHeadingBlock heading={heading} />
                    <BlogParagraphBlock paragraphs={paragraphs} />
                    <BlogListItemsBlock listItems={listItems} />
                    <BlogSubSectionBlock subSections={subSections} />
                  </div>
                  <BlogImageBlock image={image} />
                  <BlogVideoBlock videoUrl={videoUrl} />
                </div>
              );
            })}
          </ContentSection>
          <div className="lg:col-span-4 col-span-12 flex flex-col lg:p-14 px-4 py-10 space-y-10">
            <div className="grid grid-cols-2 gap-5">
              <div>
                <h5 className="text-[#838381] leading-6">Publication Date</h5>
                <p className="text-white leading-6">
                  {moment(date).format("LL")}
                </p>
              </div>
              <div>
                <h5 className="text-[#838381] leading-6">Category</h5>
                <p className="text-white leading-6">{category}</p>
              </div>
              <div>
                <h5 className="text-[#838381] leading-6">Reading Time</h5>
                <p className="text-white leading-6">{readingTime} Mins</p>
              </div>
              <div>
                <h5 className="text-[#838381] leading-6">Author Name</h5>
                <p className="text-white leading-6">{author}</p>
              </div>
            </div>
            <div className="lg:space-y-3 space-y-2">
              <h1 className="text-[#838381]">Table Of Contents</h1>
              <ul className="list-disc list-inside py-4 lg:p-0 p-4 space-y-4 lg:rounded-none rounded-md bg-[#151515] lg:bg-transparent">
                {tableOfContent.map((content, index) => {
                  return (
                    <li key={index} className="lg:text-base text-sm text-white">
                      <a href={`#${content}`} key={index} className="w-full">
                        {content}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
