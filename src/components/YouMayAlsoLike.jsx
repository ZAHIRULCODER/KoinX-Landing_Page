"use client";

import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { useState, useEffect, useMemo } from "react";
import axios from "axios";
import HeadingText from "./HeadingText";

const CryptoCard = ({ coin, cardWidth }) => (
  <div className="flex-shrink-0" style={{ width: `${cardWidth}px` }}>
    <div className="bg-white rounded-lg p-4 border">
      <div className="flex items-center gap-2 mb-2">
        <div className="flex items-center gap-2">
          <span className="text-lg">{coin.icon}</span>
          <span className="font-medium">{coin.symbol}</span>
        </div>
        <span
          className={`text-sm px-2 py-1 rounded-md ${
            coin.changeType === "up"
              ? "text-green-500 bg-green-300/20"
              : "text-red-500 bg-red-300/20"
          }`}>
          {coin.change}
        </span>
      </div>
      <div className="text-lg font-semibold">
        $
        {typeof coin.price === "number"
          ? coin.price < 1
            ? coin.price.toFixed(6)
            : coin.price.toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })
          : coin.price}
      </div>
      <div className="mt-2">
        <img
          src={coin.sparkline}
          className="w-full object-contain h-16"
          alt={coin.id}
        />
      </div>
    </div>
  </div>
);

const CryptoSlider = ({
  title,
  data,
  activeSlide,
  onNext,
  onPrev,
  isMobile,
  windowWidth,
}) => {
  const { cardWidth, maxSlides, translateValue } = useMemo(() => {
    let cardsPerView;
    if (isMobile) {
      cardsPerView = 1;
    } else if (windowWidth < 1280) {
      // md breakpoint
      cardsPerView = 3;
    } else {
      cardsPerView = 4;
    }

    const cardWidth =
      (windowWidth - (cardsPerView + 1) * 16 - 48) / cardsPerView;
    const gap = 16;
    const maxSlides = data.length - cardsPerView;
    const translateValue = -(activeSlide * (cardWidth + gap));

    return { cardWidth, maxSlides, translateValue };
  }, [isMobile, windowWidth, activeSlide, data.length]);

  return (
    <div className="mb-8">
      <HeadingText className="mb-4">{title}</HeadingText>
      <div className="relative">
        <div className="overflow-hidden">
          <div
            className="flex gap-4 transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(${translateValue}px)` }}>
            {data.map((coin) => (
              <CryptoCard key={coin.id} coin={coin} cardWidth={cardWidth} />
            ))}
          </div>
        </div>

        <button
          onClick={() => onPrev(maxSlides)}
          className="absolute -left-4 top-1/2 -translate-y-1/2 bg-white shadow-lg border rounded-full p-2 hover:bg-gray-100">
          <ChevronLeftIcon className="w-6 h-6" />
        </button>
        <button
          onClick={() => onNext(maxSlides)}
          className="absolute -right-4 top-1/2 -translate-y-1/2 bg-white shadow-lg border rounded-full p-2 hover:bg-gray-100">
          <ChevronRightIcon className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default function YouMayAlsoLike() {
  const [likeSlideIndex, setLikeSlideIndex] = useState(0);
  const [trendingSlideIndex, setTrendingSlideIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);
  const [cryptoData, setCryptoData] = useState([]);
  const [trendingCoins, setTrendingCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      setWindowWidth(window.innerWidth);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_ROOT_URL}/search/trending`,
          {
            headers: {
              "x-cg-demo-api-key": process.env.NEXT_PUBLIC_COIN_GECKO_API_KEY,
            },
          }
        );

        const transformedData = response.data.coins.map((coin) => ({
          id: coin.item.id,
          icon: (
            <img
              src={coin.item.thumb}
              alt={coin.item.symbol}
              className="size-8 rounded-full"
            />
          ),
          symbol: coin.item.symbol.toUpperCase(),
          name: coin.item.name,
          price: coin.item.data.price,
          sparkline: coin.item.data.sparkline,
          change: `${
            coin.item.data.price_change_percentage_24h.usd > 0 ? "+" : ""
          }${coin.item.data.price_change_percentage_24h.usd.toFixed(2)}%`,
          changeType:
            coin.item.data.price_change_percentage_24h.usd > 0 ? "up" : "down",
        }));

        setCryptoData(transformedData.slice(0, 8));
        setTrendingCoins(transformedData.slice(8));
        setIsLoading(false);
      } catch (error) {
        console.log("Error fetching data:", error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleNext = (setState) => (maxSlides) => {
    setState((prev) => (prev >= maxSlides ? 0 : prev + 1));
  };

  const handlePrev = (setState) => (maxSlides) => {
    setState((prev) => (prev <= 0 ? maxSlides : prev - 1));
  };

  if (isLoading) {
    return (
      <div className="bg-white p-4 md:py-10 mt-10">
        <div className="max-w-[1800px] mx-auto">Loading...</div>
      </div>
    );
  }

  return (
    <div className="bg-white p-4 md:py-10 mt-10">
      <div className="max-w-[1800px] mx-auto">
        <CryptoSlider
          title="You May Also Like"
          data={cryptoData}
          activeSlide={likeSlideIndex}
          onNext={handleNext(setLikeSlideIndex)}
          onPrev={handlePrev(setLikeSlideIndex)}
          isMobile={isMobile}
          windowWidth={windowWidth}
        />
        <CryptoSlider
          title="Trending Coins"
          data={trendingCoins}
          activeSlide={trendingSlideIndex}
          onNext={handleNext(setTrendingSlideIndex)}
          onPrev={handlePrev(setTrendingSlideIndex)}
          isMobile={isMobile}
          windowWidth={windowWidth}
        />
      </div>
    </div>
  );
}
