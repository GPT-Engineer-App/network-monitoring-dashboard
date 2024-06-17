import { FaNetworkWired } from "react-icons/fa";
import { Line } from "react-chartjs-2";
import { useState, useEffect } from "react";
import axios from "axios";

const Index = () => {
  const [data, setData] = useState({ labels: [], datasets: [] });

  useEffect(() => {
    // Fetch data from the network monitoring API
    axios.get("/api/network-data")
      .then(response => {
        const { labels, datasets } = response.data;
        setData({ labels, datasets });
      })
      .catch(error => {
        console.error("Error fetching network data:", error);
      });
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold underline mb-4">
        Network Monitoring Dashboard <FaNetworkWired />
      </h1>
      <div className="bg-white p-4 rounded shadow mb-4">
        <Line data={data} />
      </div>
      <div className="bg-white p-4 rounded shadow grid grid-cols-3 gap-4">
        <div className="bg-blue-500 text-white p-4 rounded">
          <h2 className="text-xl font-bold">Router 1</h2>
          <p>Status: Online</p>
        </div>
        <div className="bg-green-500 text-white p-4 rounded">
          <h2 className="text-xl font-bold">Switch 1</h2>
          <p>Status: Online</p>
        </div>
        <div className="bg-red-500 text-white p-4 rounded">
          <h2 className="text-xl font-bold">Router 2</h2>
          <p>Status: Offline</p>
        </div>
        <div className="bg-yellow-500 text-white p-4 rounded">
          <h2 className="text-xl font-bold">Switch 2</h2>
          <p>Status: Maintenance</p>
        </div>
        <div className="bg-blue-500 text-white p-4 rounded">
          <h2 className="text-xl font-bold">Router 3</h2>
          <p>Status: Online</p>
        </div>
        <div className="bg-green-500 text-white p-4 rounded">
          <h2 className="text-xl font-bold">Switch 3</h2>
          <p>Status: Online</p>
        </div>
      </div>
    </div>
  );
};

export default Index;