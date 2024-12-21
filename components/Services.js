import { useState } from "react";

export default function Services() {
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state
  const [modalContent, setModalContent] = useState("");

  const services = [
    { id: 1, title: "Website Development", buttonText: "Book Now" },
    { id: 2, title: "DevOps Automation", buttonText: "Book Now" },
    { id: 3, title: "Cloud Training", buttonText: "Book Now" },
    { id: 4, title: "Online Advertising", buttonText: "Book Now" },
    { id: 5, title: "UI/UX Design", buttonText: "Book Now" },
  ];

  const handleBookNow = () => {
    setModalContent(
      "Sorry, this service is not yet available for online bookings. Please contact us for more information."
    );
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className="py-12 bg-yellow-50">
      <div className="container px-4 mx-auto">
        <h1 className="mb-8 text-5xl font-bold text-center text-gray-900">
          Services
        </h1>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.id}
              className="p-6 transition duration-300 transform bg-white border border-gray-300 rounded-md shadow-md hover:shadow-lg hover:scale-105"
            >
              <h2 className="mb-4 text-xl font-semibold text-gray-800">
                {service.title}
              </h2>
              <hr className="mb-4 border-t border-gray-400" />
              {service.buttonText === "Book Now" ? (
                <button
                  className="px-4 py-2 text-white transition bg-yellow-500 rounded hover:bg-yellow-600"
                  onClick={handleBookNow}
                >
                  {service.buttonText}
                </button>
              ) : (
                <button
                  className="px-4 py-2 text-white transition bg-blue-500 rounded hover:bg-blue-600"
                >
                  {service.buttonText}
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          onClick={closeModal}
        >
          <div
            className="max-w-md p-6 text-center bg-white rounded-md shadow-lg"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
          >
            <h2 className="mb-4 text-xl font-bold text-gray-900">Notice</h2>
            <p className="mb-6 text-gray-700">{modalContent}</p>
            <button
              className="px-4 py-2 font-medium text-white bg-yellow-500 rounded hover:bg-yellow-600"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
