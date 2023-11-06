import Image from "next/image";
import { useRouter } from "next/router";
// import DeleteButton from "./DeleteButton";
import { useEffect, useState } from "react";

const PostCard = ({
  title,
  category,
  image,
  id,
  date,
  admin,
  removeButtonFunc,
}) => {
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

  const months = [
    { month: "Jan", id: 1 },
    { month: "Feb", id: 2 },
    { month: "Mar", id: 3 },
    { month: "Apr", id: 4 },
    { month: "May", id: 5 },
    { month: "Jun", id: 6 },
    { month: "Jul", id: 7 },
    { month: "Aug", id: 8 },
    { month: "Sep", id: 9 },
    { month: "Oct", id: 10 },
    { month: "Nov", id: 11 },
    { month: "Dec", id: 12 },
  ];

  return (
    <div className="relative w-full overflow-hidden">
      <div
        id="card"
        onClick={() => router.push(`/posts/${id}`)}
        className="w-full z-30 h-auto cursor-pointer relative"
      >
        <span className="flex w-fit items-center justify-start bg-black text-white px-5 py-1 rounded-t-xl">
          <p className="text-md w-fit">{category ? category : "Category"}</p>
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
              "font-medium bg-white leading-snug grid rounded-xl rounded-tl-none py-2 text-2xl md:text-3xl"
            }
          >
            <p className="text-base ">
              {new Date(date).getDate()},
              {" "}
              {months.filter(month => month.id == new Date(date).getMonth())[0].month}
              {" "}
              {new Date(date).getFullYear()}
            </p>
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
