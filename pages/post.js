import Layout from "../components/Layout";

const post = () => {
  return (
    <Layout>
      <div className="pt-24">
        <div className=" h-auto w-11/12 lg:w-3/5 md:ml-16 lg:ml-24 mx-auto md:mx-0 sm:w-10/12 md:w-3/4">
          <div className="w-full aspect-img bg-gray-300"></div>
          <div className="">
            <h1 className="text-4xl pb-4">What is Lorem Ipsum?</h1>
            <div className="flex items-center pb-4">
              <div className="w-10 h-10 ring-blue-500 bg-gradient-to-br from-red-400 via-orange-600 to bg-yellow-700 rounded-full ring-2"></div>
              <p className="font-medium pl-2 text-lg">Jack daniels</p>
            </div>
            <p className="text-lg">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum. Why do we use it? It is a long established fact that
              a reader will be distracted by the readable content of a page when
              looking at its layout. The point of using Lorem Ipsum is that it
              has a more-or-less normal distribution of letters, as opposed to
              using &apos;Content here, content here&apos;, making it look like readable
              English. Many desktop publishing packages and web page editors now
              use Lorem Ipsum as their default model text, and a search for
              &apos;lorem ipsum&apos; will uncover many web sites still in their infancy.
              Various versions have evolved over the years, sometimes by
              accident, sometimes on purpose (injected humour and the like).
              Where does it come from? Contrary to popular belief, Lorem Ipsum
              is not simply random text. It has roots in a piece of classical
              Latin literature from 45 BC, making it over 2000 years old.
              Richard McClintock, a Latin professor at Hampden-Sydney College in
              Virginia, looked up one of the more obscure Latin words,
              consectetur, from a Lorem Ipsum passage, and going through the
              cites of the word in classical literature, discovered the
              undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
              1.10.33 of &quot;de Finibus Bonorum et Malorum&quot; (The Extremes of Good
              and Evil) by Cicero, written in 45 BC. This book is a treatise on
              the theory of ethics, very popular during the Renaissance. The
              first line of Lorem Ipsum, &quot;Lorem ipsum dolor sit amet..&quot;, comes
              from a line in section 1.10.32.
            </p>
          </div>
        </div>
      </div>
      <div id="comments" className="w-11/12 pt-4 mx-auto h-auto">
        <div className="h-12 w-12 rounded-xl ring-2 ring-gray-300">

        </div>
      </div>
      <style jsx>{`
        .aspect-img {
          aspect-ratio: 1/0.56;
        }
      `}</style>
    </Layout>
  );
};

export default post;
