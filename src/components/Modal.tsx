import { FC, MouseEvent } from "react";
import CustomButton from "./input/CustomButton";
import CustomInput from "./input/CustomInput";
import CustomTextArea from "./input/CustomTextArea";
type ModalProps = {
  isActive: boolean;
  onCloseModel: (e: MouseEvent<HTMLDivElement>) => void;
};

const Modal: FC<ModalProps> = (props) => {
  const { isActive, onCloseModel } = props;

  return (
    <div className="transition ease-in-out duration-500">
      <div
        className={` ${
          isActive
            ? "items-center content-center h-screen w-screen flex justify-center fixed top-0 left-0 backdrop-filter backdrop-blur-sm"
            : "hidden"
        } z-50`}
      >
        <div className=" bg-gray-background border-green-primary p-10 rounded-lg shadow-2xl">
          <div
            onClick={onCloseModel}
            className="flex justify-end -mt-4 pb-3 select-none cursor-pointer"
          >
            &#10006;
          </div>
          <div className="font-semibold">
            <div>
              <div>
                <div className="">First Name:</div>
                <div>
                  <CustomInput />
                </div>
              </div>
              <div className="pt-2">
                <div>Email Address:</div>
                <div>
                  <CustomInput />
                </div>
              </div>
              <div className="pt-2">
                <div>Phone number (optional):</div>
                <div>
                  <CustomInput />
                </div>
              </div>
              <div className="pt-2">
                <div>What are you messaging me about?</div>
                <div>
                  <CustomTextArea />
                </div>
              </div>
              <div className="flex justify-center pt-5">
                <CustomButton value={"Send"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Modal;
