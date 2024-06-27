import axios from "axios";
import React, { useEffect, useState } from "react";
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

// const data = [
//   {
//     name: '',
//     uv: 4000,
//     pv: 2400,
//     amt: 2400,
//   },
//   {
//     name: '',
//     uv: 3000,
//     pv: 1398,
//     amt: 2210,
//   },
//   {
//     name: '',
//     uv: 2000,
//     pv: 9800,
//     amt: 2290,
//   },
//   {
//     name: '',
//     uv: 2780,
//     pv: 3908,
//     amt: 2000,
//   },
//   {
//     name: '',
//     uv: 1890,
//     pv: 4800,
//     amt: 2181,
//   },
//   {
//     name: '',
//     uv: 2390,
//     pv: 3800,
//     amt: 2500,
//   },
// ];

function SentimentVisual() {
  const [stockInfo, setStockInfo] = useState({ symbol: "", price: 0 });
  const [sentimentData, setSentimentData] = useState([]);
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
    const fetchGraphData = async () => {
      try {
        const response = await axios.get(`/api/data/your_collection/your_document_id`);
        if (response.data) {
          setData(response.data.your_data_field); // Adjust this based on your data structure
        } else {
          setError("Unable to fetch graph data");
        }
      } catch (err) {
        setError("Error fetching graph data");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchStockData();
    fetchGraphData();

    const intervalId = setInterval(fetchStockData, 300000);

    return () => clearInterval(intervalId);
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <section className="text-gray-600 body-font bg-white dark:bg-gray-800 dark:text-gray-200">
        <div className="container mx-auto px-5 py-24">
          <div className="flex flex-col items-center text-center w-full mb-20">
            <h2 className="text-xs text-blue-500 tracking-widest font-medium title-font mb-1">
              Featured
            </h2>
            <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-gray-900 dark:text-white">
              Stock of the Day
            </h1>
            <div className="text-xl lg:text-2xl">
              <span className="font-semibold text-gray-900 dark:text-white">{stockInfo.symbol}: </span>
              <span className="text-blue-500">${stockInfo.price.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </section>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart
          width={500}
          height={300}
          data={sentimentData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </div>

  );
}

export default SentimentVisual;
