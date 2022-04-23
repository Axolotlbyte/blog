import Layout from "../../components/Layout";
// import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import dynamic from "next/dynamic";
const Editor = dynamic(
  () => {
    return import("react-draft-wysiwyg").then((mod) => mod.Editor);
  },
  { ssr: false }
);
import { useState, useEffect } from "react";
import Select from "react-select";
import { categories } from "../../services/blog.service";

const Create = () => {
  const [editorState, setEditorState] = useState("");
  const [options, setOptions] = useState([]);
  const [category, setCategory] = useState(null);

  useEffect(() => {
    categories()
      .then((res) => {
        console.log(res);
        setOptions(
          res.data.map((option) => {
            return { value: option._id, label: option.name };
          })
        );
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    console.log(editorState);
  }, [editorState]);

  return (
    <Layout>
      <div className="background pt-20 flex items-center justify-center h-auto">
        <div className=" w-full h-auto min-h-screen">
          <div className="flex bg-white p-6 py-12 rounded-lg flex-col my-14 lg:my-20  w-11/12 md:w-10/12 lg:w-3/5 mx-auto">
            <p className="flex text-3xl items-center">
              Write a Post{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="bi bi-pen-fill h-6 w-6 ml-4"
                viewBox="0 0 16 16"
              >
                <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001z" />
              </svg>
            </p>
            <hr />

            <div className="w-full flex items-center">
              <button className="border-b-2 p-1 py-1.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </button>
              <input
                type="text"
                placeholder="Image URL"
                className="border-b-2 w-full text-lg my-2 p-1 outline-none"
              />
            </div>

            <div className="w-full flex items-center">
              <button className="border-b-2 p-1 py-1.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>
              </button>
              <input
                type="text"
                placeholder="Title"
                className="border-b-2 w-full text-lg my-2 p-1 outline-none"
              />
            </div>

            <div className="w-full my-2">
              <Select
                value={category}
                onChange={(e) => setCategory(e)}
                options={options}
                placeholder="Select a Category..."
              />
            </div>

            <div className="mt-4">
              <Editor
                editorState={editorState}
                toolbarClassName="toolbarClassName"
                wrapperClassName="border-2"
                editorClassName="p-4 pt-0"
                onEditorStateChange={(e) => setEditorState(e)}
              />
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .background {
          background: url("https://images.unsplash.com/photo-1541869440787-abe7669a951a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80");
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
          background-attachment: fixed;
        }
      `}</style>
    </Layout>
  );
};

export default Create;
