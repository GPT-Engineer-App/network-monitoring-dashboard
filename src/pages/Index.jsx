import { FaNetworkWired, FaCheckCircle, FaTimesCircle, FaExclamationTriangle } from "react-icons/fa";
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

  const devices = [
    { name: "Cisco Router 1", status: "Online", brand: "Cisco", icon: <FaCheckCircle className="text-green-500" /> },
    { name: "Juniper Switch 1", status: "Online", brand: "Juniper", icon: <FaCheckCircle className="text-green-500" /> },
    { name: "Fortinet Router 2", status: "Offline", brand: "Fortinet", icon: <FaTimesCircle className="text-red-500" /> },
    { name: "Cisco Switch 2", status: "Maintenance", brand: "Cisco", icon: <FaExclamationTriangle className="text-yellow-500" /> },
    { name: "Juniper Router 3", status: "Online", brand: "Juniper", icon: <FaCheckCircle className="text-green-500" /> },
    { name: "Fortinet Switch 3", status: "Online", brand: "Fortinet", icon: <FaCheckCircle className="text-green-500" /> },
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold underline mb-4">
        Network Monitoring Dashboard <FaNetworkWired />
      </h1>
      <div className="bg-white p-4 rounded shadow mb-4">
        <Line data={data} />
      </div>
      <div className="bg-white p-4 rounded shadow grid grid-cols-3 gap-4">
        {devices.map((device, index) => (
          <div key={index} className="bg-gray-100 text-gray-800 p-4 rounded flex items-center">
            <div className="mr-4">
              {device.icon}
            </div>
            <div>
              <h2 className="text-xl font-bold">{device.name}</h2>
              <p>Brand: {device.brand}</p>
              <p>Status: {device.status}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Index;