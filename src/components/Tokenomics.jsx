import DoughnutChart from "./DoughnutChart";
import HeadingText from "./HeadingText";
import SubHeading from "./SubHeading";

export default function Tokenomics() {
  const data = [
    { value: 20, color: "#fb923c" },
    { value: 80, color: "#3b82f6" },
  ];

  return (
    <div className="w-full p-3 md:p-6 bg-white rounded-lg">
      <HeadingText>Tokenomics</HeadingText>
      <SubHeading className="my-4">Initial Distribution</SubHeading>
      <div className="flex gap-2 md:gap-8 items-center">
        <div className="w-40 h-40 rotate-[180deg]">
          <DoughnutChart data={data} holeColor="white" />
        </div>
        <div className="text-lg ">
          <h1 className="flex-col mb-2 sm:mb-0 flex sm:flex-row sm:items-center sm:gap-3 sm:text-base text-sm">
            <p className="h-4 w-4 rounded-full bg-blue-500 "></p>
            Crowdsale Investors: 80%
          </h1>
          <h1 className="flex-col flex sm:flex-row sm:items-center sm:gap-3 sm:text-base text-sm">
            <p className="h-4 w-4 rounded-full bg-orange-400 "></p>
            Foundation: 20%
          </h1>
        </div>
      </div>
      <div className="mt-5">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores
          tenetur autem consectetur illo. Nam modi ducimus aut quod a
          perferendis, eos fugiat veritatis iure sit maiores hic et repellendus
          minima! Iusto voluptas quia sapiente cum! Reiciendis animi a ducimus
          accusantium quo aliquam laborum id cumque, commodi optio deserunt.
          Dolorum, fugiat consequatur pariatur provident dolore adipisci a
          perferendis dolor consequuntur nemo?
        </p>
      </div>
    </div>
  );
}
