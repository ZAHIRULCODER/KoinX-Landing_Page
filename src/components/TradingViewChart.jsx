"use client";

import { useEffect, useState } from "react";
import { SymbolOverview } from "react-ts-tradingview-widgets";

const timeRanges = [
  { label: "1H", value: "1H" },
  { label: "24H", value: "24H" },
  { label: "7D", value: "7D" },
  { label: "1M", value: "1M" },
  { label: "3M", value: "3M" },
  { label: "6M", value: "6M" },
  { label: "1Y", value: "1Y" },
  { label: "ALL", value: "ALL" },
];

export const TradingViewChart = () => {
  const [mounted, setMounted] = useState(false);
  const [selectedRange, setSelectedRange] = useState("1H");

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="h-[400px] w-full flex items-center justify-center bg-white">
        <div className="animate-pulse text-gray-400">Loading chart...</div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg">
      <div className="md:flex justify-between items-center mb-4">
        <h2 className="text-base font-medium text-gray-900">
          Bitcoin Price Chart (USD)
        </h2>
        <div className="flex space-x-1 max-md:mt-2">
          {timeRanges.map((range) => (
            <button
              key={range.value}
              onClick={() => setSelectedRange(range.value)}
              className={`md:px-3 px-2 py-1 text-xs rounded-full ${
                selectedRange === range.value
                  ? "bg-blue-100 text-blue-600 "
                  : "text-gray-500 hover:bg-gray-100"
              }`}>
              {range.label}
            </button>
          ))}
        </div>
      </div>

      <div className="h-[500px] w-full">
        <SymbolOverview
          chartOnly={true}
          symbols={[["BITCOIN", "BTC"]]}
          width="100%"
          height={400}
          fontSize="14"
          lineWidth={2}
          valuesTracking="1"
          timeHoursFormat="12-hours"
          colorTheme="light"
          gridLineColor="rgba(240, 243, 250, 1)"
          fontColor="#787B86"
          isTransparent={true}
          hideDateRanges={true} // make it false to show default date ranges
          scalePosition="left"
          scaleMode="Normal"
          locale="in"
          autosize
          container_id="tradingview_chart_fixed"
          chartType="area"
          backgroundColor="rgba(255, 255, 255, 1)"
          lineColor="#2962FF"
          topColor="rgba(41, 98, 255, 0.3)"
          bottomColor="rgba(41, 98, 255, 0)"
          range="1Y"
        />
      </div>
    </div>
  );
};
