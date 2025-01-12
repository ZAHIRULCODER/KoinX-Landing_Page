import { ArrowRight } from "lucide-react";
import HeadingText from "./HeadingText";

export const GetStartedCard = () => {
  return (
    <div className="bg-[#0052fe] text-white p-4 md:p-10 rounded-lg text-center">
      <div className="justify-center flex xl:hidden">
        <img src="/getstarted-logo.svg" className=""></img>
      </div>
      <HeadingText className="mb-4">
        Get Started with KoinX for FREE
      </HeadingText>
      <h2 className="text-xl font-semibold mb-4"></h2>
      <p className="mb-4">
        With our range of features that you can equip for free, KoinX allows you
        to be more educated and aware of your tax reports.
      </p>
      <div className="mt-8 justify-center hidden xl:flex">
        <img src="/getstarted-logo.svg" className=""></img>
      </div>
      <button className="bg-white text-black px-4 py-2 rounded-lg w-full font-medium">
        <span className="flex items-center justify-center gap-2">
          Get Started for FREE
          <ArrowRight size={18} />
        </span>
      </button>
    </div>
  );
};
