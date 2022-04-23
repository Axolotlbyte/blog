import { useEffect, useState } from "react";
import Card from "../components/Card";
import Layout from "../components/Layout";
import { categories, posts } from "../services/blog.service";
import Router from "next/router";
import axios from "axios";
import Image from "next/image";

export const getStaticProps = async () => {
  const res = await axios.get(`${process.env.API_URL}/api/article`);

  return { props: { recents: [...res.data.slice(0, 3)] } };
};

export default function Home({ recents }) {
  const [categoryList, setCategoryList] = useState([]);
  const [postList, setPostList] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    posts().then((res) => {
      setPostList([...res.data]);
    });
    categories().then((res) => setCategoryList([...res.data]));
  }, []);

  useEffect(() => {
    if (categoryList.length !== 0) {
      posts().then((res) => {
        const postsObj = [];
        categoryList.map((catItem) => {
          postsObj[`${catItem.name}`] = [
            ...res.data
              .filter((postItem) => postItem.category._id === catItem._id)
              .slice(0, 3),
          ];
        });
        setPostList({ ...postsObj });
      });
    } else {
      setLoading(true);
    }
  }, [categoryList]);

  return (
    <Layout>
      <div className="background relative overflow-hidden h-70vh pt-20">
        <div className="w-full h-full bg-black bg-opacity-30 ">
          <h1 className="font-semibold pl-6 text-yellow-500 text-5xl pt-28">
            The Titanium Blog.
          </h1>
          <p className="p-6 w-3/4 lg:w-3/5 text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            consequat sem magna, eget vestibulum lorem efficitur eu. Cras nisi
            nunc, lobortis non mauris ac
          </p>
        </div>
        <div
          id="categories"
          className="absolute flex gap-4 px-4 text-white w-auto h-12 bottom-0 right-0 bg-yellow-500"
        >
          <button className="z-10 font-medium">SCIENCE</button>
          <button className="z-10 font-medium">TECHNOLOGY</button>
          <button className="z-10 font-medium">ENTERTAINMENT</button>
        </div>
      </div>

      <div className="h-auto w-11/12 mx-auto py-2">
        <div className="flex justify-between">
          <h1 className="text-4xl font-semibold py-2.5 text-gray-500">
            Most Recent
          </h1>
          <button
            onClick={() => Router.push("/posts")}
            className="flex text-yellow-500 items-center gap-1"
          >
            explore all
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 16 16"
              className="h-4 w-4 mt-1"
            >
              <path
                fillRule="evenodd"
                d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"
              />
            </svg>
          </button>
        </div>
        <div className="flex flex-col md:flex-row gap-2">
          <Card
            title={recents[0].title}
            key={recents[0]._id}
            id={recents[0]._id}
            category={recents[0].category.name}
            image={recents[0].image}
          />
          <div className="w-full md:w-2/5 flex md:flex-col gap-2">
            <Card
              title={recents[1].title}
              key={recents[1]._id}
              id={recents[1]._id}
              category={recents[1].category.name}
              image={recents[1].image}
            />
            <Card
              title={recents[2].title}
              key={recents[2]._id}
              id={recents[2]._id}
              category={recents[2].category.name}
              image={recents[2].image}
            />
          </div>
        </div>
      </div>

      <div className="relative shadow-lg hover:shadow-xl cursor-pointer w-5/6 my-6 mx-auto flex  md:h-64 sm:h-44 h-32 bg-gradient-to-br from-red-500 via-pink-400 to-red-300">
        <p className="text-2xl md:text-5xl w-1/3 ml-8 h-full flex justify-center flex-col text-white bg-opacity-0">
          Become a <span className="font-medium bg-opacity-0">Blogger.</span>
        </p>
        <p className="flex absolute bg-yellow-500 p-2 ring-2 ring-white rounded-lg right-4 top-1/3 z-40 md:text-xl md:right-10 lg:text-3xl lg:right-14 lg:bottom-1/3 lg:top-1/3 text-white items-center font-bold">
          JOIN NOW
        </p>
        <div id="image" className="relative w-full h-full overflow-hidden ">
          <Image
            alt="Mountains"
            src={"/ad.svg"}
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>

      <p className="text-center text-4xl py-8">Discover the latest in...</p>

      {Object.entries(postList).map((item) => {
        return (
          <div key={item[0]} className="w-11/12 mx-auto py-6 h-auto">
            <p className="flex justify-between text-yellow-500 items-center">
              <h1 className="font-semibold text-3xl text-gray-700 uppercase ">
                {item[0]}
              </h1>
              <button
                onClick={() =>
                  Router.push({
                    pathname: "/posts",
                    query: {
                      sort: `${item[1][0].category._id}`,
                      category: `${item[1][0].category.name}`,
                    },
                  })
                }
                className="flex items-center gap-1"
              >
                explore
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  className="h-4 w-4 mt-1"
                >
                  <path
                    fillRule="evenodd"
                    d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"
                  />
                </svg>
              </button>
            </p>
            <hr className="w-full mb-2" />
            <div className="grid md:grid-cols-3 gap-2 my-2">
              {item[1].length
                ? item[1].map((post) => (
                    <Card
                      key={post._id}
                      id={post._id}
                      image={post.image}
                      title={post.title}
                      category={post.category.name}
                    />
                  ))
                : ""}
            </div>
          </div>
        );
      })}

      <style jsx>{`
        .aspect-card {
          aspect-ratio: 1/0.65;
        }
        .aspect-img {
          aspect-ratio: 1/0.56;
        }
        #categories:after {
          z-index: 1;
          content: "";
          position: absolute;
          right: 0;
          bottom: 0;
          height: 100%;
          width: 102%;
          background-color: inherit;
          -webkit-transform: skewX(-10deg);
          -moz-transform: skewX(-10deg);
          -ms-transform: skewX(-10deg);
          transform: skewX(-10deg);
        }
        .background {
          background: url("/background.jpg");
          background-repeat: no-repeat;
          background-size: 100% 100%;
          background-attachment: fixed;
        }
        .h-70vh {
          height: 88vh;
        }
      `}</style>
    </Layout>
  );
}
