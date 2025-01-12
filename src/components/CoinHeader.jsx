import HeadingText from "./HeadingText";

export const CoinHeader = ({ name, symbol, rank }) => {
  return (
    <div className="flex items-center gap-2 mb-4">
      <img src="/bitcoin-logo.svg" className="w-10" alt="Bitcoin" />
      <HeadingText>{name}</HeadingText>
      <span className="text-gray-500 font-medium">{symbol}</span>
      <span className="bg-[#808A9D] px-3 py-2 text-white rounded-lg ml-5">
        Rank #{rank}
      </span>
    </div>
  );
};
