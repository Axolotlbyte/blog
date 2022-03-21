import Card from "../components/Card";
import Layout from "../components/Layout";

const explore = () => {
  return (
    <Layout>
      <div className="pt-24">
        <div className="w-11/12 md:w-10/12 mx-auto">
          <div className="flex justify-between py-4 pb-8">
            <button className="md:hidden"></button>
            <div className="md:flex hidden md:gap-8 lg:gap-12 text-base">
              <button className="font-medium">Latest Articles</button>
              <button className="">Science</button>
              <button className="">Technology</button>
              <button className="">Entertainment</button>
            </div>
            <div className="flex overflow-hidden items-center bg-gray-200 rounded-full">
            <input className="bg-gray-200 h-6 px-4 outline-none"/>
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
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default explore;
