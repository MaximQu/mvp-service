const offersData = [
  {
    title: "Washers / Dryers",
    url: "https://dniproappliance.com/wp-content/uploads/2025/07/washing-machine_5064735_-450x450.png",
  },
  {
    title: "Refrigerators",
    url: "https://dniproappliance.com/wp-content/uploads/2025/07/refrigerator_5064698_-450x450.png",
  },
  {
    title: "Stove / Cooktop",
    url: "https://dniproappliance.com/wp-content/uploads/2025/07/stove_7_-450x450.png",
  },
  {
    title: "Oven / Range",
    url: "https://dniproappliance.com/wp-content/uploads/2025/07/oven_5064684_-450x450.png",
  },
  {
    title: "Dishwashers",
    url: "https://dniproappliance.com/wp-content/uploads/2025/07/dishwasher_5064595_-1-450x450.png",
  },
];

const Offers = () => {
  return (
    <section
      className="py-[clamp(3rem,1.1707rem+7.8049vw,8rem)] bg-white text-black"
      id="services"
    >
      <div className="container px-4 mx-auto">
        <h2 className="text-center capitalize mb-2 text-5xl font-bold">
          What We Offer
        </h2>
        <p className="text-center text-lg mb-8">
          We provide expert repair services for:
        </p>
        <ul className="flex gap-4 flex-wrap lg:justify-between justify-evenly ">
          {offersData.map(({ title, url }) => (
            <li
              key={title}
              className="flex max-w-32 lg:max-w-40 flex-col gap-6 items-center"
            >
              <img src={url} alt={title} />
              <span className="font-bold whitespace-nowrap">{title}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Offers;
