const AboutUs = () => {
  return (
    <section
      className="hero py-[clamp(3rem,1.1707rem+7.8049vw,8rem)] bg-white text-black"
      id="aboutUs"
    >
      <div className="hero-content flex justify-between flex-col items-center md:flex-row">
        <div>
          <h2 className="text-5xl font-bold mb-6">AppliFix</h2>
          <span className="mb-8 block text-3xl">Who we are</span>
          <p className="mb-4 text-xl max-w-3xl">
            At <span className="font-medium">AppliFix</span> we specialize in
            fast and affordable repair of major household appliances. From
            washers and dryers to ovens and refrigerators — our certified
            technicians are ready to help.
          </p>
          <p className="text-xl max-w-3xl mb-4">
            We are <span className="font-medium">based in America</span> and
            serve surrounding communities. Our mission is simple: reliable
            service, honest pricing, and 100% satisfaction.
          </p>
        </div>
        <img
          src="https://www.shutterstock.com/image-vector/plumbing-specialist-toolbox-fixing-repairing-600nw-1038750760.jpg"
          className="max-w-80 object-cover rounded-lg"
        />
      </div>
    </section>
  );
};

export default AboutUs;
