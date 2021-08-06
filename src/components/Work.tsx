import { FC, MouseEvent, useState } from "react";

const Work: FC = () => {
  const [planningIsActive, setPlanningIsActive] = useState(true);
  const [buildingIsActive, setBuildingIsActive] = useState(false);
  const [communicationIsActive, setCommunicationIsActive] = useState(false);

  const isPlanning = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setPlanningIsActive(true);
    setBuildingIsActive(false);
    setCommunicationIsActive(false);
  };

  const isBuilding = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setBuildingIsActive(true);
    setPlanningIsActive(false);
    setCommunicationIsActive(false);
  };

  const isCommunication = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setCommunicationIsActive(true);
    setPlanningIsActive(false);
    setBuildingIsActive(false);
  };

  return (
    <div id="work" className="border-gray-border border-t">
      <div className="w-full pt-32 px-80">
        <div className="text-3xl text-transform: uppercase font-semibold text-green-primary">
          Work
        </div>
        <div className="text-5xl">
          How I operate when designing and building a website for you
        </div>
      </div>
      <div className="pt-20 px-56 ">
        <div className="flex  justify-center gap-x-10">
          <div
            onClick={isPlanning}
            className={`bg-yellow-secondary hover:bg-yellow-secondaryDarker cursor-pointer w-48 py-3 rounded-full flex justify-center font-semibold select-none relative z-1  ${
              planningIsActive
                ? "-bottom-5"
                : "transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-x-100  -bottom-6"
            }`}
          >
            01 Planning
          </div>
          <div
            onClick={isBuilding}
            className={`bg-green-primary hover:bg-green-primaryDarker cursor-pointer w-48 py-3 rounded-full flex justify-center font-semibold select-none z-1 relative ${
              buildingIsActive
                ? "-bottom-4"
                : "transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-x-100 -bottom-6"
            } `}
          >
            02 Building
          </div>
          <div
            onClick={isCommunication}
            className={`bg-red-tertiary hover:bg-red-tertiaryDarker cursor-pointer w-48 py-3 rounded-full flex justify-center font-semibold select-none z-1 relative ${
              communicationIsActive
                ? "-bottom-4"
                : "transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-x-100  -bottom-6"
            }`}
          >
            03 Communication
          </div>
        </div>
      </div>
      <div className="px-60 z-1">
        <div className="bg-white">
          <div className="p-20">
            <div className={`${planningIsActive ? "flex" : "hidden"}`}>
              <div className="">
                <div className="rounded-full h-14 w-14 bg-yellow-secondaryOpacity select-none" />
              </div>
              <div className="pl-10">
                <div className="font-medium text-2xl ">Planning</div>
                <div className="pt-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </div>
              </div>
            </div>

            <div className={`${buildingIsActive ? "flex" : "hidden"}`}>
              <div className="">
                <div className="rounded-full h-14 w-14 bg-green-primaryOpacity select-none" />
              </div>
              <div className="pl-10">
                <div className="font-medium text-2xl ">Building</div>
                <div className="pt-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </div>
              </div>
            </div>

            <div className={`${communicationIsActive ? "flex" : "hidden"}`}>
              <div className="">
                <div className="rounded-full h-14 w-14 bg-red-teriaryOpacity select-none" />
              </div>
              <div className="pl-10">
                <div className="font-medium text-2xl ">Communication</div>
                <div className="pt-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Work;
