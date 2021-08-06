import { FC } from "react";

const CustomTextArea: FC = () => {
  return (
    <div>
      <textarea
        cols={49}
        rows={10}
        className="outline-none border border-green-primary rounded-lg resize-none py-2 px-2"
      />
    </div>
  );
};
export default CustomTextArea;
