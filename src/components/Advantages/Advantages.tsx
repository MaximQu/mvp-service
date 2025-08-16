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
    <section className="py-[clamp(3rem,1.1707rem+7.8049vw,8rem)]" id="whyUs">
      <div className="container px-4 mx-auto">
        <h2 className="text-center text-5xl font-medium mb-12">Why us?</h2>
        <ul className="flex flex-wrap justify-center gap-4 mb-8">
          {advantagesData.map(({ title, description }) => (
            <li
              key={title}
              className="flex gap-4 bg-white text-black max-w-md w-full p-4 rounded-lg"
            >
              <div className="">
                <h3 className="mb-4 text-2xl font-medium">{title}</h3>
                <p className="">{description}</p>
              </div>
            </li>
          ))}
        </ul>
        <a href="#bookService" className="btn btn-xl btn-primary mx-auto block pt-2.5 text-xl sm:max-w-3xs w-full rounded-full">
          Book service
        </a>
      </div>
    </section>
  );
};

export default Advantages;
