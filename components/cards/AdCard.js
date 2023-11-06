const AdCard = ({square}) => {
  return (
    <div className={" w-full md:w-2/5 lg:w-full cursor-pointer relative bg-slate-600 rounded-2xl" + (square ? " aspect-square" : " aspect-video")}>
      <div className="absolute p-1 font-semibold text-white w-10 h-10 flex items-center justify-center top-3 left-3 border-2 rounded-t-full rounded-b-full ">
        Ad
      </div>
      <p className=" pt-16 text-white w-full text-md lg:text-lg p-5">
        Cultivate Your Digital Footprint for a Borderless Impact. <br /> Get
        yourself a Website.{" "}
      </p>
      <h2 className="text-white text-xl lg:text-3xl font-bold p-5">
        Online Presence, Global Influence
      </h2>
      <button className="absolute text-xs lg:text-base hover:font-extrabold bottom-5 right-5 underline text-white font-semibold">
        Learn More
      </button>
    </div>
  );
};

export default AdCard;
