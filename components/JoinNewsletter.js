"Your Inbox Deserves Quality Content: Join Us.";
const JoinNewsletter = ({post}) => {
  return (
    <section
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1491485326079-8713ae1e00a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
      }}
      className="w-full bg-white py-8 md:py-20 bg-cover bg-no-repeat"
    >
      {/* <div></div> */}
      <div className={"mx-auto rounded-2xl p-10 bg-slate-500 border-2 border-white bg-opacity-70 backdrop-blur-sm " + (post ? " md:w-10/12 w-11/12" : " w-11/12")}>
        <div className="flex items-center justify-center pt-5 md:pt-20">
          <h1 className="text-2xl md:text-4xl font-extrabold text-white">Subscribe to Our Newsletter</h1>
        </div>
        <form className="flex flex-col md:flex-row w-full md:w-2/3 mx-auto gap-5 items-center justify-center py-8 md:pb-20 md:pt-10">
          <input
            type="text"
            className="w-full p-3 md:p-5 border text-lg md:text-xl rounded-r-full rounded-l-full bg-transparent placeholder:text-white focus:ring-2 hover:ring-2 ring-white"
            placeholder="Your Name"
          />
          <input
            type="email"
            className="w-full p-3 md:p-5 border text-lg md:text-xl rounded-r-full rounded-l-full bg-transparent placeholder:text-white focus:ring-2 hover:ring-2 ring-white"
            placeholder="Your Email"
          />
          <button
            type="submit"
            className="w-full p-3 md:p-5 border text-lg md:text-xl rounded-r-full rounded-l-full bg-black text-white font-semibold focus:ring-2 hover:ring-2 ring-white"
          >
            Submit
          </button>
        </form>
        <hr />
        <div className="pt-5 text-white text-xs md:text-base flex flex-col md:flex-row gap-5  md:justify-between">
          <p>Your Inbox Deserves Quality Content: Join Us.</p>
          <p>email: <span className="font-semibold">arjaankhan@gmail.com</span></p>
        </div>
      </div>
    </section>
  );
};

export default JoinNewsletter;
