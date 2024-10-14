

// eslint-disable-next-line react/prop-types
const PageCard = ({ cardTitle }) => {
  return (
    <section className="relative table w-full items-center py-36 bg-[url('../assets/images/card.jpg')] bg-top bg-no-repeat bg-cover">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/80 to-slate-900"></div>
      <div className="relative">
        <div className="grid grid-cols-1 pb-8 text-center mt-10">
          <h3 className="text-4xl leading-normal tracking-wider font-semibold text-white">
            {cardTitle}
          </h3>
        </div>
      </div>
    </section>
  );
};

export default PageCard;
