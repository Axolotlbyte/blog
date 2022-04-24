import Image from "next/image";
import axios from "axios";
import Layout from "../../components/Layout";
import Comments from "../../components/Comments";
import TextEditor from "../../components/TextEditor";
import { EditorState, convertFromRaw, convertToRaw } from "draft-js";
import dynamic from "next/dynamic";

const Editor = dynamic(
  () => {
    return import("draft-js").then((mod) => mod.Editor);
  },
  { ssr: false }
);

export const getStaticPaths = async () => {
  const res = await axios.get(`${process.env.API_URL}/api/article`);
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
  const res = await axios.get(`${process.env.API_URL}/api/article/${id}`);
  return { props: { ...res.data } };
};

const post = ({ title, content, image, user, _id, comment }) => {
  return (
    <Layout>
      <div className="pt-20">
        <div className=" w-full aspect-img bg-gray-300">
          <div id="image" className="relative w-full h-full overflow-hidden ">
            <Image
              alt="Mountains"
              src={image ? image : "/article-img.webp"}
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
        <div className=" h-auto w-11/12 lg:w-3/5 md:ml-16 lg:ml-24 mx-auto md:mx-0 sm:w-10/12 md:w-3/4">
          <div className="">
            <h1 className="text-4xl font-semibold py-4">{title}</h1>
            <div className="flex items-center pb-4">
              <div className="w-5 h-5 relative overflow-hidden flex items-center justify-center text-white ring-blue-500 bg-gradient-to-br from-purple-400 via-violet-400 to-blue-500 rounded-full ring-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="bi bi-person-fill h-6 w-6 absolute -bottom-1"
                  viewBox="0 0 16 16"
                >
                  <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                </svg>
              </div>
              <p className="font-medium pl-2 text-base">{user.username}</p>
            </div>
            {/* <p className="text-lg leading-8 ">{content}</p> */}
            <p className="leading-8 text-lg">
              <Editor
                readOnly={true}
                editorState={EditorState.createWithContent(
                  convertFromRaw(JSON.parse(content))
                )}
              />
            </p>
          </div>
        </div>
        <Comments id={_id} comments={comment} />
      </div>

      <style jsx>{`
        .aspect-img {
          aspect-ratio: 1/0.35;
        }
      `}</style>
    </Layout>
  );
};

export default post;
