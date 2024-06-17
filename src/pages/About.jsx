import { FaInfoCircle } from "react-icons/fa";

const About = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold underline mb-4">
        About Us <FaInfoCircle />
      </h1>
      <p className="text-lg">
        This dashboard is designed to monitor networks based on Cisco, Juniper, and Fortinet devices. It provides real-time data and fault reporting to ensure your network runs smoothly.
      </p>
    </div>
  );
};

export default About;