import { FC } from "react";
import ProfileIcon from "./icons/ProfileIcon";

const NavBar: FC = () => {
  return (
    <div className="w-full bg-white bg-opacity-80 bg-transparent z-3">
      <div className="py-2 px-32">
        <div className="flex items-center justify-between ">
          <div className="">
            <ProfileIcon />
          </div>
          <div className="flex justify-end gap-x-5 text-xl">
            <div className="hover:bg-green-primary px-4 py-2 rounded-full select-none">
              <a href="#about">About</a>
            </div>
            <div className="hover:bg-green-primary p-4 py-2 rounded-full select-none">
              <a href="#work">Work</a>
            </div>
            <div className="hover:bg-green-primary p-4 py-2 rounded-full select-none">
              <a href="#testimonials">Testimonials</a>
            </div>
            <div className="hover:bg-green-primary p-4 py-2 rounded-full select-none">
              <a href="#contact">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NavBar;
