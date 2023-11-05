import { useEffect, useState } from "react";
import Card from "../components/Card";
import Layout from "../components/Layout";
import { categories, posts } from "../services/blog.service";
import Router from "next/router";
import axios from "axios";
import Image from "next/image";
import PostCard from "../components/cards/Post";
import AdCard from "../components/cards/AdCard";
import JoinNewsletter from "../components/JoinNewsletter";

export const getStaticProps = async () => {
  console.log(process.env.API_URL);
  const res = await axios.get(`${process.env.API_URL}/api/post`);

  return {
    props: { recents: [...res.data.slice(0, 2)], allPosts: [...res.data] },
  };
};

export default function Home({ recents, allPosts }) {
  console.log(posts);
  const [categoryList, setCategoryList] = useState([]);
  const [postList, setPostList] = useState({});
  const [loading, setLoading] = useState(false);

  // title={posts[0].title}
  // key={posts[0]._id}
  // id={posts[0]._id}
  // category={posts[0].category.name}
  // image={posts[0].image}

  // posts = [
  //   {
  //     _id: 0,
  //     title: "This is the title, It is surely something. Mesmerising.",
  //     category: "Travel",
  //     image:
  //       "https://images.unsplash.com/photo-1678875202954-b24f95afa392?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1833&q=80",
  //   },
  //   {
  //     _id: 1,
  //     title: "This is the title, It is surely something. Mesmerising.",
  //     category: "Travel",
  //     image:
  //       "https://images.unsplash.com/photo-1695653227432-3228e1249246?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  //   },
  //   {
  //     _id: 2,
  //     title: "This is the title, It is surely something. Mesmerising.",
  //     category: "Travel",
  //     image:
  //       "https://images.unsplash.com/photo-1695653227432-3228e1249246?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  //   },
  // ];

  // useEffect(() => {
  //   posts().then((res) => {
  //     setPostList([...res.data]);
  //   });
  //   categories().then((res) => setCategoryList([...res.data]));
  // }, []);

  // useEffect(() => {
  //   if (categoryList.length !== 0) {
  //     posts().then((res) => {
  //       const postsObj = [];
  //       categoryList.map((catItem) => {
  //         postsObj[`${catItem.name}`] = [
  //           ...res.data
  //             .filter((postItem) => postItem.category._id === catItem._id)
  //             .slice(0, 3),
  //         ];
  //       });
  //       setPostList({ ...postsObj });
  //     });
  //   } else {
  //     setLoading(true);
  //   }
  // }, [categoryList]);

  return (
    <Layout bg={true}>
      <section className="h-auto w-11/12 mx-auto py-2">
        <div className="flex flex-col h-screen overflow-hidden md:flex-row gap-10">
          <div className="w-full">
            <h1 className="text-6xl font-extrabold italic pb-9 drop-shadow-xl ">
              Cream of the Month's Crop
            </h1>
            <Card
              title={recents[0].title}
              key={recents[0]._id}
              id={recents[0]._id}
              category={recents[0].category ? "" : "Test"}
              image={recents[0].image}
              date={recents[0].date}
            />
          </div>
          <div className="w-full md:w-2/6 flex flex-col pt-16 gap-2 flex-shrink-0">
            <AdCard />
            <Card
              title={recents[1].title}
              key={recents[1]._id}
              id={recents[1]._id}
              category={recents[1].category ? "" : "Test"}
              image={recents[1].image}
              date={recents[1].date}
              small
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-8 pb-16">
        <p className="text-center text-4xl py-12 font-extrabold">Discover</p>
        <div className="grid grid-cols-1 md:grid-cols-3 w-11/12 mx-auto gap-10 gap-y-14">
          {allPosts.map((post) => (
            <PostCard
              title={post.title}
              key={post._id}
              id={post._id}
              category={post.category ? "" : "Test"}
              image={post.image}
              date={post.date}
            />
          ))}
        </div>
      </section>

      <section className="pb-16 w-full bg-white">
        <div className="w-11/12 mx-auto bg-yellow-100 rounded-xl p-5">
          <h1 className="text-4xl">About</h1>
          <p>The Description of the guy who made this beautiful website.</p>
        </div>
      </section>

      <JoinNewsletter />

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
        .grad-bg {
          background-image: linear-gradient(
            90deg,
            rgba(224, 145, 7, 1) 50%,
            rgba(244, 255, 129, 1) 98%
          );
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>
    </Layout>
  );
}
