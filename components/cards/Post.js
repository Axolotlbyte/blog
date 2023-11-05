import Image from "next/image";
import { useRouter } from "next/router";
// import DeleteButton from "./DeleteButton";
import { useEffect, useState } from "react";

const PostCard = ({ title, category, image, id, admin, removeButtonFunc }) => {
  const router = useRouter();
  const [arrOfTitle, setArrOfTitle] = useState([]);

  const breakTitle = () => {
    const words = title.split(" ");
    const titleArray = [];
    let maxLength = 30;

    // console.log(words)

    words.forEach((word) => {
      if (titleArray.length == 0) {
        return titleArray.push(word);
      }
      let index = titleArray.length - 1;
      let join = titleArray[index] + " " + word;
      let length = join.length;
      if (length <= maxLength) {
        titleArray.pop();
        maxLength = maxLength - 2;
        return titleArray.push(join);
      } else {
        return titleArray.push(word);
      }
    });
    // console.log(titleArray);

    return setArrOfTitle(titleArray);
  };

  // brek();
  useEffect(() => {
    breakTitle();
  }, []);

  return (
    <div className="relative w-full overflow-hidden">
      <div
        id="card"
        onClick={() => router.push(`/posts/${id}`)}
        className="w-full z-30 h-auto cursor-pointer relative"
      >
        <span className="flex w-fit items-center justify-start h-7 bg-black text-white pr-5 px-2 rounded-t-xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            class="bi bi-dot h-6 w-6"
            viewBox="0 0 16 16"
          >
            <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
          </svg>

          <p className="text-xl w-fit">{category ? category : "Category"}</p>
        </span>
        <div className="aspect-img overflow-hidden rounded-2xl rounded-tl-none bg-gray-300">
          <div id="image" className="relative w-full h-full overflow-hidden">
            <Image
              alt="Mountains"
              src={image ? image : "/article-img.webp"}
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
        <div className={"divide-x-2 divide-black "}>
          <div
            className={
              "font-medium bg-white leading-snug grid rounded-xl rounded-tl-none py-2 text-3xl"
            }
          >
            <p className="text-lg">27 Jan 2024</p>
            <span className="flex">
              {title
                ? title
                : "Lorem ipsum dolor si amet, hola soy dora puela si amora"}
            </span>
            {/* {arrOfTitle.map(sentence => <span className="bg-white p-2 rounded-xl w-fit rounded-l-none">{sentence}</span>)} */}
          </div>
          <hr className="border text-black bg-black border-solid" />
        </div>

        <style jsx>{`
          .aspect-img {
            aspect-ratio: 1/0.7;
          }
          #card:hover #image {
            transform: scale(1.1);
            transition: transform 0.3s ease-out;
          }
        `}</style>
      </div>
    </div>
  );
};

export default PostCard;
