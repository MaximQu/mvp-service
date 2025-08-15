const navData = [
  {
    title: "Home",
    scrollTo: "home",
  },
  {
    title: "Services",
    scrollTo: "services",
  },
  {
    title: "About us",
    scrollTo: "aboutUs",
  },
  {
    title: "Why us",
    scrollTo: "whyUs",
  },
  {
    title: "Service Areas",
    scrollTo: "serviceAreas",
  },
  {
    title: "Book Service",
    scrollTo: "bookService",
  },
];

const Header = () => {
  return (
    <header className="py-2 bg-blue-900 sticky top-0">
      <div className="container mx-auto flex items-center justify-center gap-8 ">
        <a className="w-32" href="#">
          <img src="./public/logo.jpg" alt="AppliFix" />
        </a>
        <nav className="">
          <ul className="flex gap-8">
            {navData.map(({ title, scrollTo }) => (
              <li key={title} className="capitalize text-xl">
                <a href={`#${scrollTo}`}> {title}</a>
              </li>
            ))}
          </ul>
        </nav>
        <button className="btn rounded-full">Call us</button>
      </div>
    </header>
  );
};

export default Header;
