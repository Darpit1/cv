import { FC, useEffect, useState } from "react";
import MainPicture from "./icons/MainPicture";

// Define what is going to be typed and for how long
const title = "a developer.";
const TYPING_START_MS = 3_000;

const LandingPage: FC = () => {
  const [typedTitle, setTypedTitle] = useState("");
  const [typing, setTyping] = useState(false);

  useEffect(() => {
    if (!typing) return;
    const timeout = setTimeout(() => {
      //setting title to display in HTML using state
      setTypedTitle(title.slice(0, typedTitle.length + 1));
    }, 200);
    //Effect clean up process before component mounts to prevent timeout from changing state if navigating away
    return () => clearTimeout(timeout);
  }, [typedTitle, typing]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setTyping(true);
    }, TYPING_START_MS);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="flex justify-center content-center pb-72">
      <div className="text-8xl xl:flex gap-x-24 items-center">
        <div className="font-semibold w-560">
          <div className="">I'm Conrad</div>
          <div className="blinking-cursor ">{typedTitle}</div>
          <div className="text-xl pt-16 text-green-primary border-green-primary border-b border-w w-120">
            <a href="#about">Learn more &darr;</a>
          </div>
        </div>
        <div className="">
          <MainPicture />
        </div>
      </div>
    </div>
  );
};
export default LandingPage;
