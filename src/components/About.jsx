import { ArrowRight } from "lucide-react";
import HeadingText from "./HeadingText";
import SubHeading from "./SubHeading";

export default function About() {
  return (
    <div className="w-full bg-white p-3 md:p-6 rounded-lg">
      <HeadingText>About Bitcoin</HeadingText>
      <SubHeading className="mt-4">What is Bitcoin?</SubHeading>
      <div className=" border-b-gray-200 border-b-2 my-2">
        <p className="mb-3">
          Bitcoin's price today is US$16,951.82, with a 24-hour trading volume
          of $19.14 B. BTC is +0.36% in the last 24 hours. It is currently
          -7.70% from its 7-day all-time high of $18,366.66, and 3.40% from its
          7-day all-time low of $16,394.75. BTC has a circulating supply of
          19.24 M BTC and a max supply of 21 M BTC.
        </p>
      </div>
      <SubHeading className="my-4">How does Bitcoin work?</SubHeading>
      <p>
        Lorem ipsum dolor sit amet consectetur.Aliquam placerat sit lobortis
        tristique pharetra.Diam id et lectus urna et tellus aliquam dictum
        at.Viverra diam suspendisse enim facilisi diam ut sed.Quam scelerisque
        fermentum sapien morbi sodales odio sed rhoncus.Ultricies urna volutpat
        pendisse enim facilisi diam ut sed. Quam scelerisque fermentum sapien
        morbi sodales odio sed rhoncus.
      </p>
      <p className="my-4">
        Diam praesent massa dapibus magna aliquam a dictumst volutpat.Egestas
        vitae pellentesque auctor amet. Nunc sagittis libero adipiscing cursus
        felis pellentesque interdum.Odio cursus phasellus velit in senectus enim
        dui.Turpis tristique placerat interdum sed volutpat.Id imperdiet magna
        eget eros donec cursus nunc. Mauris faucibus diam mi nunc praesent massa
        turpis a.Integer dignissim augue viverra nulla et quis lobortis
        phasellus.Integer pellentesque enim convallis ultricies at.
      </p>
      <p className="mt-4 pb-3 border-b-2 border-b-gray-200">
        Fermentum hendrerit imperdiet nulla viverra faucibus.Sit aliquam massa
        vel convallis duis ac.Mi adipiscing semper scelerisque porttitor
        pulvinar nunc risus.Fermentum potenti iaculis lacinia congue ipsum fames
        amet dui.Purus ultrices tincidunt volutpat in eget.Ullamcorper dui
      </p>

      <div>
        <HeadingText className="mt-4">Already holding bitcoin?</HeadingText>
        <div className="py-3 flex-col flex md:flex-row gap-6 border-b-2 border-b-gray-200">
          <div className="p-3 xl:pr-6 flex gap-3 sm:gap-6 rounded-lg bg-gradient-to-br from-green-400 to-cyan-600">
            <img
              className="size-28 rounded-lg"
              src="about-1.svg"
              alt="about-1"
            />
            <div className="font-semibold xl:pt-3">
              <h2 className="text-xl text-white">Calculate your Profits</h2>
              <button className="my-2 rounded-lg p-2 flex gap-2 items-center bg-white sm:px-4 hover:bg-gray-100">
                Check Now <ArrowRight size={18} />
              </button>
            </div>
          </div>

          <div className="p-3 xl:pr-6 flex gap-3 sm:gap-6 rounded-lg bg-gradient-to-br from-red-500 to-orange-400">
            <img
              className="size-28 rounded-lg"
              src="about-2.svg"
              alt="about-2"
            />
            <div className="font-semibold xl:pt-3">
              <h2 className="text-xl text-white">
                Calculate your Tax Liability
              </h2>
              <button className="my-2 rounded-lg p-2 flex gap-2 items-center bg-white sm:px-4 hover:bg-gray-100">
                Check Now <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
        <p className="my-2 hidden md:block">
          Fermentum hendrerit imperdiet nulla viverra faucibus.Sit aliquam massa
          vel convallis duis ac.Mi adipiscing semper scelerisque porttitor
          pulvinar nunc risus.Fermentum potenti iaculis lacinia congue ipsum
          fames amet dui.Purus ultrices tincidunt volutpat in eget.Ullamcorper
          dui
        </p>
      </div>
    </div>
  );
}
