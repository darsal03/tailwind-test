import {
  PlusIcon,
  AdjustmentsIcon,
  MenuIcon,
  DatabaseIcon,
  VideoCameraIcon,
  ClockIcon,
  LocationMarkerIcon,
  DesktopComputerIcon,
  DeviceMobileIcon,
  CurrencyDollarIcon,
  CreditCardIcon,
  SpeakerphoneIcon,
  ChartPieIcon,
  ServerIcon,
} from "@heroicons/react/outline";
export function Content() {
  return (
    <div className=" rounded-tl-custom-radius bg-slate-100 h-full ">
      <ContentHeader />
      <div className="border mt-6 mb-4 bg-slate-500 mx-auto w-11/12 opacity-60"></div>
      <ContentFilter />
      <CardList />
    </div>
  );
}

function ContentHeader() {
  return (
    <div className="mt-4 mb-4 xxs:pt-1 md:flex">
      <div className="text-center  text-custom-gray md:flex md:text-left md:ml-6 lg:ml-8 laptopL:ml-12 fullHD:ml-14">
        <div className="mt-5 ">
          <p className="font-extrabold text-xl   lg:text-2xl laptopL:text-3xl fullHD:text-4xl">
            Reporting
          </p>
          <p className="mt-1.5 text-xs xxs:mt-2 xxs:mb-3 lg:text-sm laptopL:text-base fullHD:text-xl">
            All project in current month
          </p>
        </div>
      </div>
      <div className="h-9 w-9 mx-auto x  rounded-xl bg-custom-blue xxs:w-8 xxs:h-8 xxs:rounded-lg  md:mx-0 md:ml-auto md:mt-6 md:mr-6 lg:mr-9 lg:h-10 lg:w-10 lg:mt-8 laptopL:w-12 laptopL:h-12 laptopL:mr-12 laptopL:mt-9 fullHD:mr-14">
        <PlusIcon className="w-7 h-7 block m-auto pt-2 stroke-slate-200   xxs:pt-1 lg:w-8 lg:h-8 lg:mt-0.5 laptopL:mt-1" />
      </div>
    </div>
  );
}

