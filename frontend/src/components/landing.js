import React, { useState, useEffect } from "react";
import axios from "axios";

function Landing() {
  const [stockInfo, setStockInfo] = useState({ symbol: "", price: 0 });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStockData = async () => {
      const API_KEY = "UN3FBBVP92S5ZIQV";
      const STOCK_SYMBOL = "PRU";

      try {
        setLoading(true);
        const response = await axios.get(
          `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${STOCK_SYMBOL}&apikey=${API_KEY}`
        );

        const data = response.data["Global Quote"];
        if (data) {
          setStockInfo({
            symbol: data["01. symbol"],
            price: parseFloat(data["05. price"]),
          });
        } else {
          setError("Unable to fetch stock data");
        }
      } catch (err) {
        setError("Error fetching stock data");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchStockData();
    const intervalId = setInterval(fetchStockData, 60000);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-col text-center w-full mb-20">
          <h2 class="text-xs text-blue-500 tracking-widest font-medium title-font mb-1">
            Beyond the 404 Presents
          </h2>
          <h1 class="sm:text-4xl text-3xl font-medium title-font mb-4 text-gray-900">
            Pruvestments
          </h1>
          <p class="lg:text-xl text-lg lg:w-2/3 mx-auto leading-relaxed">
            AI-Powered Social Sentiment Stock Analysis
          </p>
        </div>
        <div className="flex flex-col items-center mt-10">
          <h2 className="text-2xl font-bold mb-2">Featured Stock</h2>
          <div className="text-xl">
            <span className="font-semibold">{stockInfo.symbol}: </span>
            <span>${stockInfo.price.toFixed(2)}</span>
          </div>
        </div>
        <div class="flex flex-wrap">
          <div class="xl:w-1/3 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
            <h2 class="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
              Diversity, Equity and Inclusion
            </h2>
            <p class="leading-relaxed text-base mb-4">
              Fingerstache flexitarian street art 8-bit waistcoat. Distillery
              hexagon disrupt edison bulbche.
            </p>
            <a class="text-blue-500 inline-flex items-center">
              Learn More
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
          <div class="xl:w-1/3 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
            <h2 class="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
              LGBTQ+ Issues
            </h2>
            <p class="leading-relaxed text-base mb-4">
              Fingerstache flexitarian street art 8-bit waistcoat. Distillery
              hexagon disrupt edison bulbche.
            </p>
            <a class="text-blue-500 inline-flex items-center">
              Learn More
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
          <div class="xl:w-1/3 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
            <h2 class="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
              Carbon Footprint
            </h2>
            <p class="leading-relaxed text-base mb-4">
              Fingerstache flexitarian street art 8-bit waistcoat. Distillery
              hexagon disrupt edison bulbche.
            </p>
            <a class="text-blue-500 inline-flex items-center">
              Learn More
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Landing;
