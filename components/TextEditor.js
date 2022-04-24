import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import dynamic from "next/dynamic";

const Editor = dynamic(
  () => {
    return import("react-draft-wysiwyg").then((mod) => mod.Editor);
  },
  { ssr: false }
);

const TextEditor = ({ editorState, setEditorState, readOnly }) => {
  if (readOnly) {
    return (
      <Editor
        toolbarClassName="p-44"
        readOnly={true}
        editorState={editorState}
      />
    );
  }
  return (
    <Editor
      editorState={editorState}
      toolbarClassName="toolbarClassName"
      wrapperClassName="border-2"
      editorClassName="p-4 pt-0"
      onEditorStateChange={setEditorState}
    />
  );
};

export default TextEditor;
