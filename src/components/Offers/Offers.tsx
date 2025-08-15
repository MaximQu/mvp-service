const offersData = [
  {
    icon: "",
    title: "Washers / Dryers",
  },
  {
    icon: "",
    title: "Refrigerators",
  },
  {
    icon: "",
    title: "Stove / Cooktop",
  },
  {
    icon: "",
    title: "Oven / Range",
  },
  {
    icon: "",
    title: "Dishwashers",
  },
];

const Offers = () => {
  return (
    <section className="py-32 bg-white text-black" id="services">
      <div className="container mx-auto">
        <h2 className="text-center capitalize mb-4 text-5xl font-medium">
          What We Offer
        </h2>
        <p className="text-center mb-8">
          We provide expert repair services for:
        </p>
        <ul className="flex gap-4 justify-between">
          {offersData.map(({ icon, title }) => (
            <li key={title} className="flex flex-col gap-8 items-center">
              {icon}
              <img src="https://placehold.co/140" alt="" />
              <span className="">{title}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Offers;
