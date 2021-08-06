import { FC, MouseEvent } from "react";
type ModalProps = {
  onCloseFAQModel: (e: MouseEvent<HTMLDivElement>) => void;
  isFAQActive: boolean;
};

const FAQ: FC<ModalProps> = (props) => {
  const { onCloseFAQModel, isFAQActive } = props;

  return (
    <div className="transition ease-in-out duration-500">
      <div
        className={` ${
          isFAQActive
            ? "items-center content-center h-screen w-screen flex justify-center fixed top-0 left-0 backdrop-filter backdrop-blur-sm"
            : "hidden"
        } z-50`}
      >
        <div className=" bg-gray-background p-10 rounded-lg shadow-2xl">
          <div
            onClick={onCloseFAQModel}
            className="flex justify-end -mt-4 pb-3 select-none cursor-pointer"
          >
            &#10006;
          </div>
          <div className="font-semibold flex justify-center ov">
            <div>
              <div className="font-semibold text-2xl text-green-primary border-b border-green-primaryDarker">
                Frequently Asked Questions
              </div>
              <div className="py-2 flex">
                <div>
                  <div className="flex">
                    <div className="border-b border-green-primaryOpacity text-green-gradientPrimary">
                      What is your full name?
                    </div>
                  </div>
                  <div>???</div>
                </div>
              </div>
              <div className="py-2 flex">
                <div>
                  <div className="flex">
                    <div className="border-b border-green-primaryOpacity text-green-gradientPrimary">
                      How old are you?
                    </div>
                  </div>

                  <div>???</div>
                </div>
              </div>
              <div className="py-2 flex">
                <div>
                  <div className="flex">
                    <div className="border-b border-green-primaryOpacity text-green-gradientPrimary">
                      Where are you based?
                    </div>
                  </div>
                  <div>???</div>
                </div>
              </div>
              <div className="py-2 flex">
                <div>
                  <div className="border-b border-green-primaryOpacity text-green-gradientPrimary">
                    How much experience do you have?
                  </div>
                  <div>???</div>
                </div>
              </div>
              <div className="py-2 flex">
                <div>
                  <div className="border-b border-green-primaryOpacity text-green-gradientPrimary">
                    What qualifications do you have?
                  </div>
                  <div>???</div>
                </div>
              </div>
              <div className="py-2 flex">
                <div>
                  <div className="border-b border-green-primaryOpacity text-green-gradientPrimary">
                    How do I get in touch with you?
                  </div>
                  <div>???</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FAQ;
