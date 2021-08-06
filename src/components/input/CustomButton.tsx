import { FC } from "react";
type CustomButtonProps = {
  value: string;
};

const CustomButton: FC<CustomButtonProps> = (props) => {
  const { value } = props;

  return (
    <div>
      <div className="bg-green-primary rounded-lg py-2 px-10 cursor-pointer select-none hover:bg-green-primaryDarker font-semibold ">
        {value}
      </div>
    </div>
  );
};
export default CustomButton;
