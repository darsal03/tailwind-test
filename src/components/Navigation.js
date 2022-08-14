import {
  BellIcon,
  UserIcon,
  MenuIcon,
  SearchIcon,
} from "@heroicons/react/outline";
import { useState } from "react";

export function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleOpenMenu = () => setMenuOpen(!menuOpen);
  return (
    <ul className="flex py-4 font-bold text-lg mt-1 fullHD:py-5">
      <li className="flex ml-3 mt-3 md:ml-9 lg:ml-14 laptopL:ml-24 fullHD:mt-5 fullHD:ml-32">
        <div className="w-6 h-6 mt-0.5 bg-custom-blue rounded-full fullHD:w-7 fullHD:h-7"></div>
        <p className="ml-1 mt-0.5 laptopL:text-xl fullHD:text-3xl">Compute</p>
      </li>
      <li
        className="group mt-2.5 ml-auto mr-3.5 lg:hidden"
        onClick={handleOpenMenu}
      >
        <MenuIcon className="w-8 h-8 transition duration-200 ease-out group-hover:stroke-blue-500" />
      </li>
      <li className="hidden lg:inline-block ml-32 mt-1.5 lg:ml-32 laptopL:ml-52 fullHD:ml-44">
        <div className="mt-2 ml-2 absolute lg:mt-1.5 laptopL:mt-3 ">
          <SearchIcon className="h-7 w-7  stroke-custom-gray fullHD:h-9 fullHD:w-9" />
        </div>
        <input className="h-10 rounded-lg border pt-1 px-12 lg:w-60 lg:pt-0 lg:px-10 lg:font-light lg:text-base laptopL:h-12 laptopL:w-80 fullHD:h-14 fullHD:w-96 fullHD:text-2xl fullHD:px-12 fullHD:pt-1.5" />
      </li>
      <li className="hidden lg:inline-block ml-auto mt-3.5">
        <div className="w-2 h-2 rounded-full bg-red-500 absolute"></div>
        <BellIcon className="w-7 h-7 fullHD:w-10 fullHD:h-10" />
      </li>
      <li className=" hidden lg:flex ml-16 mr-12 lg:ml-11 fullHD:ml-28">
        <div className="w-10 h-10 mt-2 rounded-full bg-custom-gray lg:mt-1 lg:w-11 lg:h-11 fullHD:w-16 fullHD:h-16">
          <UserIcon className="w-8 h-8  mt-1 ml-1 mr-2 stroke-slate-200  lg:ml-1.5 fullHD:w-12 fullHD:h-12 fullHD:ml-2" />
        </div>
        <div className="mt-1.5 ml-1.5 lg:mt-1 fullHD:mt-2 fullHD:ml-2.5">
          <p className="text-lg fullHD:text-2xl ">Joe Doe</p>
          <p className="lg:text-xs fullHD:text-base text-custom-gray ">
            Manager
          </p>
        </div>
      </li>
    </ul>
  );
}
