const AboutUs = () => {
  return (
    <section className="py-[clamp(3rem,1.1707rem+7.8049vw,8rem)] bg-white text-black" id="aboutUs">
      <div className="container px-4 mx-auto flex justify-between flex-col items-center md:flex-row gap-8">
        <div className="">
          <h2 className="text-5xl font-medium mb-6">AppliFix</h2>
          <span className="mb-12 block text-3xl">Who we are</span>
          <p className="mb-4 text-xl max-w-3xl">
            At <span className="font-medium">AppliFix</span> we specialize in
            fast and affordable repair of major household appliances. From
            washers and dryers to ovens and refrigerators — our certified
            technicians are ready to help.
          </p>
          <p className="text-xl max-w-3xl">
            We are <span className="font-medium">based in America</span> and
            serve surrounding communities. Our mission is simple: reliable
            service, honest pricing, and 100% satisfaction.
          </p>
        </div>
        <img
          className="max-w-80 object-cover"
          src="https://www.shutterstock.com/image-vector/plumbing-specialist-toolbox-fixing-repairing-600nw-1038750760.jpg"
          alt=""
        />
      </div>
    </section>
  );
};

export default AboutUs;
