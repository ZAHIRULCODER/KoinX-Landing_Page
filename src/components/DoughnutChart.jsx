import React from "react";

export default function DoughnutChart({ data, holeColor }) {
  const total = data.reduce((acc, item) => acc + item.value, 0);
  let cumulativePercent = 0;

  function getCoordinatesForPercent(percent) {
    const x = Math.cos(2 * Math.PI * percent);
    const y = Math.sin(2 * Math.PI * percent);
    return [x, y];
  }

  return (
    <svg viewBox="-1 -1 2 2" className="w-40 h-40">
      {data.map((slice, index) => {
        const [startX, startY] = getCoordinatesForPercent(cumulativePercent);

        cumulativePercent += slice.value / total;
        const [endX, endY] = getCoordinatesForPercent(cumulativePercent);

        const largeArcFlag = slice.value / total > 0.5 ? 1 : 0;

        const pathData = [
          `M ${startX} ${startY}`,
          `A 1 1 0 ${largeArcFlag} 1 ${endX} ${endY}`,
          `L 0 0`,
        ].join(" ");

        return <path d={pathData} fill={slice.color} key={index} />;
      })}
      <circle cx="0" cy="0" r="0.65" fill={holeColor} />
    </svg>
  );
}
