"use client";

import { InfoIcon } from "lucide-react";
import React, { useState } from "react";
import HeadingText from "./HeadingText";

export default function Performance() {
  const [activeTab, setActiveTab] = useState("Overview");

  const tabs = [
    { name: "Overview" },
    { name: "Fundamentals" },
    { name: "News Insights" },
    { name: "Sentiments" },
    { name: "Team" },
    { name: "Technicals" },
    { name: "Tokenomics" },
  ];

  const renderPerformanceBar = (low, current, high) => {
    const range = high - low;
    const position = ((current - low) / range) * 100;

    return (
      <div className="relative h-2 bg-gray-200 rounded-full mt-2">
        <div
          className="absolute h-full rounded-full bg-gradient-to-r from-red-500 via-yellow-500 to-green-500"
          style={{ width: "100%" }}
        />
        <div
          className="absolute w-2 h-4 bg-black -top-1 rounded-full transform -translate-x-1/2"
          style={{ left: `${position}%` }}
        />
      </div>
    );
  };

  const renderDataRow = (
    label,
    value,
    subtitle = "",
    highValue = "",
    lowValue = ""
  ) => (
    <div className="flex justify-between items-center h-14 border-b border-black/40 border-gray-100">
      <span className="text-gray-600">{label}</span>
      <div className="text-right">
        <div className="font-medium space-x-2">
          <span>{value}</span>
          {highValue && <span className="text-green-500"> {highValue}</span>}
          {lowValue && <span className="text-red-500"> {lowValue}</span>}
        </div>
        {subtitle && <div className="text-sm text-gray-500">{subtitle}</div>}
      </div>
    </div>
  );

  return (
    <div className="w-full pt-10">
      <div className="space-y-6">
        {/* Navigation */}
        <div className="overflow-x-auto">
          <div className="flex space-x-6 pb-2 min-w-max">
            {tabs.map((tab) => (
              <button
                key={tab.name}
                onClick={() => setActiveTab(tab.name)}
                className={`pb-2 font-medium border-b w-full whitespace-nowrap ${
                  activeTab === tab.name
                    ? "text-blue-600 border-b-2  border-blue-600"
                    : "text-gray-600"
                }`}>
                {tab.name}
              </button>
            ))}
          </div>
        </div>

        {/* Performance Section */}
        <div className="bg-white rounded-lg p-3 md:p-6">
          <HeadingText className="mb-4">Performance</HeadingText>

          {/* Today's Range */}
          <div className="mb-6">
            <div className="flex justify-between text-sm text-gray-600 mb-1">
              <span>Today's Low</span>
              <span>Today's High</span>
            </div>
            <div className="flex justify-between text-sm font-medium">
              <span>46,930.22</span>
              <span>49,343.83</span>
            </div>
            {renderPerformanceBar(46930.22, 48637.83, 49343.83)}
          </div>

          {/* 52W Range */}
          <div className="mb-6">
            <div className="flex justify-between text-sm text-gray-600 mb-1">
              <span>52W Low</span>
              <span>52W High</span>
            </div>
            <div className="flex justify-between text-sm font-medium">
              <span>16,930.22</span>
              <span>49,743.83</span>
            </div>
            {renderPerformanceBar(16930.22, 48637.83, 49743.83)}
          </div>

          {/* Fundamentals Section */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <HeadingText>Fundamentals</HeadingText>
              <InfoIcon className="w-5 h-5 text-gray-400" />
            </div>

            <div className="grid md:grid-cols-2 md:gap-10 xl:gap-20">
              <div className="space-y-5">
                {renderDataRow("Bitcoin Price", "$16,815.46")}
                {renderDataRow("24h Low / 24h High", "$16,382.07 / $16,874.12")}
                {renderDataRow("7d Low / 7d High", "$16,382.07 / $16,874.12")}
                {renderDataRow("Trading Volume", "$23,249,202,782")}
                {renderDataRow("Market Cap Rank", "#1")}
              </div>

              <div className="space-y-5">
                {renderDataRow("Market Cap", "$323,507,290,047")}
                {renderDataRow("Market Cap Dominance", "38.343%")}
                {renderDataRow("Volume / Market Cap", "0.0718")}
                {renderDataRow(
                  "All-Time High",
                  "$69,044.77",
                  "Nov 10, 2021 (about 1 year)",
                  "", // high value
                  "-75.6%" // low value
                )}
                {renderDataRow(
                  "All-Time Low",
                  "$67.81 ",
                  "Jul 06, 2013 (over 9 years)",
                  "24729.1%" // high value
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
