import Card from "../components/Card";
import Layout from "../components/Layout";

export default function Home() {
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
          <button className="flex text-yellow-500 items-center gap-1">
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
          <Card />
          <div className="w-full md:w-2/5 flex md:flex-col gap-2">
            <Card />
            <Card />
          </div>
        </div>
      </div>

      <div className=" shadow-lg hover:shadow-xl cursor-pointer w-5/6 my-4 mx-auto flex justify-between md:h-64 sm:h-44 h-32 bg-gradient-to-br from-pink-300 via-pink-200 to-red-300">
        <p className="text-2xl md:text-5xl w-1/3 ml-8 h-full flex justify-center flex-col text-black">
          Become a <span className="font-medium">Blogger.</span>
        </p>
        <p className="h-full flex items-center pr-6 font-bold">JOIN NOW</p>
      </div>

      <p className="text-center text-4xl py-8">Discover the latest in...</p>

      <div className="w-11/12 mx-auto h-auto">
        <p className="flex justify-between text-yellow-500 items-center">
          <h1 className="font-semibold text-3xl text-gray-700">SCIENCE</h1>
          <button className="flex items-center gap-1">
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
          <Card />
          <Card />
          <Card />
        </div>
      </div>

      <div className="w-11/12 mt-8 mx-auto h-auto">
        <p className="flex justify-between text-yellow-500 items-center">
          <h1 className="font-semibold text-3xl text-gray-700">TECHNOLOGY</h1>
          <button className="flex items-center gap-1">
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
          <Card />
          <Card />
          <Card />
        </div>
      </div>

      <div className="w-11/12 mx-auto mt-8 h-auto">
        <p className="flex justify-between text-yellow-500 items-center">
          <h1 className="font-semibold text-3xl text-gray-700">
            ENTERTAINMENT
          </h1>
          <button className="flex items-center gap-1">
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
          <Card />
          <Card />
          <Card />
        </div>
      </div>

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
