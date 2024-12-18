import React, { useEffect, useState } from "react";
import { Chart } from "react-google-charts";

const LiveTradingChart = () => {
  const [data, setData] = useState([
    ["Time", "Open", "Low", "High", "Close"], // Define proper headers
  ]);

  const generateRandomPrice = (base) => {
    if (typeof base !== "number" || isNaN(base)) base = 100; // Default base value
    const change = Math.random() * 2 - 1; // Random price fluctuation
    return parseFloat((base + change).toFixed(2));
  };

  const createCandle = (prevClose) => {
    const open = generateRandomPrice(prevClose);
    const high = Math.max(open, open + Math.random());
    const low = Math.min(open, open - Math.random());
    const close = generateRandomPrice(open);
    return { open, high, low, close };
  };

  const updateData = () => {
    setData((prevData) => {
      const lastCandle = prevData[prevData.length - 1];
      const prevClose = lastCandle && lastCandle[4] ? lastCandle[4] : 100;

      const newCandle = createCandle(prevClose);
      const time = new Date().toLocaleTimeString();

      // Add new data while maintaining headers
      const updatedData = [
        ...prevData,
        [time, newCandle.open, newCandle.low, newCandle.high, newCandle.close],
      ];

      return updatedData.length > 11 // Keep only the last 10 candles
        ? [prevData[0], ...updatedData.slice(-10)]
        : updatedData;
    });
  };

  useEffect(() => {
    const interval = setInterval(updateData, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ width: "100%", overflowX: "scroll" }}>
      <div style={{ width: "1200px" }}>
        <h2>Live Trading Candlestick Chart</h2>
        <Chart
          width={"1200px"}
          height={"400px"}
          chartType="CandlestickChart"
          loader={<div>Loading Chart...</div>}
          data={data}
          options={{
            legend: "none",
            candlestick: {
              fallingColor: { strokeWidth: 0, fill: "#a52714" },
              risingColor: { strokeWidth: 0, fill: "#0f9d58" },
            },
          }}
        />
      </div>
    </div>
  );
};

export default LiveTradingChart;
