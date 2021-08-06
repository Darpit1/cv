import { FC } from "react";

const Footer: FC = () => {
  return (
    <div>
      <div className="bg-black-footer text-gray-footerText">
        <div className="py-10">
          <div className="flex justify-center text-2xl">
            <div>Follow Me:</div>
          </div>
          <div className="flex justify-center gap-x-10 pt-5">
            <div className="hover:underline">
              <a href="https://twitter.com/">Twitter</a>
            </div>
            <div className="hover:underline">
              <a href="https://youtube.com/">Youtube</a>
            </div>
            <div className="hover:underline">
              <a href="https://discord.com/">Discord</a>
            </div>
            <div className="hover:underline">
              <a href="https://github.com">Github</a>
            </div>
          </div>
          <div className="flex justify-center pt-10 text-gray-copyright">
            &copy; Copyright by Conrad
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
