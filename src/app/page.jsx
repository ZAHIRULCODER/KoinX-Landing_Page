import About from "@/components/About";
import { Breadcrumb } from "@/components/Breadcrumb";
import { ChartContainer } from "@/components/ChartContainer";
import { GetStartedCard } from "@/components/GetStartedCard";
import { Navbar } from "@/components/Navbar";
import Performance from "@/components/Performance";
import Sentiment from "@/components/Sentiment";
import Team from "@/components/Team";
import Tokenomics from "@/components/Tokenomics";
import TrendingCoinsCard from "@/components/TrendingCoinsCard";
import YouMayAlsoLike from "@/components/YouMayAlsoLike";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F3F6F9] flex flex-col">
      <Navbar />
      <main className="px-4 py-4 max-w-[1800px] mx-auto flex-grow w-full">
        <Breadcrumb />

        {/* Main content grid */}
        <div className="xl:grid grid-cols-4 gap-4">
          {/* Left side - Chart area (spans 3 columns) */}
          <div className="col-span-3">
            <Suspense
              fallback={
                <div className="bg-white rounded-lg border border-gray-100 p-6 h-[600px] animate-pulse">
                  <div className="h-full flex items-center justify-center text-gray-400">
                    Loading...
                  </div>
                </div>
              }>
              <ChartContainer />
            </Suspense>
            <div className="space-y-10">
              <Performance />
              <Sentiment />
              <About />
              <Tokenomics />
              <Team />
              <span className="block md:hidden">
                <YouMayAlsoLike />
              </span>
            </div>
          </div>

          {/* Right side - Stacked cards (1 column) */}
          <div className="space-y-4 xl:mt-0 mt-4">
            <GetStartedCard />
            <TrendingCoinsCard />
          </div>
        </div>
      </main>
      <span className="md:block hidden">
        <YouMayAlsoLike />
      </span>
    </div>
  );
}
