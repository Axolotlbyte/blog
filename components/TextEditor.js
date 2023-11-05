import { useState, useCallback } from "react";
import { createEditor, Editor, Transforms, Element } from "slate";
import { Slate, Editable, withReact } from "slate-react";
// import { Editor } from "lexical"

const CodeElement = (props) => {
  return (
    <pre {...props.attributes}>
      <code>{props.children}</code>
    </pre>
  );
};

const TitleElement = (props) => {
  return (
    <h1 {...props.attributes} className="text-5xl py-2 font-bold">
      {props.children}
    </h1>
  );
};

const SubtitleElement = (props) => {
  return (
    <h2 className="text-2xl py-2 text-gray-600" {...props.attributes}>
      {props.children}
    </h2>
  );
};

const HeadingElement = (props) => {
  return (
    <h3 className="text-3xl py-2 font-bold" {...props.attributes}>
      {props.children}
    </h3>
  );
};

const QuoteElement = (props) => {
  return <div {...props.attributes}>{props.children}</div>;
};

const DefaultElement = (props) => {
  return (
    <p
      className="text-xl break-words tracking-tight font-merriweather leading-8 line-clamp-2 "
      {...props.attributes}
    >
      {props.children}
    </p>
  );
};

const Leaf = (props) => {
  return (
    <span
      {...props.attributes}
      className={
        "" +
        (props.leaf.bold ? " font-bold" : "") +
        (props.leaf.italic ? " italic" : "") +
        (props.leaf.underline ? " underline" : "")
      }
    >
      {props.children}
    </span>
  );
};

const TextEditor = ({ editorState, setEditorState, readOnly }) => {
  const [editor] = useState(() => withReact(createEditor()));

  const renderElement = useCallback((props) => {
    switch (props.element.type) {
      case "title":
        return <TitleElement {...props} />;
      case "subtitle":
        return <SubtitleElement {...props} />;
      case "heading":
        return <HeadingElement {...props} />;
      case "code":
        return <CodeElement {...props} />;
      default:
        return <DefaultElement {...props} />;
    }
  }, []);

  const renderLeaf = useCallback((props) => {
    return <Leaf {...props} />;
  }, []);

  const initialValue = [
    {
      type: "title",
      children: [{ text: "This is the title." }],
    },
    {
      type: "subtitle",
      children: [
        { text: "The subtitle would be explaining the title ofcourse." },
      ],
    },
    {
      type: "heading",
      children: [{ text: "This is a Heading." }],
    },
    {
      type: "paragraph",
      children: [{ text: "A line of text in a paragraph." }],
    },
  ];

  return (
    <Slate editor={editor} initialValue={initialValue}>
      <Editable
        renderElement={renderElement}
        renderLeaf={renderLeaf}
        onKeyDown={(event) => {
          if (!event.ctrlKey) {
            return;
          }

          switch (event.key) {
            case "0": {
              event.preventDefault();
              const [match] = Editor.nodes(editor, {
                match: (n) => n.type === "code",
              });
              Transforms.setNodes(
                editor,
                { type: match ? null : "code" },
                { match: (n) => Editor.isBlock(editor, n) }
              );
              break;
            }

            case "b": {
              event.preventDefault();
              const [match] = Editor.marks(editor, {
                match: (n) => n.type === "bold"
              })
              Editor.addMark(editor, "bold", true);
              break;
            }

            case "i": {
              event.preventDefault();
              Editor.addMark(editor, "italic", true);
              break;
            }

            case "u": {
              event.preventDefault();
              Editor.addMark(editor, "underline", true);
              break;
            }
          }
        }}
      />
    </Slate>
  );

  // if (readOnly) {
  //   return (
  //     <Editor
  //       toolbarClassName="p-44"
  //       readOnly={true}
  //       editorState={editorState}
  //     />
  //   );
  // }
  // return (
  //   <Editor
  //     editorState={editorState}
  //     toolbarClassName="toolbarClassName"
  //     wrapperClassName="border-2"
  //     editorClassName="p-4 pt-0"
  //     onEditorStateChange={setEditorState}
  //   />
  // );
};

// import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
// import dynamic from "next/dynamic";

// const Editor = dynamic(
//   () => {
//     return import("react-draft-wysiwyg").then((mod) => mod.Editor);
//   },
//   { ssr: false }
// );

export default TextEditor;
