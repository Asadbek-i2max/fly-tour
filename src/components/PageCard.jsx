

const PageCard = () => {
  return (
    <section className="relative table w-full items-center py-36 bg-[url('/src/assets/images/card.jpg')] bg-top bg-no-repeat bg-cover">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/80 to-slate-900"></div>
      <div className="relative">
        <div className="grid grid-cols-1 pb-8 text-center mt-10">
          <h3 className="text-4xl leading-normal tracking-wider font-semibold text-white">
            Fly Trip
          </h3>
        </div>
      </div>
      <div className="absolute text-center z-10 bottom-5 left-0 right-0 mx-3">
        <ul className="tracking-[0.5px] mb-0 inline-block">
          <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white/50 hover:text-white">
            <a href="/">Fly Trip</a>
          </li>
          <li className="inline-block text-base text-white/50 mx-0.5 rotate-0">
            <i className="mdi mdi-chevron-right"></i>
          </li>
          <li
            className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white"
          >
            Tours
          </li>
        </ul>
      </div>
    </section>
  );
};

export default PageCard;
