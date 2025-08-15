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
    <section className="py-32 bg-white text-black" id="services">
      <div className="container mx-auto">
        <h2 className="text-center capitalize mb-4 text-5xl font-medium">
          What We Offer
        </h2>
        <p className="text-center mb-8">
          We provide expert repair services for:
        </p>
        <ul className="flex gap-4 justify-between">
          {offersData.map(({ title, url }) => (
            <li key={title} className="flex flex-col gap-8 items-center">
              <img src={url} alt={title} />
              <span className="">{title}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Offers;
