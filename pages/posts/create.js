import Layout from "../../components/Layout";
import { useState, useEffect } from "react";
import { postBlog } from "../../services/user.service";

import TitleEditor from "../../components/editor/TitleEditor";
import Editor from "../../components/editor/ContentEditor";
import Router from "next/router";

const Create = () => {
  // const [options, setOptions] = useState([]);

  // const [category, setCategory] = useState(null);
  // const [title, setTitle] = useState(null);
  // const [content, setContent] = useState(null);
  // const [image, setImage] = useState(null);

  const [post, setPost] = useState({
    title: null,
    subtitle: null,
    content: null,
    image: null,
    content: "",
    category: "",
  });

  // useEffect(() => {
  //   categories()
  //     .then((res) => {
  //       setOptions(
  //         res.data.map((option) => {
  //           return { value: option._id, label: option.name };
  //         })
  //       );
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

  useEffect(() => {
    console.log(post.content);
    console.log(JSON.parse(post.content || "{}"));
  }, [post.content]);

  const handleSubmit = async () => {
    // if (
    //   title !== null &&
    //   image !== null &&
    //   content !== null
    //   // category !== null
    // ) {
    //   return await post(title, image, content, null)
    //     .then((res) => {
    //       console.log(res);
    //       setCategory(null);
    //       setTitle(null);
    //       setContent(null);
    //       setImage(null);
    //       setEditorState(EditorState.createEmpty());
    //     })
    //     .catch((err) => console.log(err));
    // }
    // return;

    console.log(post);

    return await postBlog({ ...post })
      .then((res) => {
        console.log(res);
        // setPost({
        //   title: null,
        //   subtitle: null,
        //   content: null,
        //   image: null,
        //   content: "",
        // });
        // setEditorState(EditorState.createEmpty());
        return Router.reload();
      })
      .catch((err) => console.log(err));
  };

  const handleSave = () => {
    localStorage.setItem("unpublishedWork", JSON.stringify(post));
    // return console.log(localStorage.getItem('unpublishedWork'))
    const posts = localStorage.getItem("unpublishedWork");

    console.log(JSON.parse(posts));
  };

  return (
    <Layout bg={false}>
      <div className="background lg:w-10/12 mx-auto flex pb-20 pt-10 items-center justify-center h-auto">
        <div className="h-auto min-h-screen w-11/12 gap-5 mx-auto flex ">
          {/* <div className=" w-20 bg-black flex-shrink-0 rounded-l-2xl "></div> */}
          <div className="flex bg-white px-6 flex-grow-0 flex-shrink rounded-2xl flex-col items-end w-3/4 mx-auto">
            <div className="mt-4 w-full mx-auto overflow-hidden flex-grow-0">
              <TitleEditor
                setTitle={(title) => setPost({ ...post, title })}
                setSubtitle={(subtitle) => setPost({ ...post, subtitle })}
                setImage={(image) => setPost({ ...post, image })}
                image={post.image}
                setCategory={(category) => setPost({ ...post, category })}
                categoryValue={post.category}
              />
              {/* <ContentEditor
                editorState={editorState}
                setEditorState={onEditorStateChange}
              /> */}
              <Editor
                content={post.content}
                setContent={(content) => setPost({ ...post, content })}
              />
            </div>
            <div className="flex gap-3">
              <button
                onClick={handleSave}
                className="justify-end mt-3 w-fit text-xl bg-gray-300 border-collapse border text-black font-semibold p-3 px-4 rounded-xl"
              >
                Save
              </button>{" "}
              <button
                onClick={handleSubmit}
                className="justify-end mt-3 w-fit text-xl bg-black text-white font-semibold p-3 px-4 rounded-xl"
              >
                Publish
              </button>
            </div>
          </div>
          <div className=" w-1/4 flex-shrink-0 relative">
            <div className="h-auto top-5 bg-yellow-100 rounded-xl p-2">
              <h1 className="text-2xl font-bold">Contents</h1>
              <ul className="text-lg pl-5 list-disc ">
                {post.content == "" || post.content == undefined
                  ? ""
                  : JSON.parse(post.content)
                      .root.children.filter((child) => child.tag == "h1")
                      .map((h) => (
                        <li
                          key={Date.now()}
                          className="list-item underline py-1"
                        >
                          <a href={`#${"pppp"}`}>
                            {h.children[0] == undefined
                              ? ""
                              : h.children[0].text}
                          </a>
                        </li>
                      ))}
                {/* <li className="list-item underline">
                  <a href="#p">Hi</a>
                </li>
                <li>Ho</li>
                <li>So</li> */}
              </ul>
            </div>
            <div className="bg-white h-64 p-2 mt-3 rounded-2xl border">
              <h1 className="text-2xl font-bold pb-2">Unpublished Work</h1>
              <div className="hover:bg-slate-200 p-1 rounded cursor-pointer">
                <p className="">This is first one</p>
              </div>
              <hr className="my-1" />
              <div className="hover:bg-slate-200 p-1 rounded-lg cursor-pointer">
                <p className="">This is second one</p>
              </div>
              {/* <hr className="my-1" /> */}
              {/* <p>This is second one</p> */}
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .background {
          // background: url("https://images.unsplash.com/photo-1541869440787-abe7669a951a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80");
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
