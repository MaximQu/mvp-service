const Hero = () => {
  return (
    <section
      className="hero bg-base-200 min-h-screen  bg-[url('https://www.ikea.com/de/en/images/products/vaermd-microwave-oven-ikea-300-black__1337355_pe947839_s5.jpg')]  bg-cover bg-center bg-fixed bg-black/80 bg-blend-multiply"
      id="home"
    >
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div>
          <h1 className="w-full max-w-5xl text-[clamp(2rem,1.0854rem+3.9024vw,4.5rem)] font-bold ">
            Fast Reliable Appliance Repair in Denver and Beyond
          </h1>
          <p className="py-6 text-2xl">
            <span className="block">Washer, Dryer, Oven, Fridge?</span>
            We’ll Fix It —All , Flat Rate, No Hassle!
          </p>
          <a href="#bookService" className="btn btn-xl btn-primary text-xl sm:max-w-3xs w-full rounded-full">
            Book service
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
