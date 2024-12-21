export default function HeroSection() {
  return (
    <section
      className="relative h-screen transition-transform duration-700 ease-in-out bg-center bg-cover hover:scale-105"
      style={{
        backgroundImage: "url('/images/hero-background.jpeg')",
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black/90"></div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white animate-fade-in">
        <h1 className="mb-6 text-6xl font-extrabold tracking-tight text-white transition-transform duration-500 drop-shadow-lg hover:scale-110">
          Alpha Beta Professionals
        </h1>
        <p className="mb-8 text-lg font-medium text-gray-200 transition-all duration-500 drop-shadow-md hover:scale-105">
          Empowering Businesses with Innovative IT Solutions
        </p>
        <button className="px-8 py-3 text-lg font-semibold transition duration-300 bg-blue-600 rounded-full hover:bg-blue-800 hover:shadow-xl hover:-translate-y-1">
          Get Started
        </button>
      </div>

      {/* Subtle Floating Animation */}
      <div className="absolute inset-0 flex items-end justify-center pb-10 animate-float">
        <img
          src="/images/hero-floating-icon.png"
          alt="Floating Icon"
          className="w-24 h-24 transition-opacity duration-300 opacity-80 hover:opacity-100"
        />
      </div>

      {/* Animated Background */}
      <style jsx>{`
        @keyframes fade-in {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-fade-in {
          animation: fade-in 1.5s ease-in-out;
        }
        .animate-float {
          animation: float 3s infinite ease-in-out;
        }
      `}</style>
    </section>
  );
}
