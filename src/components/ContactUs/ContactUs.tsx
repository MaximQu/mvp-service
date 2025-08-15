const ContactUs = () => {
  return (
    <section
      className="py-[clamp(3rem,1.1707rem+7.8049vw,5rem)] px-4"
      id="bookService"
    >
      <h2 className="text-5xl font-medium mb-8 text-center">Contact Us</h2>
      <div
        className="embedded-booking"
        data-url="https://rogaicopita.trafft.com"
        data-query="&t=s&uuid=4cce5e71-8194-4b3d-8f01-37f1eecebbf3"
        data-lang="en"
        data-autoresize="0"
        data-showsidebar="1"
        style={{ minWidth: "320px", minHeight: "700px" }}
      />
      <script
        type="text/javascript"
        src="https://rogaicopita.trafft.com/embed.js"
        async
      />
    </section>
  );
};

export default ContactUs;
