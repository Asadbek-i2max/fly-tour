const FlyCard = () => {
    return (
      <section className="w-full flex items-center py-10">
        <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row items-center justify-between px-5 md:px-10">
          <div className="w-full md:w-5/12 relative mb-6 md:mb-0">
            <img
              src="/src/assets/images/intro.jpeg"
              className="mx-auto rounded-3xl shadow dark:shadow-gray-700 object-contain object-cover w-full h-80 md:h-[430px]"
              alt="Intro"
            />
            <div className="absolute flex items-center bottom-1 -left-5 p-4 rounded-lg shadow-md dark:shadow-gray-900 bg-white dark:bg-slate-900 w-56 m-3">
              <div className="flex items-center justify-center h-[65px] min-w-[65px] bg-red-500/5 text-red-500 text-center rounded-xl me-3">
                <i className="fa-solid fa-globe size-6" style={{ color: '#FFA500' }}></i>
              </div>
              <div className="flex-1">
                <span className="text-slate-400">Visitors</span>
                <p className="text-xl font-bold">
                  <span className="counter-value" data-target="4589">2100</span>
                </p>
              </div>
            </div>
            <div className="absolute flex items-center top-1 -right-7 p-4 rounded-lg shadow-md dark:shadow-gray-900 bg-white dark:bg-slate-900 w-60 m-3">
              <div className="flex items-center justify-center h-[65px] min-w-[65px] bg-red-500/5 text-red-500 text-center rounded-xl me-3">
                <i className="fa-solid fa-users size-6" style={{ color: '#FFA500' }}></i>
              </div>
              <div className="flex-1">
                <span className="text-slate-400">Travel Packages</span>
                <p className="text-xl font-bold">
                  <span className="counter-value" data-target="50">50</span>+
                </p>
              </div>
            </div>
          </div>
  
          <div className="w-full md:w-6/12">
            <h2 className="text-3xl font-bold">Fly with us</h2>
            <div className="mt-6 text-slate-400 max-w-xl mb-6">
              Get instant helpful resources about anything on the go, easily implement secure money transfer solutions, boost your daily efficiency, connect to other app users and create your own Fly Trip network, and much more with just a few taps.
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default FlyCard;
  