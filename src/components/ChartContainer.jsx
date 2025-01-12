import { CoinHeader } from "./CoinHeader";
import { PriceSection } from "./PriceSection";
import TradingViewWidget from "./TradingViewWidget";

export const ChartContainer = () => {
  return (
    <div className="col-span-2 bg-white rounded-lg border border-gray-100 p-3 md:p-6 space-y-6 ">
      <CoinHeader name="Bitcoin" symbol="BTC" rank={1} />
      <PriceSection />
      <TradingViewWidget />
    </div>
  );
};
