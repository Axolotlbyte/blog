const Card = () => {
  return (
    <div className="w-full h-auto">
      <div className="relative aspect-img bg-gray-300"></div>
      <p className="font-light pt-1">Category</p>
      <p className="text-lg font-bold">
        Lorem ipsum dolor si amet, hola soy dora puela si amora
      </p>
      <style jsx>{`
        .aspect-img {
          aspect-ratio: 1/0.56;
        }
      `}</style>
    </div>
  );
};

export default Card;
