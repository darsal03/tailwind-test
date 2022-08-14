import {
  ClipboardCheckIcon,
  ChatIcon,
  DocumentReportIcon,
  LogoutIcon,
  ClipboardIcon,
  UserGroupIcon,
  GlobeIcon,
  MapIcon,
  CogIcon,
} from "@heroicons/react/outline";
export function SideBar() {
  return (
    <ul className="flex flex-col items-center text-custom-gray">
      <li className="group mt-8 px-4 py-4 fullHD:mt-10  laptopL:lg:ml-5 rounded-2xl transition duration-200 ease-in-out hover:bg-custom-blue cursor-pointer md:w-10/12 md:flex fullHD:w-9/12">
        <ClipboardCheckIcon className="w-7 h-7 stroke-1 laptopL:lg:ml-4 transition duration-200 ease-in-out group-hover:stroke-slate-200 laptopL:w-10 laptopL:h-10 fullHD:w-14 fullHD:h-14" />
        <p className="hidden  mt-1 md:inline-block md:ml-3.5 group-hover:text-slate-200 laptopL:text-xl laptopL:ml-5 laptopL:mt-2 fullHD:text-2xl fullHD:mt-4 fullHD:ml-6">
          Board
        </p>
      </li>
      <li className="group mt-3 px-4 py-4 fullHD:mt-5  laptopL:lg:mt-7 laptopL:lg:ml-5 rounded-2xl transition duration-200 ease-in-out  hover:bg-custom-blue cursor-pointer md:w-10/12 md:flex fullHD:w-9/12">
        <ClipboardIcon className="w-7 h-7 stroke-1 laptopL:lg:ml-4 transition duration-200 ease-in-out group-hover:stroke-slate-200 laptopL:w-10 laptopL:h-10 fullHD:w-14 fullHD:h-14" />
        <p className="hidden mt-1 md:inline-block md:ml-3.5 group-hover:text-slate-200 md:text-md lg:hidden ">
          Schedule
        </p>
        <p className="hidden mt-1 lg:inline-block md:ml-3.5 group-hover:text-slate-200 md:text-md laptopL:text-xl laptopL:ml-5 laptopL:mt-2 fullHD:text-2xl fullHD:mt-4 fullHD:ml-6">
          Plan Schedule
        </p>
      </li>
      <li className="group mt-3 px-4 py-4 fullHD:mt-5  laptopL:lg:mt-7  laptopL:lg:ml-5 rounded-2xl transition duration-200 ease-in-out  hover:bg-custom-blue cursor-pointer md:w-10/12 md:flex fullHD:w-9/12">
        <DocumentReportIcon className="w-7 h-7 stroke-1 laptopL:lg:ml-4 transition duration-200 ease-in-out group-hover:stroke-slate-200 laptopL:w-10 laptopL:h-10 fullHD:w-14 fullHD:h-14" />
        <p className="hidden mt-1 md:inline-block md:ml-3.5 group-hover:text-slate-200 md:text-md laptopL:text-xl laptopL:ml-5 laptopL:mt-2 fullHD:text-2xl fullHD:mt-4 fullHD:ml-6">
          Reporting
        </p>
      </li>
      <li className="group mt-5 px-4 py-4 fullHD:mt-5  laptopL:lg:mt-7 laptopL:lg:ml-5 rounded-2xl transition duration-200 ease-in-out  hover:bg-custom-blue cursor-pointer md:w-10/12 md:flex fullHD:w-9/12">
        <UserGroupIcon className="w-7 h-7 stroke-1 laptopL:lg:ml-4 transition duration-200 ease-in-out group-hover:stroke-slate-200 laptopL:w-10 laptopL:h-10 fullHD:w-14 fullHD:h-14" />
        <p className="hidden mt-1 md:inline-block md:ml-3.5 group-hover:text-slate-200 md:text-md laptopL:text-xl laptopL:ml-5 laptopL:mt-2 fullHD:text-2xl fullHD:mt-4 fullHD:ml-6">
          Team
        </p>
      </li>
      <li className="group mt-3 px-4 py-4 fullHD:mt-5  laptopL:lg:mt-7 laptopL:lg:ml-5 rounded-2xl transition duration-200 ease-in-out  hover:bg-custom-blue cursor-pointer md:w-10/12 md:flex fullHD:w-9/12">
        <ChatIcon className="w-7 h-7 stroke-1 laptopL:lg:ml-4 transition duration-200 ease-in-out group-hover:stroke-slate-200 laptopL:w-10 laptopL:h-10 fullHD:w-14 fullHD:h-14" />
        <p className="hidden mt-1 md:inline-block md:ml-3.5 group-hover:text-slate-200 md:text-md laptopL:text-xl laptopL:ml-5 laptopL:mt-2 fullHD:text-2xl fullHD:mt-4 fullHD:ml-6">
          Messages
        </p>
      </li>
      <li className="group mt-3 px-4 py-4 fullHD:mt-5  laptopL:lg:mt-7 laptopL:lg:ml-5 rounded-2xl transition duration-200 ease-in-out  hover:bg-custom-blue cursor-pointer md:w-10/12 md:flex fullHD:w-9/12">
        <GlobeIcon className="w-7 h-7 stroke-1 laptopL:lg:ml-4 transition duration-200 ease-in-out group-hover:stroke-slate-200 laptopL:w-10 laptopL:h-10 fullHD:w-14 fullHD:h-14" />
        <p className="hidden mt-1 md:inline-block md:ml-3.5 group-hover:text-slate-200 md:text-md laptopL:text-xl laptopL:ml-5 laptopL:mt-2 fullHD:text-2xl fullHD:mt-4 fullHD:ml-6">
          Tools
        </p>
      </li>
      <li className="group mt-3 px-4 py-4 fullHD:mt-5  laptopL:lg:mt-7 laptopL:lg:ml-5  rounded-2xl transition duration-200 ease-in-out  hover:bg-custom-blue cursor-pointer md:w-10/12 md:flex fullHD:w-9/12">
        <MapIcon className="w-7 h-7 stroke-1 laptopL:lg:ml-4 transition duration-200 ease-in-out group-hover:stroke-slate-200 laptopL:w-10 laptopL:h-10 fullHD:w-14 fullHD:h-14" />
        <p className="hidden mt-1 md:inline-block md:ml-3.5 group-hover:text-slate-200 md:text-md laptopL:text-xl laptopL:ml-5 laptopL:mt-2 fullHD:text-2xl fullHD:mt-4 fullHD:ml-6">
          Roadmap
        </p>
      </li>
      <li className="group mt-3 px-4 py-4 fullHD:mt-5 laptopL:lg:mt-7 laptopL:lg:ml-5 rounded-2xl transition duration-200 ease-in-out  hover:bg-custom-blue cursor-pointer md:w-10/12 md:flex fullHD:w-9/12">
        <CogIcon className="w-7 h-7 stroke-1 laptopL:lg:ml-4 transition duration-200 ease-in-out group-hover:stroke-slate-200 laptopL:w-10 laptopL:h-10 fullHD:w-14 fullHD:h-14" />
        <p className="hidden mt-1 md:inline-block md:ml-3.5 group-hover:text-slate-200 md:text-md laptopL:text-xl laptopL:ml-5 laptopL:mt-2 fullHD:text-2xl fullHD:mt-4 fullHD:ml-6">
          Settings
        </p>
      </li>
      <li className="group mt-40 mb-3 px-4 py-4 fullHD:mt-28 laptopL:lg:mt-56 laptopL:lg:ml-5 rounded-2xl transition duration-200 ease-in-out  hover:bg-custom-blue cursor-pointer md:w-10/12 md:flex fullHD:w-9/12  ">
        <LogoutIcon className="w-7 h-7  stroke-1 laptopL:lg:ml-4 transition duration-200 ease-in-out group-hover:stroke-slate-200 laptopL:w-10 laptopL:h-10 fullHD:w-14 fullHD:h-14" />
        <p className="hidden mt-0.5 md:inline-block md:ml-3.5 group-hover:text-slate-200 md:text-md laptopL:text-xl laptopL:ml-5 laptopL:mt-2 fullHD:text-2xl fullHD:mt-4 fullHD:ml-6">
          Logout
        </p>
      </li>
    </ul>
  );
}
