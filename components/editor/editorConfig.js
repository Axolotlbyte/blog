import { EmojiNode } from "./nodes/EmojiNode";
import ExampleTheme from "./themes/ExampleTheme";
// import { EditorConfig } from "lexical";

const editorConfig = {
  theme: ExampleTheme,
  onError(error) {
    throw error;
  },
  nodes: [EmojiNode]
};

export default editorConfig;
