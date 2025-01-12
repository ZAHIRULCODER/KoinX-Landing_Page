import axios from "axios";
import { Triangle } from "lucide-react";

function formatNumberWithCommas(number, locale = "en-IN") {
  return new Intl.NumberFormat(locale).format(number);
}

export const PriceSection = async () => {
  const response = await axios.get(
    `${process.env.ROOT_URL}/simple/price?ids=bitcoin&vs_currencies=inr%2Cusd&include_24hr_change=true`,
    {
      headers: {
        "x-cg-demo-api-key": process.env.COIN_GECKO_API_KEY,
      },
    }
  );
  const bitcoinData = response.data.bitcoin;

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-start gap-8">
        <div>
          <div className="text-2xl font-semibold">
            {(bitcoinData &&
              `$${formatNumberWithCommas(bitcoinData.usd, "en-US")}`) ||
              `$66,759`}
          </div>
          <div className="text-base mt-1 font-medium">
            {(bitcoinData &&
              `₹ ${formatNumberWithCommas(bitcoinData.inr, "en-IN")}`) ||
              `₹ 50,00,000`}
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span
            className={`flex items-center gap-1 px-2 py-1 rounded-md text-sm  ${
              bitcoinData && bitcoinData.inr_24h_change >= 0
                ? "text-green-500 bg-green-300/20"
                : "text-red-500 bg-red-300/20"
            }`}>
            {bitcoinData && bitcoinData.inr_24h_change >= 0 ? (
              <Triangle size={15} fill="#47b68f" />
            ) : (
              <Triangle size={15} fill="#ff6565" />
            )}
            {Math.abs(bitcoinData.inr_24h_change).toFixed(2)}%
          </span>
          <span className="text-gray-500">(24H)</span>
        </div>
      </div>
      <div className="w-full h-[1px] bg-black/20 rounded-md"></div>
    </div>
  );
};