function ContentFilter() {
  return (
    <div className="lg:flex md:">
      <ul className="hidden text-custom-gray md:flex md:justify-center md:mt-4 md:mb-8 md:ml-0 lg:ml-5 laptopL:ml-6 fullHD:ml-10">
        <li className="group flex cursor-pointer h-fit">
          <p className="mt-2 mr-4 ml-5 transition duration-200 ease-in-out group-hover:text-custom-blue laptopL:text-lg fullHD:text-filter fullHD:mt-4">
            All
          </p>
          <div className="w-9 h-9 text-center cursor-pointer border border-white rounded-md transition duration-200 ease-in-out group-hover:border-custom-blue bg-white xs:w-10 xs:h-10 laptopL:w-11 laptopL:h-12 fullHD:h-14 fullHD:w-14">
            <p className="mt-2  transition duration-200 ease-in-out  group-hover:text-custom-blue laptopL:text-lg laptopL:mt-2.5 fullHD:text-filter fullHD:mt-3.5">
              21
            </p>
          </div>
        </li>
        <li className="group flex cursor-pointer h-fit  laptopL:mx-1.5 ">
          <p className="mt-2 mr-4 ml-5 transition duration-200 ease-in-out group-hover:text-custom-blue laptopL:text-lg fullHD:text-filter fullHD:mt-4">
            Started
          </p>
          <div className="w-9 h-9 text-center cursor-pointer border border-white rounded-md transition duration-200 ease-in-out group-hover:border-custom-blue bg-white xs:w-10 xs:h-10 laptopL:w-11 laptopL:h-12 fullHD:h-14 fullHD:w-14">
            <p className="mt-2  transition duration-200 ease-in-out  group-hover:text-custom-blue laptopL:text-lg laptopL:mt-2.5 fullHD:text-filter fullHD:mt-3.5">
              13
            </p>
          </div>
        </li>
        <li className="group flex cursor-pointer h-fit  laptopL:mr-1.5">
          <p className="mt-2 mr-4 ml-5 transition duration-200 ease-in-out group-hover:text-custom-blue  laptopL:text-lg fullHD:text-filter fullHD:mt-4">
            Approval
          </p>
          <div className="w-9 h-9 text-center cursor-pointer border border-white rounded-md transition duration-200 ease-in-out group-hover:border-custom-blue bg-white xs:w-10 xs:h-10 laptopL:w-11 laptopL:h-12 fullHD:h-14 fullHD:w-14">
            <p className="mt-2 transition duration-200 ease-in-out  group-hover:text-custom-blue laptopL:text-lg laptopL:mt-2.5 fullHD:text-filter fullHD:mt-3.5">
              42
            </p>
          </div>
        </li>
        <li className="group flex cursor-pointer h-fit ">
          <p className="mt-2 mr-4 ml-5 transition duration-200 ease-in-out group-hover:text-custom-blue  laptopL:text-lg fullHD:text-filter fullHD:mt-4">
            Finished
          </p>
          <div className="w-9 h-9 text-center  border border-white rounded-md transition duration-200 ease-in-out group-hover:border-custom-blue bg-white xs:w-10 xs:h-10 laptopL:w-11 laptopL:h-12 fullHD:h-14 fullHD:w-14">
            <p className="mt-2  transition duration-200 ease-in-out group-hover:text-custom-blue laptopL:text-lg laptopL:mt-2.5 fullHD:text-filter fullHD:mt-3.5">
              52
            </p>
          </div>
        </li>
      </ul>
      <ul className="flex text-custom-gray mb-7 justify-center md:hidden lg:flex lg:flex-col lg:mt-4 lg:mr-2 lg:mb-7 lg:items-center lg:ml-auto xl:flex-row xl:mt-1 xl:mr-12  laptopL:flex  laptopL:ml-auto laptopL:mr-12 ">
        <li className=" group hidden cursor-pointer  border border-slate-100 transition duration-200 ease-in-out hover:border-custom-blue  xl:flex xl:w-fit xl:h-10 rounded-md bg-white laptopL:h-12 fullHD:h-14">
          <AdjustmentsIcon className="h-9 w-9  transition duration-200 ease-in-out group-hover:stroke-custom-blue stroke-1 laptopL:h-11 laptopL:w-10 laptopL:mt-0.5 fullHD:mt-1 fullHD:w-12 fullHD:h-12 " />
          <p className="text-xs  mt-2.5 ml-0.5 pr-3 transition duration-200 ease-in-out group-hover:text-custom-blue laptopL:mt-3 laptopL:text-base fullHD:text-lg fullHD:mt-4 ">
            More
          </p>
        </li>
        <li className="w-9 h-9 rounded-md bg-white xs:w-10 xs:h-10 xl:hidden ">
          <AdjustmentsIcon className="w-8 h-8 stroke-1 mt-0.5 ml-0.5 xs:w-9 xs:h-9 " />
        </li>
        <li className="w-9 h-9 mx-4 md:mx-32  rounded-md bg-white  xs:mx-7 xs:w-10 xs:h-10 lg:my-2.5 xl: laptopL:h-12 laptopL:w-12 fullHD:h-14 fullHD:w-14">
          <DatabaseIcon className="w-8 h-8 stroke-1 mt-0.5 ml-0.5  xs:w-9 xs:h-9 laptopL:mt-1.5 laptopL:mx-auto  fullHD:mt-2.5" />
        </li>
        <li className="w-9 h-9 rounded-md bg-white  xs:w-10 xs:h-10 laptopL:h-12 laptopL:w-12 fullHD:h-14 fullHD:w-14">
          <MenuIcon className="w-8 h-8 stroke-1 mt-0.5 ml-0.5 xs:w-9 xs:h-9 laptopL:mt-1.5 laptopL:mx-auto fullHD:mt-2.5" />
        </li>
      </ul>
    </div>
  );
}

function Card({
  circleStyle,
  icon,
  title,
  target,
  time,
  members = ["N", "T"],
  progress,
}) {
  return (
    <div className="mt-10 text-custom-gray md:ml-5 xl:ml-0 xl:mt-10">
      <div className={circleStyle}>{icon}</div>
      <li className="w-52 h-56 mt-10  rounded-custom-radius bg-white md:w-card-w-md md:h-card-h-md lg:w-card-w-lg lg:h-card-h-lg xl:w-card-w-xl  xl:h-card-h-xl laptopL:w-card-w-laptolL">
        <div className="flex flex-col ml-7 md:ml-10">
          <p className="text-base font-bold pt-12 md:text-2xl xl:text-3xl laptopL:text-2xl">
            {title}
          </p>
          <div className="flex text-xs my-2 md:text-base xl:text-lg">
            <LocationMarkerIcon className="w-6 h-6 stroke-1 md:w-7 md:h-7" />
            <p className="ml-1 mt-1">{target}</p>
          </div>
          <div className="flex text-xs md:text-base xl:text-lg">
            <ClockIcon className="w-6 h-6 stroke-1  md:w-7 md:h-7" />
            <p className="ml-1 mt-1">{time}</p>
          </div>
        </div>
        <div className="border border-custom-gray border-opacity-20 my-4 mx-auto w-10/12 md:mt-6 md:mb-4 "></div>
        <div className="flex justify-around h-fit text-xs md:text-sm">
          <div>
            <p className="md:text-base xl:text-lg">Team Members</p>
            <div className="flex mt-1 xl:mt-2">
              {members.map((member, idx) => {
                return (
                  <div
                    key={idx}
                    className="w-5 h-5 even:mx-1  bg-slate-600 rounded-full md:w-8 md:h-8 "
                  >
                    <p className="text-white text-center mt-0.5 md:text-lg">
                      {member}
                    </p>
                  </div>
                );
              })}
              <div className="w-5 h-5 ml-1 rounded-full md:w-8 md:h-8">
                <PlusIcon className="stroke-1" />
              </div>
            </div>
          </div>
          <div>
            <p className="md:text-base xl:text-lg xl:">Progress</p>
            <p className="text-sm mt-1  md:text-lg xl:text-xl xl:mt-2">
              {progress}
            </p>
          </div>
        </div>
      </li>
    </div>
  );
}

