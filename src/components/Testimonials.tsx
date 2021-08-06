import { FC } from "react";

const Testimonals: FC = () => {
  return (
    <div className="border-gray-border border-t">
      <div className="w-full pt-32 px-80">
        <div className="text-3xl text-transform: uppercase font-semibold text-green-primary">
          Still not sure?
        </div>
        <div className="text-5xl">
          Take a look at what other people are saying
        </div>
      </div>
      <div className="pt-20 px-56 text-gray-bodyColor">
        <div className="flex items-center">
          <div className="pr-10 flex flex-shrink-0">
            <div className="flex text-4xl bg-white rounded-full p-4 cursor-pointer">
              <div className="select-none">&larr;</div>
            </div>
          </div>

          <div className="w-full text-justify px-10">
            <div className="pb-5 font-semibold text-4xl">Loved it!</div>
            <div className="text-gray-textContent">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </div>
            <div className="flex justify-end font-semibold">
              <div className="pt-2">- Jamie Adam, USA</div>
            </div>
          </div>

          <div className="w-full text-justify px-10 hidden">
            <div className="pb-5 font-semibold text-4xl">
              Finally free from old and boring websites
            </div>
            <div className="text-gray-textContent">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </div>
            <div className="flex justify-end font-semibold">
              <div className="pt-2">- Hans Schmedtmann, Germany</div>
            </div>
          </div>

          <div className="w-full text-justify px-10 hidden">
            <div className="pb-5 font-semibold text-4xl">
              Created the perfect website for my business!
            </div>
            <div className="text-gray-textContent">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </div>
            <div className="flex justify-end font-semibold">
              <div className="pt-2">- Tyler de Groot, Netherlands</div>
            </div>
          </div>

          <div className="flex pl-10">
            <div className="flex text-4xl bg-white rounded-full p-4 cursor-pointer">
              <div className="select-none">&rarr;</div>
            </div>
          </div>
        </div>
        <div className="flex justify-center gap-x-3 pt-10">
          <div className="bg-gray-dotsBackgroundColor h-3 w-3 rounded-full" />
          <div className="bg-gray-dotsBackgroundColor h-3 w-3 rounded-full" />
          <div className="bg-gray-dotsBackgroundColor h-3 w-3 rounded-full" />
        </div>
      </div>
    </div>
  );
};
export default Testimonals;
