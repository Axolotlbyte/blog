import Image from "next/image";
import { useRouter } from "next/router";
import DeleteButton from "./DeleteButton";

const Card = ({ title, category, image, id, admin, removeButtonFunc }) => {
  const router = useRouter();

  return (
    <div className="relative w-full">
      {admin ? <DeleteButton removeFunc={removeButtonFunc} /> : null}
      <div
        id="card"
        onClick={() => router.push(`/posts/${id}`)}
        className="w-full z-30 h-auto cursor-pointer"
      >
        <div className="aspect-img overflow-hidden bg-gray-300">
          <div id="image" className="relative w-full h-full overflow-hidden ">
            <Image
              alt="Mountains"
              src={image ? image : "/article-img.webp"}
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
        <p className="font-light pt-1">{category ? category : "Category"}</p>
        <p className="text-lg font-bold">
          {title
            ? title
            : "Lorem ipsum dolor si amet, hola soy dora puela si amora"}
        </p>
        <style jsx>{`
          .aspect-img {
            aspect-ratio: 1/0.56;
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