function CardList() {
  return (
    <ul className="flex flex-col items-center  xl:grid xl:grid-cols-2 xl:grid-rows-4 xl:justify-items-center laptopL:grid-cols-3 laptopL:grid-rows-4 fullHD:grid-cols-4 fullHD:grid-rows-2 ">
      <Card
        circleStyle={
          "w-card-circle-sm h-card-circle-sm  rounded-full bg-teal-500 shadow-lg shadow-teal-300 absolute ml-6"
        }
        icon={
          <DeviceMobileIcon className="w-12 h-12 mx-auto mt-2.5 stroke-1 stroke-white " />
        }
        title={"App Developement"}
        target={"Marketing Team"}
        time={"1 Week Left"}
        progress={"34%"}
        members={["N", "J", "P"]}
      />
      <Card
        circleStyle={
          "w-card-circle-sm h-card-circle-sm  rounded-full bg-cyan-500 shadow-lg shadow-cyan-300 absolute  ml-6"
        }
        icon={
          <DesktopComputerIcon className="w-12 h-12 mx-auto mt-2.5 stroke-1 stroke-white " />
        }
        title={"Web Instructors"}
        target={"Marketing Team"}
        time={"4 Weeks Left"}
        progress={"14%"}
        members={["N", "G"]}
      />
      <Card
        circleStyle={
          "w-card-circle-sm h-card-circle-sm  rounded-full bg-orange-500 shadow-lg shadow-orange-300 absolute  ml-6"
        }
        icon={
          <CreditCardIcon className="w-12 h-12 mx-auto mt-2.5 stroke-1 stroke-white " />
        }
        title={"Web3 Managers"}
        target={"Marketing Team"}
        time={"5 Days Left"}
        progress={"28%"}
        members={["J", "V", "P"]}
      />
      <Card
        circleStyle={
          "w-card-circle-sm h-card-circle-sm  rounded-full bg-orange-500 shadow-lg shadow-orange-300 absolute  ml-6"
        }
        icon={
          <SpeakerphoneIcon className="w-12 h-12 mx-auto mt-2.5 stroke-1 stroke-white " />
        }
        title={"Feed Back"}
        target={"Customer Relations"}
        time={"2 Days Left"}
        progress={"83%"}
        members={["N", "J", "P"]}
      />
      <Card
        circleStyle={
          "w-card-circle-sm h-card-circle-sm  rounded-full bg-purple-500 shadow-lg shadow-purple-300 absolute  ml-6"
        }
        icon={
          <CurrencyDollarIcon className="w-12 h-12 mx-auto mt-2.5 stroke-1 stroke-white " />
        }
        title={"Pay Stack"}
        target={"Big Data Dev"}
        time={"14 Weeks Left"}
        progress={"59%"}
        members={["N", "J", "P"]}
      />
      <Card
        circleStyle={
          "w-card-circle-sm h-card-circle-sm  rounded-full bg-pink-500 shadow-lg shadow-pink-300 absolute ml-6"
        }
        icon={
          <ServerIcon className="w-12 h-12 mx-auto mt-2.5 stroke-1 stroke-white " />
        }
        title={"Data Managers"}
        target={"Overlook"}
        time={"12 Weeks Left"}
        progress={"12%"}
        members={["S", "J", "P"]}
      />
      <Card
        circleStyle={
          "w-card-circle-sm h-card-circle-sm  rounded-full bg-teal-500 shadow-lg shadow-teal-300 absolute ml-5"
        }
        icon={
          <VideoCameraIcon className="w-12 h-12 mx-auto mt-2.5 stroke-1 stroke-white " />
        }
        title={"Cinematography"}
        target={"Main Srteam"}
        time={"7 Weeks left"}
        progress={"32%"}
        members={["N", "J", "P"]}
      />
      <Card
        circleStyle={
          "w-card-circle-sm h-card-circle-sm  rounded-full bg-purple-500 shadow-lg shadow-purple-300 absolute  ml-6"
        }
        icon={
          <ChartPieIcon className="w-12 h-12 mx-auto mt-2.5 stroke-1 stroke-white " />
        }
        title={"Data Analysts"}
        target={"Marketing Team"}
        time={"3 Weeks left"}
        progress={"38%"}
        members={["N", "J", "P"]}
      />
    </ul>
  );
}
