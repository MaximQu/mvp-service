const Hero = () => {
  return (
    <section className="py-32" id="home">
      <div className="container mx-auto">
        <div className="">
          <h1 className=" w-full text-7xl mb-12">
            Fast Reliable Appliance Repair in Denver and Beyond
          </h1>
          <p className="text-2xl mb-20">
            <span className="block">Washer, Dryer, Oven, Fridge?</span>
            We’ll Fix It —All , Flat Rate, No Hassle!
          </p>
          <div className="flex gap-4 uppercase">
            <button className="btn btn-circle w-full max-w-3xs p-4 text-2xl">
              Book service
            </button>
            <button className="btn btn-circle w-full max-w-3xs p-4 text-2xl">
              Quick call
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
