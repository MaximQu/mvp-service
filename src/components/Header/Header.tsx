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
      <div className="container px-4 mx-auto flex items-center justify-between gap-8">
        <a className="w-32" href="#">
          <img
            src="https://rogaicopita.trafft.com/api/v1/public/media/a9a46b78-0230-4cac-bd56-5727044d0a69?size=medium-small"
            alt="AppliFix"
          />
        </a>
        <nav className=" hidden lg:block">
          <ul className="flex gap-8">
            {navData.map(({ title, scrollTo }) => (
              <li key={title} className="capitalize text-xl">
                <a href={`#${scrollTo}`}> {title}</a>
              </li>
            ))}
          </ul>
        </nav>
        <a href='#bookService' className="rounded-full text-center bg-blue-950 w-full max-w-30 p-2 text-md ">
          Call us
        </a>
      </div>
    </header>
  );
};

export default Header;
