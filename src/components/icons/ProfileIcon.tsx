import { FC } from "react";
import circleCropped from "../icons/circle-cropped.png";

const ProfileIcon: FC = () => {
  return (
    <div className="rounded-full w-24 h-24 ">
      <img src={circleCropped} alt="" />
    </div>
  );
};
export default ProfileIcon;
