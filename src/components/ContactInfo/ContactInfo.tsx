const ContactInfo = () => {
  return (
    <div className="container px-4 mx-auto py-[clamp(3rem,1.1707rem+7.8049vw,5rem)]">
      <p className="text-[clamp(2rem,1.0854rem+3.9024vw,3.5rem)] flex flex-col items-center md:flex-row md:justify-center text-white text-center font-medium">
        Call & Text:&nbsp;
        <a className="hover:underline" href="tel:+1234567890">
          123-456-7890
        </a>
      </p>
    </div>
  );
};

export default ContactInfo;
