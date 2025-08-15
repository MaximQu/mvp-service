const areaData = [
  "Denver",
  "Aurora",
  "Thornton",
  "Boulder",
  "Arvada",
  "Lakewood",
  "Centennial",
  "Littleton",
  "Highlands Ranch",
  "Golden",
  "Longmont",
  "Frederick",
  "Brighton",
  "Lafayette",
  "Louisville",
  "Broomfield",
  "Westminster",
  "Superior",
  "Wheat Ridge",
  "Commerce City",
  "Erie",
  "Parker",
];

const ServiceArea = () => {
  return (
    <section className="py-32 text-black bg-white" id="serviceAreas">
      <div className="container mx-auto flex gap-16 justify-between">
        <div className="">
          <h2 className="text-5xl font-medium mb-8">Areas We Serve</h2>
          <ul className="flex flex-wrap gap-1">
            {areaData.map((area) => (
              <li className="text-xl">{area} •</li>
            ))}
          </ul>
        </div>
        <img className="" src="https://placehold.co/364x248" alt="" />
      </div>
    </section>
  );
};

export default ServiceArea;
