import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import * as React from "react";

// import "../styles.css";

import type { InsertImagePayload } from "./ImagePlugin";
import { INSERT_IMAGE_COMMAND } from "./ImagePlugin";

export function FillURL() {
  const srcfile = prompt("Enter the URL of the image:", "");

  return srcfile;
}

export default function ImageToolbarPlugin(): JSX.Element {
  const [editor] = useLexicalComposerContext();
  const onClick = (payload: InsertImagePayload) => {
    editor.dispatchCommand(INSERT_IMAGE_COMMAND, payload);
  };

  return (
    <div className="">
      {/* <button
        onClick={() =>
          onClick({
            altText: "Pink flowers",
            src: "https://images.pexels.com/photos/5656637/pexels-photo-5656637.jpeg?auto=compress&cs=tinysrgb&w=200",
          })
        }
        className={"toolbar-item spaced "}
      >
        <span className="text">Insert Sample</span>
      </button>
      <button
        onClick={() =>
          onClick({
            altText: "URL image",
            src: FillURL(),
          })
        }
        className={"toolbar-item spaced "}
      >
        <span className="text">Insert from URL</span>
      </button> */}
      <button
        onClick={() =>
          onClick({
            altText: "URL image",
            src: `${FillURL()}`,
          })
        }
        className="flex toolbar-item gap-2 font-light items-center justify-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={0.9}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
          />
        </svg>
        {/* Insert */}
      </button>
    </div>
  );
}
