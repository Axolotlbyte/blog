import Image from "next/image";

const TitleEditor = ({
  setTitle,
  setSubtitle,
  setImage,
  image,
  readOnly,
  title,
  subtitle,
}) => {
  if (readOnly) {
    return (
      <div className="flex flex-col gap-5 pb-5">
        <h1
          // onChange={(e) => setTitle(e.target.value)}
          // type="text"
          // placeholder="Enter Title here..."
          className="w-full text-5xl font-bold h-fit outline-none"
        >{title}</h1>
        <h2
          // type="text"
          // onChange={(e) => setSubtitle(e.target.value)}
          // placeholder="Enter subtitle here..."
          className="w-full text-xl font-bold text-gray-600 outline-none"
        >{subtitle}</h2>

        <div className="w-full relative aspect-video overflow-hidden flex items-center rounded-3xl ">
          <Image
            src={image}
            width="0"
            height="0"
            sizes="100vw"
            className="w-full mx-auto h-auto z-40"
          />
        </div>
      </div>
    );
  }
  return (
    <div className="flex flex-col gap-5 pb-5">
      <textarea
        onChange={(e) => setTitle(e.target.value)}
        type="text"
        placeholder="Enter Title here..."
        className="w-full text-5xl font-bold h-fit outline-none"
      />
      <textarea
        type="text"
        onChange={(e) => setSubtitle(e.target.value)}
        placeholder="Enter subtitle here..."
        className="w-full text-xl font-bold text-gray-600 outline-none"
      />
      {image == null ? (
        <input
          onChange={(e) => setImage(e.target.value)}
          type="text"
          placeholder="Enter Title image url here..."
          className="w-full outline-none"
        />
      ) : (
        <div className="w-full relative aspect-video overflow-hidden flex items-center rounded-3xl ">
          <button
            onClick={() => setImage(null)}
            className="absolute right-5 bg-white top-5 z-50"
          >
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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <Image
            src={image}
            width="0"
            height="0"
            sizes="100vw"
            className="w-full mx-auto h-auto z-40"
          />
        </div>
      )}
    </div>
  );
};

export default TitleEditor;
