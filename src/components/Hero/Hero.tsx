const Hero = () => {
  return (
    <section
      className="py-[clamp(3rem,1.1707rem+7.8049vw,8rem)] bg-[url('https://www.ikea.com/de/en/images/products/vaermd-microwave-oven-ikea-300-black__1337355_pe947839_s5.jpg?f=undefined')]  bg-cover bg-center bg-fixed bg-black/80 bg-blend-multiply bg-attou"
      id="home"
    >
      <div className="container px-4 mx-auto">
        <div className="">
          <h1 className="w-full max-w-5xl text-[clamp(2rem,1.0854rem+3.9024vw,4.5rem)] mb-12">
            Fast Reliable Appliance Repair in Denver and Beyond
          </h1>
          <p className="text-2xl mb-20">
            <span className="block">Washer, Dryer, Oven, Fridge?</span>
            We’ll Fix It —All , Flat Rate, No Hassle!
          </p>
          <div className="flex flex-wrap gap-4 uppercase md:justify-start justify-center">
            <button className="rounded-full bg-blue-950 w-full sm:max-w-3xs p-4 text-2xl max-w-full">
              Book service
            </button>
            <button className="rounded-full bg-blue-950 w-full sm:max-w-3xs p-4 text-2xl max-w-full">
              Quick call
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
