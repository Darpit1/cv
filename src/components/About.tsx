import { FC } from "react";
import AboutPicture from "./icons/AboutPicture";

const About: FC = () => {
  return (
    <div className="border-gray-border border-t">
      <div className="w-full pt-32 2xl:px-80 px-40">
        <div className="text-3xl text-transform: uppercase font-semibold text-green-primary">
          About
        </div>
        <div className="text-5xl">
          I strive to make simple, yet beautiful websites
        </div>
      </div>
      <div className="grid grid-cols-2 pt-20 w-full 2xl:px-48 px-40 items-center">
        <div className="flex justify-center">
          <div>
            <AboutPicture />
            <div className="flex justify-center gap-x-3 pt-2">
              <div className="rounded-full h-5 w-5 bg-yellow-secondary select-none" />
              <div className="rounded-full h-5 w-5 bg-green-primary select-none" />
              <div className="rounded-full h-5 w-5 bg-red-tertiary select-none" />
            </div>
          </div>
        </div>
        <div className="pl-20 flex justify-center">
          <div className="items-center">
            <div className="rounded-full h-14 w-14 bg-green-primaryOpacity" />
            <div className="py-5 text-4xl font-semibold ">Who I Am</div>
            <div>
              I'm a web designer / developer based in Robertson, South Africa. I
              have a passion for web development and coding in general. I love
              creating / designing new and intresting things for people.
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 pt-20 w-full 2xl:px-48 px-40 items-center">
        <div className=" 2xl:px-20 xl:pr-20 flex justify-center">
          <div className="items-center">
            <div className="rounded-full h-14 w-14 bg-green-primaryOpacity" />
            <div className="py-5 text-4xl font-semibold">What I Do</div>
            <div className="text-gray-textContent">
              I mainly create modern and simple websites for people that best
              express themselves or their business. I like to keep things simple
              and minimalistic, while conveying the message you want to send.
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="">
            <AboutPicture />
            <div className="flex justify-center gap-x-3 pt-2">
              <div className="rounded-full h-5 w-5 bg-yellow-secondary select-none" />
              <div className="rounded-full h-5 w-5 bg-green-primary select-none" />
              <div className="rounded-full h-5 w-5 bg-red-tertiary select-none" />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 pt-20 w-full 2xl:px-48 px-40 items-center">
        <div className="flex justify-center">
          <div>
            <AboutPicture />
            <div className="flex justify-center gap-x-3 pt-2">
              <div className="rounded-full h-5 w-5 bg-yellow-secondary select-none" />
              <div className="rounded-full h-5 w-5 bg-green-primary select-none" />
              <div className="rounded-full h-5 w-5 bg-red-tertiary select-none" />
            </div>
          </div>
        </div>
        <div className="pl-20">
          <div className="items-center">
            <div className="rounded-full h-14 w-14 bg-green-primaryOpacity" />
            <div className="py-5 text-4xl font-semibold">
              Develop What You Need
            </div>
            <div className="text-gray-textContent">
              I'm developer, so I am always exploring new technogolies to make
              the best possible website for you, while keeping up to date with
              existing technogolies. You dream it, I make it.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
