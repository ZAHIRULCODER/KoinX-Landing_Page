"use client";

import React, { useEffect, useState, useRef, memo } from "react";

const timeRanges = [
  { label: "1D", value: "1D" },
  { label: "1M", value: "1M" },
  { label: "3M", value: "3M" },
  { label: "1Y", value: "1Y" },
  { label: "5Y", value: "5Y" },
  { label: "ALL", value: "All" },
];

function TradingViewWidget() {
  const container = useRef();
  const [mounted, setMounted] = useState(false);
  const [selectedRange, setSelectedRange] = useState("3M");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const loadTradingViewWidget = (range) => {
    setLoading(true);

    // Clean up existing widget
    if (container.current) {
      container.current.innerHTML = "";
    }

    // Create a new widget
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = JSON.stringify({
      symbols: [["BINANCE:BTCUSDT|" + range]],
      chartOnly: true,
      width: "100%",
      locale: "en",
      colorTheme: "dark",
      autosize: true,
      showVolume: false,
      showMA: false,
      hideDateRanges: true,
      hideMarketStatus: false,
      hideSymbolLogo: false,
      scalePosition: "left",
      scaleMode: "Normal",
      fontFamily:
        "-apple-system, BlinkMacSystemFont, Trebuchet MS, Roboto, Ubuntu, sans-serif",
      fontSize: "14",
      noTimeScale: false,
      valuesTracking: "2",
      changeMode: "price-and-percent",
      chartType: "area",
      maLineColor: "#2962FF",
      maLineWidth: 1,
      maLength: 9,
      headerFontSize: "medium",
      fontColor: "rgba(0, 0, 0, 1)",
      backgroundColor: "rgba(255, 255, 255, 1)",
      lineWidth: 2,
      lineType: 0,
      dateRanges: ["1d|1", "1m|30", "3m|60", "12m|1D", "60m|1W", "all|1M"],
      dateFormat: "dd-MM-yyyy",
      timeHoursFormat: "12-hours",
    });
    script.onload = () => setLoading(false);
    container.current.appendChild(script);
  };

  useEffect(() => {
    if (mounted) {
      loadTradingViewWidget(selectedRange);
    }
  }, [mounted, selectedRange]);

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
          Bitcoin Price Chart (USDT)
        </h2>
        <div className="flex space-x-1 max-md:mt-2">
          {timeRanges.map((range) => (
            <button
              key={range.value}
              onClick={() => setSelectedRange(range.value)}
              className={`md:px-3 px-2 py-1 text-xs rounded-full ${
                selectedRange === range.value
                  ? "bg-blue-100 text-blue-600"
                  : "text-gray-500 hover:bg-gray-100"
              }`}>
              {range.label}
            </button>
          ))}
        </div>
      </div>

      <div className="h-[400px] w-full relative">
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center bg-white z-10">
            <div className="h-full w-full animate-pulse bg-gray-400"></div>
          </div>
        )}
        <div
          ref={container}
          style={{ width: "100%", height: "100%" }}
          className={`tradingview-widget-container ${
            loading ? "opacity-0" : "opacity-100"
          } transition-opacity duration-300`}></div>
      </div>
    </div>
  );
}

export default memo(TradingViewWidget);
