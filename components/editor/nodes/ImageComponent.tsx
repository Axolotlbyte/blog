import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { $getNodeByKey, type LexicalEditor, type NodeKey } from "lexical";

import * as React from "react";
import { Suspense, useRef } from "react";
import { $isImageNode } from "./ImageNode";

import ReactSlider from "react-slider";

const imageCache = new Set();

function useSuspenseImage(src: string) {
  if (!imageCache.has(src)) {
    throw new Promise((resolve) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        imageCache.add(src);
        resolve(null);
      };
    });
  }
}

function LazyImage({
  altText,
  className,
  imageRef,
  src,
  width,
  height,
  maxWidth,
}: {
  altText: string;
  className: string | null;
  height: "inherit" | number;
  imageRef: { current: null | HTMLImageElement };
  maxWidth: string;
  src: string;
  width: "inherit" | number;
}): JSX.Element {
  useSuspenseImage(src);
  return (
    <img
      className={"mx-auto py-2" || undefined}
      src={src}
      alt={altText}
      ref={imageRef}
      style={{
        height,
        maxWidth: maxWidth,
        width,
      }}
    />
  );
}

export default function ImageComponent({
  src,
  altText,
  width,
  height,
  maxWidth,
  nodeKey,
}: {
  altText: string;
  caption: LexicalEditor;
  height: "inherit" | number;
  maxWidth: string;
  nodeKey: NodeKey;
  resizable: boolean;
  showCaption: boolean;
  src: string;
  width: "inherit" | number;
  captionsEnabled: boolean;
}): JSX.Element {
  const [editor] = useLexicalComposerContext();
  const imageRef = useRef<null | HTMLImageElement>(null);

  const resizeImg = (newMaxWidth: string) => {
    editor.update(() => {
      const node = $getNodeByKey(nodeKey);
      if ($isImageNode(node)) {
        node.setMaxWidth(newMaxWidth);
      }
    });
  };

  return (
    <Suspense fallback={null}>
      <>
        {editor._editable ? (
          // <button onClick={() => resizeImg("60%")}>Increse height</button>
          <ReactSlider
            className="w-6/12 mx-auto pb-3 mt-2 select-none "
            marks
            markClassName="example-mark bg-blue"
            min={1}
            max={10}
            defaultValue={5}
            onChange={(value: number) => resizeImg(`${value * 10}%`)}
            thumbClassName=" rounded-full cursor-grabbing border -top-2.5 w-6 h-6 text-xs text-center flex items-center justify-center bg-gray-300 "
            trackClassName="example-track border border-black"
            renderThumb={(props, state) => (
              <div {...props}>{state.valueNow}</div>
            )}
          />
        ) : (
          ""
        )}
        <LazyImage
          className=""
          src={src}
          altText={altText}
          imageRef={imageRef}
          width={width}
          height={height}
          maxWidth={maxWidth}
        />
      </>
    </Suspense>
  );
}
