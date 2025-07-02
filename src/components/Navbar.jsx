import { Link } from "react-router";

const navItems = ["Home", "Projects"];

const Navbar = () => {
  return (
    <div className="h-[100px] flex justify-between items-center px-[50px] w-full shadow-xl fixed mt-0 top-0 bg-white">
      <div className="flex justify-between items-center relative w-full">
        <div className="flex justify-center items-center">Logo</div>
        <div className="flex items-center">
          <ol className="flex justify-between items-center p-0 m-0 list-none">
            {navItems.map((item) => (
              <li className="mx-[5px] relative">
                <Link
                  key={item}
                  to={`/${item.toLowerCase()}`}
                  className="inline-block relative p-[10px]"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ol>
          <div className="block">
            <a
              className="bg-transparent border rounded-sm py-3 px-4 text-sm ml-[15px]"
              href=""
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
