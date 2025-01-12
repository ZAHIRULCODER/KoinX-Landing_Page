"use client";

import { analystEstimates, keyEvents } from "@/constants";
import { ChevronLeftIcon, ChevronRightIcon, InfoIcon } from "lucide-react";
import { useState, useEffect } from "react";
import HeadingText from "./HeadingText";
import SubHeading from "./SubHeading";

export default function Sentiment() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    if (isMobile) {
      setActiveSlide((prev) => (prev + 1 >= keyEvents.length ? 0 : prev + 1));
    } else {
      setActiveSlide((prev) => (prev + 2 >= keyEvents.length ? 0 : prev + 2));
    }
  };

  const prevSlide = () => {
    if (isMobile) {
      setActiveSlide((prev) =>
        prev - 1 < 0 ? keyEvents.length - 1 : prev - 1
      );
    } else {
      setActiveSlide((prev) =>
        prev - 2 < 0 ? keyEvents.length - 2 : prev - 2
      );
    }
  };

  const getTranslateValue = () => {
    const cardWidth = isMobile ? window.innerWidth - 48 : 400; // 48px accounts for padding
    const gap = 16; // 4 units in Tailwind = 16px
    return -(activeSlide * (cardWidth + gap));
  };

  return (
    <div className="w-full bg-white rounded-lg p-3 md:p-6">
      {/* Header */}
      <HeadingText className="mb-4">Sentiment</HeadingText>

      {/* Key Events Section */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <SubHeading>Key Events</SubHeading>
          <InfoIcon className="w-5 h-5 text-gray-400" />
        </div>

        <div className="relative">
          {/* Carousel Container */}
          <div className="overflow-hidden">
            <div
              className="flex gap-4 transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(${getTranslateValue()}px)` }}>
              {keyEvents.map((event, index) => (
                <div
                  key={index}
                  className="w-[400px] md:w-[400px] flex-shrink-0"
                  style={{
                    width: isMobile ? `${window.innerWidth - 48}px` : "400px",
                  }}>
                  <div
                    className={`p-4 rounded-lg ${
                      event.icon === "news" ? "bg-blue-50" : "bg-emerald-50"
                    }`}>
                    <div className="flex gap-3 items-start">
                      <div
                        className={`p-2 rounded-full ${
                          event.icon === "news"
                            ? "bg-blue-500"
                            : "bg-emerald-500"
                        }`}>
                        {event.icon === "news" ? (
                          <svg
                            className="w-5 h-5 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2.5 2.5 0 00-2.5-2.5H15"
                            />
                          </svg>
                        ) : (
                          <svg
                            className="w-5 h-5 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                            />
                          </svg>
                        )}
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">{event.title}</h4>
                        <p className="text-gray-600 text-sm">
                          {event.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white shadow-lg border rounded-full p-2 hover:bg-gray-100">
            <ChevronLeftIcon className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white shadow-lg border rounded-full p-2 hover:bg-gray-100">
            <ChevronRightIcon className="w-6 h-6" />
          </button>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-2 mt-4">
            {Array.from({
              length: isMobile
                ? keyEvents.length
                : Math.ceil(keyEvents.length / 2),
            }).map((_, idx) => (
              <button
                key={idx}
                className={`w-2 h-2 rounded-full transition-colors ${
                  (isMobile ? activeSlide : activeSlide / 2) === idx
                    ? "bg-gray-800"
                    : "bg-gray-300"
                }`}
                onClick={() => setActiveSlide(isMobile ? idx : idx * 2)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Analyst Estimates Section */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <HeadingText>Analyst Estimates</HeadingText>
          <InfoIcon className="w-5 h-5 text-gray-400" />
        </div>

        <div className="flex flex-row items-center gap-6 md:gap-8">
          <div className="w-24 h-24 rounded-full bg-emerald-50 flex items-center justify-center">
            <span className="text-2xl font-bold text-emerald-500">
              76<span className="text-base">%</span>
            </span>
          </div>

          <div className="flex-1 space-y-2 w-full">
            {analystEstimates.map((estimate) => (
              <div key={estimate.type} className="flex items-center gap-4">
                <span className="w-10 text-sm">{estimate.type}</span>
                <div
                  className={`h-2.5 rounded-full ${estimate.color || "bg-red-500"}`}
                  style={{ width: `${estimate.percentage}%` }}
                />
                <span className="w-10 text-sm">{estimate.percentage}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
