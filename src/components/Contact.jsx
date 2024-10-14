

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Form submitted!');
  };

  return (
    <section className="relative lg:py-24 py-16">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-6">
          <div className="lg:col-span-7 md:col-span-6">
            <img
              src="/src/assets/images/travel-station.svg"
              className="w-full max-w-[500px] mx-auto"
              alt="Travel Train Station"
            />
          </div>

          <div className="lg:col-span-5 md:col-span-6">
            <div className="lg:ms-5">
              <div className="bg-white dark:bg-slate-900 rounded-md shadow dark:shadow-gray-800 p-6">
                <h3 className="mb-6 text-2xl leading-normal font-semibold">Get in touch!</h3>

                <form method="post" id="myForm" onSubmit={handleSubmit}>
                  <p className="mb-0" id="error-msg"></p>
                  <div id="simple-msg"></div>
                  <div className="grid lg:grid-cols-12 grid-cols-1 gap-3">
                    <div className="lg:col-span-6">
                      <label htmlFor="name" className="font-semibold">Your Name:</label>
                      <input
                        name="name"
                        id="name"
                        type="text"
                        className="mt-2 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0"
                        placeholder="Name:"
                      />
                    </div>

                    <div className="lg:col-span-6">
                      <label htmlFor="email" className="font-semibold">Your Email:</label>
                      <input
                        name="email"
                        id="email"
                        type="email"
                        className="mt-2 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0"
                        placeholder="Email:"
                      />
                    </div>

                    <div className="lg:col-span-12">
                      <label htmlFor="subject" className="font-semibold">Your Question:</label>
                      <input
                        name="subject"
                        id="subject"
                        className="mt-2 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0"
                        placeholder="Subject:"
                      />
                    </div>

                    <div className="lg:col-span-12">
                      <label htmlFor="comments" className="font-semibold">Your Comment:</label>
                      <textarea
                        name="comments"
                        id="comments"
                        className="mt-2 w-full py-2 px-3 h-28 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0"
                        placeholder="Message:"
                      ></textarea>
                    </div>
                  </div>
                  <button
                    type="submit"
                    id="submit"
                    name="send"
                    className="py-2 px-5 inline-block tracking-wide align-middle duration-500 text-base text-center bg-orange-500 text-white rounded-md mt-2"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="container lg:mt-24 mt-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6">
            <ContactCard
              icon="phone"
              title="Phone"
              description="The phrasal sequence of the is now so that many campaign and benefit"
              linkText="+998 90 023 57 57"
              linkHref=""
            />
            <ContactCard
              icon="mail"
              title="Email"
              description="The phrasal sequence of the is now so that many campaign and benefit"
              linkText="flytripinfo@gmail.com"
              linkHref=""
            />
            <ContactCard
              icon="map-pin"
              title="Location"
              description="C/54 Northwest Freeway, Suite 558, Houston, USA 485"
              linkText="View on Google map"
              linkHref="https://maps.app.goo.gl/mdnS3j6bD6e4ZVA98"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

// eslint-disable-next-line react/prop-types
const ContactCard = ({ icon, title, description, linkText, linkHref }) => (
  <div className="text-center px-6">
    <div className="relative text-transparent">
      <div className="size-20 bg-orange-500/5 text-orange-400 rounded-xl text-2xl flex align-middle justify-center items-center mx-auto shadow-sm dark:shadow-gray-800">
        <i data-feather={icon}></i>
      </div>
    </div>

    <div className="content mt-7">
      <h5 className="h5 text-lg font-semibold">{title}</h5>
      <p className="text-slate-400 mt-3">{description}</p>
      <div className="mt-5">
        <a href={linkHref} className="text-orange-500 font-medium">
          {linkText}
        </a>
      </div>
    </div>
  </div>
);

export default Contact;
