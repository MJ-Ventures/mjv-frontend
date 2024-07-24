import CodeBlock from "../code-block";

const parseText = (text) => {
  let codeBlock = [];
  let textBlock = [];
  let isCodeBlock = false;

  text?.forEach((line) => {
    if (line.includes("```python")) {
      isCodeBlock = true;
    } else if (line.includes("```") && isCodeBlock) {
      isCodeBlock = false;
    }

    if (isCodeBlock || line.includes("```python") || line.includes("```")) {
      codeBlock.push(line);
    } else {
      textBlock.push(line);
    }
  });
  codeBlock?.shift();
  codeBlock?.pop();
  return { codeBlock: codeBlock.join("\n"), textBlock };
};

function CheckForCode({ paragraph }) {
  const { codeBlock, textBlock } = parseText(paragraph) || {};
  return (
    <div>
      {textBlock.slice(0, textBlock.indexOf("```python")).map((line, index) => (
        <p key={index} className="text-base pb-5 text-[#838381] leading-6">
          {line}
        </p>
      ))}
      {codeBlock ? <CodeBlock code={codeBlock} language="python" /> : ""}
      {textBlock
        .slice(textBlock.indexOf("```python") + 1)
        .map((line, index) => (
          <p key={index} className="text-base pb-5 text-[#838381] leading-6">
            {line}
          </p>
        ))}
    </div>
  );
}

export default function BlogParagraphBlock({ paragraphs }) {
  if (!paragraphs?.length) return;
  return <CheckForCode paragraph={paragraphs} />;
}
