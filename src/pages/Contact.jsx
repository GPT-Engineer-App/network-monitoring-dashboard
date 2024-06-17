import { FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold underline mb-4">
        Contact Us <FaEnvelope />
      </h1>
      <p className="text-lg">
        For any inquiries, please contact us at support@networkdashboard.com.
      </p>
    </div>
  );
};

export default Contact;