import Image from "next/image";
import axios from "axios";
import Layout from "../../components/Layout";
import Comments from "../../components/Comments";
import TextEditor from "../../components/TextEditor";
import { EditorState, convertFromRaw, convertToRaw } from "draft-js";
import dynamic from "next/dynamic";
import TitleEditor from "../../components/editor/TitleEditor";
import Editor from "../../components/editor/ContentEditor";
import { useState } from "react";
import AdCard from "../../components/cards/AdCard";
import PostCard from "../../components/cards/Post";
import JoinNewsletter from "../../components/JoinNewsletter";
import About from "../../components/cards/About";

// const Editor = dynamic(
//   () => {
//     return import("draft-js").then((mod) => mod.Editor);
//   },
//   { ssr: false }
// );

export const getStaticPaths = async () => {
  const res = await axios.get(`${process.env.API_URL}/api/post`);
  const paths = res.data.map((item) => {
    return { params: { id: item._id } };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await axios.get(`${process.env.API_URL}/api/post/${id}`);

  const posts = await axios.get(`${process.env.API_URL}/api/post`);

  return { props: { ...res.data, allPosts: posts.data } };
};

const post = ({ title, content, image, _id, comment, subtitle, allPosts }) => {
  console.log(content);

  return (
    // <Layout>
    //   <div className="pt-20">
    //     <div className="w-full aspect-img bg-white">
    //       <div id="image" className="relative w-full h-full overflow-hidden ">
    //         <Image
    //           alt="Mountains"
    //           src={image ? image : "/article-img.webp"}
    //           layout="fill"
    //           objectFit="cover"
    //         />
    //       </div>
    //     </div>
    //     <div className=" h-auto w-11/12 lg:w-3/5 md:ml-16 lg:ml-24 mx-auto md:mx-0 sm:w-10/12 md:w-3/4">
    //       <div className="">
    //         <h1 className="text-4xl font-semibold py-4">{title}</h1>
    //         <div className="flex items-center pb-4">
    //           <div className="w-5 h-5 relative overflow-hidden flex items-center justify-center text-white ring-blue-500 bg-gradient-to-br from-purple-400 via-violet-400 to-blue-500 rounded-full ring-2">
    //             <svg
    //               xmlns="http://www.w3.org/2000/svg"
    //               fill="currentColor"
    //               className="bi bi-person-fill h-6 w-6 absolute -bottom-1"
    //               viewBox="0 0 16 16"
    //             >
    //               <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
    //             </svg>
    //           </div>
    //           {/* <p className="font-medium pl-2 text-base">{user.username}</p> */}
    //         </div>
    //         {/* <p className="text-lg leading-8 ">{content}</p> */}
    //         <p className="leading-8 text-lg">
    //           {/* <Editor
    //             readOnly={true}
    //             editorState={EditorState.createWithContent(
    //               convertFromRaw(JSON.parse(content))
    //             )}
    //           /> */}
    //         </p>
    //       </div>
    //     </div>
    //     <Comments id={_id} comments={comment} />
    //   </div>

    //   <style jsx>{`
    //     .aspect-img {
    //       aspect-ratio: 1/0.35;
    //     }
    //   `}</style>
    // </Layout>
    <Layout bg={false}>
      <div className="background lg:w-10/12 mx-auto flex pb-20 pt-10 items-center justify-center h-auto">
        <section className="h-auto min-h-screen gap-10 mx-auto flex ">
          {/* <div className=" w-20 bg-black flex-shrink-0 rounded-l-2xl "></div> */}
          <div className="flex bg-white flex-grow-0 flex-shrink rounded-2xl flex-col items-end w-3/4 mx-auto">
            <div className="mt-4 w-full mx-auto overflow-hidden flex-grow-0">
              <TitleEditor
                readOnly
                title={title}
                subtitle={subtitle}
                image={image}
              />
              {/* <ContentEditor
              editorState={editorState}
              setEditorState={onEditorStateChange}
            /> */}
              <Editor readOnly={true} setContent={() => ""} content={content} />
              <About />
            </div>
            {/* 
            <button
              onClick={handleSubmit}
              className="justify-end mt-3 w-fit text-xl bg-black text-white font-semibold p-3 px-4 rounded-xl"
            >
              Publish
            </button> */}
          </div>
          <div className="w-1/4 flex-shrink-0 relative">
            <div className="h-auto top-5 bg-yellow-100 rounded-xl p-2">
              <h1 className="text-2xl font-bold">Contents</h1>
              <ul className="pl-5 list-disc text-base ">
                {content == "" || content == undefined
                  ? ""
                  : JSON.parse(content)
                      .root.children.filter((child) => child.tag == "h1")
                      .map((h) => (
                        <li className="list-item underline py-2">
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
            <div className="py-5">
              <AdCard square />
            </div>
          </div>
        </section>
      </div>
      <section className="bg-white py-8 pb-16 w-10/12 mx-auto">
        <p className="text-4xl py-12 font-extrabold">Other Posts</p>
        <div className="grid grid-cols-1 md:grid-cols-3 mx-auto gap-10 gap-y-14">
          {allPosts.map((post) => (
            <PostCard
              title={post.title}
              key={post._id}
              id={post._id}
              category={post.category ? "" : "Test"}
              image={post.image}
            />
          ))}
        </div>
      </section>

      <JoinNewsletter post />
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

export default post;
