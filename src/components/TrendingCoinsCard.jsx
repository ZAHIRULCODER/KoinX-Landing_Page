import { Triangle } from "lucide-react";
import HeadingText from "./HeadingText";
import axios from "axios";

export default async function TrendingCoinsCard() {
  const response = await axios.get(`${process.env.ROOT_URL}/search/trending`, {
    headers: {
      "x-cg-demo-api-key": process.env.COIN_GECKO_API_KEY,
    },
  });
  const trendingCoins = response.data.coins.slice(0, 3);

  const formattedCoinsData = trendingCoins.map((coin) => ({
    symbol: coin.item.symbol.toUpperCase(),
    name: coin.item.name,
    img: coin.item.large,
    changePercentage: coin.item.data.price_change_percentage_24h.usd.toFixed(2),
  }));

  return (
    <div className="bg-white rounded-lg border border-gray-100 p-4">
      <HeadingText className="mb-4">Trending Coins (24h)</HeadingText>
      {/* Trending coins content */}
      <div className="space-y-4">
        {formattedCoinsData.map((coin) => (
          <div key={coin.symbol} className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img
                src={coin.img}
                className="size-8 rounded-full"
                alt={coin.name}
              />
              <h3 className="text-base font-semibold">
                {coin.name} ({coin.symbol})
              </h3>
            </div>
            <span
              className={`flex items-center gap-1 px-2 py-1 rounded-md text-sm  ${
                coin.changePercentage >= 0
                  ? "text-green-500 bg-green-300/20"
                  : "text-red-500 bg-red-300/20"
              }`}>
              {coin.changePercentage >= 0 ? (
                <Triangle size={15} fill="#47b68f" />
              ) : (
                <Triangle size={15} fill="#ff6565" />
              )}
              {Math.abs(coin.changePercentage)}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
