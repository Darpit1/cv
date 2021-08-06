import { FC, MouseEvent } from "react";
import CustomButton from "./input/CustomButton";
type ContactProps = {
  handleModelWindow: (e: MouseEvent<HTMLDivElement>) => void;
  handleFAQModelWindow: (e: MouseEvent<HTMLDivElement>) => void;
};

const Contact: FC<ContactProps> = (props) => {
  const { handleModelWindow, handleFAQModelWindow } = props;
  return (
    <div className="border-gray-border border-t ">
      <div className="w-full pt-32 px-80 pb-5">
        <div className="text-3xl text-transform: uppercase font-semibold text-green-primary">
          Contact me
        </div>
        <div className="text-5xl">Ready to create a website with me?</div>
      </div>
      <div className="pt-20 px-56 ">
        <div className="flex justify-center">
          <div className="w-1/2">
            If you have any questions, something you are unsure about or simply
            just want to say hi to me, don't hesitate to contact me and I will
            try my best to get back to you ASAP, or view{" "}
            <span
              onClick={handleFAQModelWindow}
              className="underline text-green-primary cursor-pointer"
            >
              Frequently Asked Questions.
            </span>
          </div>
        </div>
        <div className="pt-10">
          <div className="flex justify-center ">
            <div
              className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
              onClick={handleModelWindow}
            >
              <CustomButton value={"Contact Me"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
