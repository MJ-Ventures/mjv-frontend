import { CheckIcon, CopyIcon } from "@/assets/svgs";
import { useState } from "react";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";

const styles = {
  hljs: {
    display: "block",
    overflowX: "auto",
    padding: "20px",
    "border-bottom-right-radius": "16px",
    "border-bottom-left-radius": "16px",
    background: "#000000",
    color: "#838381",
  },
};

export default function CodeBlock({ code, language }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 4000);
    } catch (err) {
      console.log("Error", err);
    }
  };

  return (
    <div className="pb-4 relative">
      <div className="flex pt-3 text-sm justify-between items-center bg-black px-3 rounded-t-2xl">
        <div className="text-sm px-3 flex items-center gap-2">
          <div className="flex items-center gap-1">
            <div className="h-3 w-3 rounded-full bg-red-700"></div>
            <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
            <div className="h-3 w-3 rounded-full bg-green-500"></div>
          </div>
          ( {language} )
        </div>
        <div onClick={handleCopy} className="cursor-pointer">
          {copied ? (
            <span className="flex items-center gap-1">
              Copied <CheckIcon />{" "}
            </span>
          ) : (
            <span className="flex items-center gap-1">
              Copy <CopyIcon />{" "}
            </span>
          )}
        </div>
      </div>
      <SyntaxHighlighter language={language} style={styles} wrapLongLines>
        {code}
      </SyntaxHighlighter>
    </div>
  );
}
