const About = () => {
  return (
    <div className="flex items-center w-full bg-slate-700">
      <div className="flex flex-col sm:flex-row max-w-screen-lg items-center mx-auto mt-10">
        <div className="sm:w-1/2 p-5 sm:p-10">
          <div className="image object-center text-center">
            <img
              src="/src/assets/images/about.png"
              className="w-full max-w-xs sm:max-w-sm mx-auto"
              alt="About Us"
            />
          </div>
        </div>
        <div className="sm:w-1/2 p-5 sm:p-10">
          <div className="text text-center sm:text-left">
            <span className="text-white border-b-2 border-indigo-600 uppercase block sm:inline-block mb-2 sm:mb-0">
              About Us
            </span>
            <h2 className="my-4 font-bold text-3xl sm:text-4xl">
              About <span className="text-indigo-600">Fly Trip</span>
            </h2>
            <p className="text-white">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid,
              commodi doloremque, fugiat illum magni minus nisi nulla numquam
              obcaecati placeat quia, repellat tempore voluptatum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
