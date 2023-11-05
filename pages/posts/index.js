import { useEffect, useState } from "react";
import Card from "../../components/Card";
import Layout from "../../components/Layout";
import { categories, posts } from "../../services/blog.service";
import { useRouter } from "next/router";
import { check } from "../../services/user.service";
import { deleteArticle } from "../../services/admin.service";

const Home = () => {
  const router = useRouter();
  const [postItems, setPostItems] = useState([]);
  const [categoryList, setCategoryList] = useState([]);
  const [sort, setSort] = useState({ sort: "all", status: false });
  const [isAdmin, setIsAdmin] = useState(false);
  
  // useEffect(() => {
  //   categories().then((res) => {
  //     setCategoryList([...res.data]);
  //   });

  //   if (router.query.sort) {
  //     setSort({ ...router.query, status: true });
  //   }

  //   check()
  //     .then((res) => {
  //       if (res.status) {
  //         return setIsAdmin(res.role === "admin");
  //       }
  //       return;
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  // useEffect(() => {
  //   if (!sort.status) {
  //     posts().then((res) => {
  //       setPostItems([...res.data]);
  //     });
  //   } else {
  //     posts(`${sort.sort}`).then((res) => {
  //       setPostItems([...res.data]);
  //     });
  //   }
  //   // console.log({ query: router.query });
  // }, [sort]);

  return (
    <Layout>
      <div className="py-24">
        <div className="w-11/12 md:w-10/12 mx-auto">
          <div className="flex justify-between py-4 pb-8">
            <button className="md:hidden"></button>

            <div className="md:flex hidden md:gap-8 lg:gap-12 text-base">
              <button
                onClick={() => setSort({ sort: "all", status: false })}
                className={sort.sort === "all" ? "font-medium" : ""}
              >
                Latest Articles
              </button>
              {categoryList.map((listItem) => (
                <button
                  onClick={() =>
                    setSort({
                      sort: listItem._id,
                      category: listItem.name,
                      status: true,
                    })
                  }
                  key={listItem._id}
                  className={
                    sort.category === listItem.name ? "font-medium" : ""
                  }
                >
                  {listItem.name}
                </button>
              ))}
            </div>
            <div className="flex overflow-hidden items-center bg-gray-200 rounded-full">
              <input className="bg-gray-200 h-6 px-4 outline-none" />
              <button className="px-2 p-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
          <p className="text-3xl font-semibold">All Posts</p>
          <hr className="my-2" />
          <div className="gap-4 mt-4 md:gap-9 w-full grid grid-cols-2 md:grid-cols-3">
            {postItems.map((item) => (
              <Card
                key={item._id}
                title={item.title}
                image={item.image}
                id={item._id}
                category={item.category.name}
                admin={isAdmin}
                removeButtonFunc={async () => {
                  await deleteArticle(item._id)
                    .then(() => {
                      setSort({ ...sort });
                    })
                    .catch((err) => console.log(err));
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
