import Header from "../components/Header";
import Footer from "../components/Footer";

const services = [
  { title: "Online Advertising", time: "45 min", image: "https://static.wixstatic.com/media/11062b_aef6e025b49643eb9a014efa6a4189fd~mv2.jpg/v1/fill/w_326,h_218,fp_0.50_0.50,lg_1,q_80,enc_auto/11062b_aef6e025b49643eb9a014efa6a4189fd~mv2.jpg" },
  { title: "UI/UX Design", time: "1 hour", image: "https://static.wixstatic.com/media/f9e18f3787f9425e88af6616151ca307.jpg/v1/fill/w_326,h_218,fp_0.50_0.50,lg_1,q_80,enc_auto/f9e18f3787f9425e88af6616151ca307.jpg" },
  { title: "Service 1", time: "30 min", image: "https://static.wixstatic.com/media/67c6662687bf4681b702f3046e8f4ca2.jpg/v1/fill/w_326,h_218,fp_0.50_0.50,lg_1,q_80,enc_auto/67c6662687bf4681b702f3046e8f4ca2.jpg" },
  { title: "Service 2", time: "1 hour", image: "https://static.wixstatic.com/media/11062b_aef6e025b49643eb9a014efa6a4189fd~mv2.jpg/v1/fill/w_326,h_218,fp_0.50_0.50,lg_1,q_80,enc_auto/11062b_aef6e025b49643eb9a014efa6a4189fd~mv2.jpg" },
  { title: "Service 3", time: "45 min", image: "https://static.wixstatic.com/media/f9e18f3787f9425e88af6616151ca307.jpg/v1/fill/w_326,h_218,fp_0.50_0.50,lg_1,q_80,enc_auto/f9e18f3787f9425e88af6616151ca307.jpg" },
];

function BookOnline() {
  return (
    <>
      <Header />
      <main className="py-10 bg-gray-50">
        <div className="container px-6 mx-auto">
          <h1 className="mb-8 text-3xl font-bold text-center text-gray-800">
            Our Services
          </h1>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
            {services.map((service, index) => (
              <div
                key={index}
                className="relative overflow-hidden transition duration-300 bg-white rounded-lg shadow-md group hover:shadow-lg"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="object-cover w-full h-48 transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 bg-black opacity-0 bg-opacity-30 group-hover:opacity-100">
                  <h2 className="text-lg font-bold text-white">{service.title}</h2>
                </div>
                <div className="p-4">
                  <p className="font-medium text-gray-700">{service.title}</p>
                  <p className="text-sm text-gray-500">{service.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default BookOnline;
