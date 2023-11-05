import Image from "next/image";
import { useRouter } from "next/router";
import DeleteButton from "./DeleteButton";
// import { useEffect, useState } from "react";

const Card = ({
  title,
  category,
  image,
  id,
  admin,
  removeButtonFunc,
  small,
}) => {
  const router = useRouter();

  return (
    <div className="relative w-full rounded-2xl overflow-hidden">
      {admin ? <DeleteButton removeFunc={removeButtonFunc} /> : null}
      <div
        id="card"
        onClick={() => router.push(`/posts/${id}`)}
        className="w-full z-30 h-auto cursor-pointer relative"
      >
        <div className="aspect-img overflow-hidden bg-gray-300">
          <div id="image" className="relative w-full h-full overflow-hidden">
            <Image
              alt="Mountains"
              src={image ? image : "/article-img.webp"}
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
        <div
          className={
            "absolute p-2 rounded-xl" +
            (small ? " top-0 left-0 w-4/5" : " top-5 left-5 w-1/2")
          }
        >
          <span className="flex w-fit items-center justify-center bg-white bg-opacity-50 border px-2 rounded-r-full rounded-l-full ">
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              class="bi bi-dot h-7 w-7"
              viewBox="0 0 16 16"
            >
              <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
            </svg> */}

            <p className="text-xl font-light w-fit">{category ? category : "Category"}</p>
          </span>

          <p
            className={
              "font-medium flex leading-snug break-words rounded-xl flex-wrap rounded-tl-none pt-2 " +
              (small ? " text-3xl" : " text-4xl")
            }
          >
            {title
              ? title.split(" ").map((word) => (
                  <span key={word} className="bg-white p-1 w-fit">
                    {word}
                    {" "}
                  </span>
                ))
              : "Lorem ipsum dolor si amet, hola soy dora puela si amora"}
            {/* {arrOfTitle.map(sentence => <span className="bg-white p-2 rounded-xl w-fit rounded-l-none">{sentence}</span>)} */}
          </p>
        </div>

        <div className="absolute bottom-5 left-5 text-lg text-white">
          27 Jan 2024
        </div>

        <button className="absolute bottom-5 right-5 text-3xl bg-white p-3 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
            />
          </svg>
        </button>
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

export default Card;
