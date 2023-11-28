// import Image from "next/image";
import axios from "axios";
import Layout from "../../components/Layout";
// import Comments from "../../components/Comments";
// import TextEditor from "../../components/TextEditor";
// import { EditorState, convertFromRaw, convertToRaw } from "draft-js";
// import dynamic from "next/dynamic";
import TitleEditor from "../../components/editor/TitleEditor";
import Editor from "../../components/editor/ContentEditor";
// import { useState } from "react";
import AdCard from "../../components/cards/AdCard";
import PostCard from "../../components/cards/Post";
import JoinNewsletter from "../../components/JoinNewsletter";
import About from "../../components/cards/About";

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

const post = ({
  title,
  content,
  image,
  _id,
  comment,
  category,
  subtitle,
  allPosts,
}) => {
  console.log(content);
  console.log(allPosts);

  return (
    <Layout title={title} bg={false}>
      <div className="background lg:w-10/12 mx-auto flex pb-20 pt-10 items-center justify-center h-auto">
        <section className="h-auto min-h-screen gap-10 mx-auto flex ">
          <div className="flex bg-white flex-grow-0 flex-shrink rounded-2xl flex-col items-end w-11/12 lg:w-3/4 mx-auto">
            <div className="mt-4 w-full mx-auto overflow-hidden flex-grow-0">
              <TitleEditor
                readOnly
                title={title}
                subtitle={subtitle}
                image={image}
                categoryValue={category}
              />
              <Editor
                readOnly={true}
                id={_id}
                setContent={() => ""}
                content={content}
              />
              <About />
            </div>
          </div>

          <div className="w-1/4 hidden lg:flex flex-col flex-shrink-0 relative">
            <div className="h-auto top-5 bg-yellow-100 rounded-xl p-2">
              <h1 className="text-2xl font-bold">Contents</h1>
              <ul className="pl-5 list-disc text-base ">
                {content == "" || content == undefined
                  ? ""
                  : JSON.parse(content)
                      .root.children.filter((child) => child.tag == "h1")
                      .map((h) => (
                        <li
                          key={Date.now()}
                          className="list-item underline py-2"
                        >
                          <a href={`#${"pppp"}`}>
                            {h.children[0] == undefined
                              ? ""
                              : h.children[0].text}
                          </a>
                        </li>
                      ))}
              </ul>
            </div>
            <div className="py-5">
              <AdCard square />
            </div>
          </div>
        </section>
      </div>
      <section className="bg-white py-8 pb-16 w-11/12 lg:w-10/12 mx-auto">
        <p className="text-3xl md:text-4xl py-12 font-extrabold">Other Posts</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-10 gap-y-14">
          {allPosts.map((post) => (
            <PostCard
              title={post.title}
              key={post._id}
              id={post._id}
              category={post.category ? post.category : "Test"}
              image={post.image}
              date={post.date}
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
