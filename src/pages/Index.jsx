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
      <div className="bg-white p-4 rounded shadow">
        <Line data={data} />
      </div>
    </div>
  );
};

export default Index;