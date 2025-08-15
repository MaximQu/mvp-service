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
    title: "Book Service",
    scrollTo: "bookService",
  },
];

const Header = () => {
  return (
    <header className="sticky w-full top-0 z-10 bg-base-100 shadow-sm">
      <div className="container navbar">
        <nav className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            {
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                {navData.map(({ title, scrollTo }) => (
                  <li key={title} className="capitalize text-xl">
                    <a href={`#${scrollTo}`}> {title}</a>
                  </li>
                ))}
              </ul>
            }
          </div>
          <a href="/" className="btn-ghost font-medium text-xl">
            AppliFix
          </a>
        </nav>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navData.map(({ title, scrollTo }) => (
              <li key={title} className="capitalize text-xl">
                <a href={`#${scrollTo}`}> {title}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="navbar-end">
          <a href="#bookService" className="btn btn-lg btn-primary rounded-full">Book service</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
