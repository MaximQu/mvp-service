const advantagesData = [
  {
    title: "Same-Day Service",
    description: "Most calls handled the same day",
  },
  {
    title: "No Service Fee",
    description: "If we do the repair, the estimate is free",
  },
  {
    title: "Flat Rate Pricing",
    description: "No hourly charges, no hidden fees",
  },
  {
    title: "Saturday Services",
    description: "We are available on Saturday at no additional cost",
  },
];

const Advantages = () => {
  return (
    <section className="py-32" id="whyUs">
      <div className="container mx-auto">
        <h2 className="text-center text-5xl font-medium mb-12">Why us?</h2>
        <ul className="flex flex-wrap justify-center gap-4 mb-8">
          {advantagesData.map(({ title, description }) => (
            <li
              key={title}
              className="flex gap-4 bg-white text-black max-w-md w-full p-4 rounded-2xl"
            >
              <div className="">
                <h3 className="mb-4 text-2xl font-medium">{title}</h3>
                <p className="">{description}</p>
              </div>
            </li>
          ))}
        </ul>
        <div className="flex justify-center gap-4 uppercase">
          <button className="btn btn-circle w-full max-w-3xs p-4 text-2xl">
            Book service
          </button>
          <button className="btn btn-circle w-full max-w-3xs p-4 text-2xl">
            Quick call
          </button>
        </div>
      </div>
    </section>
  );
};

export default Advantages;
