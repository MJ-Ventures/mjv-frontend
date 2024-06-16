import moment from "moment";
import ContentSection from "./content-section";

export default function BlogMainSection({ blog }) {
  const tableOfContent = [];
  const { author, category, content, date, featuredImage, title } = blog;
  return (
    <section className="bg-[#151515]">
      <div className="h-full max-w-[1440px] mx-auto">
        <div className="relative w-full">
          <img src={featuredImage} className="w-full bg-cover" />
          <p className="absolute text-center text-[44px] font-semibold pb-5 blog-gradient bottom-0 w-full">
            {title}
          </p>
        </div>
        <div className="grid grid-cols-12 border-y border-white/10">
          <ContentSection className="col-span-8 border-r border-white/10">
            {content?.map((item, index) => {
              const { heading, paragraphs, image, subSections } = item;
              tableOfContent.push(heading);
              return (
                <div
                  key={index}
                  className="py-10 space-y-10 border-b border-white/10"
                >
                  <div className="max-w-[730px] mx-auto">
                    {heading && (
                      <h1
                        className="text-white text-xl leading-7 font-bold pb-4"
                        id={heading}
                      >
                        {heading}
                      </h1>
                    )}
                    {paragraphs &&
                      paragraphs.map((paragraph, index) => {
                        return (
                          <p
                            key={index}
                            className="text-base pb-5 text-[#838381] leading-6"
                          >
                            {paragraph}
                          </p>
                        );
                      })}
                    {subSections &&
                      subSections.map((section, index) => {
                        const { heading, paragraphs } = section;
                        tableOfContent.push(heading);
                        return (
                          <div
                            key={index}
                            className="max-w-[730px] mx-auto"
                            id={heading}
                          >
                            {heading && (
                              <h1 className="text-white text-xl leading-7 font-bold pb-4">
                                {heading}
                              </h1>
                            )}
                            {paragraphs &&
                              paragraphs.map((paragraph, index) => {
                                return (
                                  <p
                                    key={index}
                                    className="text-base pb-5 text-[#838381] leading-6"
                                  >
                                    {paragraph}
                                  </p>
                                );
                              })}
                          </div>
                        );
                      })}
                  </div>
                  {image && (
                    <img
                      src={image}
                      className="h-full max-w-max max-h-80 mx-auto"
                    />
                  )}
                </div>
              );
            })}
          </ContentSection>
          <div className="col-span-4 flex flex-col p-14 space-y-10">
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
                <p className="text-white leading-6">10 Mins</p>
              </div>
              <div>
                <h5 className="text-[#838381] leading-6">Author Name</h5>
                <p className="text-white leading-6">{author}</p>
              </div>
            </div>
            <div className="space-y-3">
              <h1 className="text-[#838381]">Table Of Contents</h1>
              <ul className="list-disc list-inside py-4 space-y-4">
                {tableOfContent.map((content, index) => {
                  return (
                    <li key={index} className="text-base">
                      <a href={`#${content}`} key={index}>
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
