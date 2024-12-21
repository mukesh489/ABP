export default function Updates() {
  return (
    <section className="py-12 bg-yellow-50">
      <div className="container px-4 mx-auto">
        {/* Section Heading */}
        <h1 className="mb-12 text-5xl font-bold text-left text-gray-900">
          Updates
        </h1>

        {/* Main Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Image Section */}
          <div className="relative overflow-hidden group">
            <img
              src="https://static.wixstatic.com/media/b95da476d06b41b79bca03313523eaa3.jpg/v1/fill/w_808,h_484,al_br,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/b95da476d06b41b79bca03313523eaa3.jpg"
              alt="Market Updates"
              className="object-cover w-full h-full transition duration-300 transform rounded-lg shadow-md group-hover:scale-105"
            />
            <div className="absolute inset-0 transition-opacity bg-black opacity-0 group-hover:opacity-10"></div>
          </div>

          {/* Content Section */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {/* News */}
            <div className="p-4 transition-transform duration-300 transform bg-white rounded-lg shadow-md group hover:scale-105">
              <h2 className="mb-2 text-2xl font-semibold text-gray-800">News</h2>
              <p className="mb-4 text-gray-600">Latest Industry Insights</p>
              <hr className="border-t border-gray-400" />
            </div>

            {/* Webinars */}
            <div className="p-4 transition-transform duration-300 transform bg-white rounded-lg shadow-md group hover:scale-105">
              <h2 className="mb-2 text-2xl font-semibold text-gray-800">
                Webinars
              </h2>
              <p className="mb-4 text-gray-600">Interactive Learning Sessions</p>
              <hr className="border-t border-gray-400" />
            </div>

            {/* Events */}
            <div className="p-4 transition-transform duration-300 transform bg-white rounded-lg shadow-md group hover:scale-105">
              <h2 className="mb-2 text-2xl font-semibold text-gray-800">
                Events
              </h2>
              <p className="mb-4 text-gray-600">Upcoming Tech Conferences</p>
              <hr className="border-t border-gray-400" />
            </div>

            {/* Workshops */}
            <div className="p-4 transition-transform duration-300 transform bg-white rounded-lg shadow-md group hover:scale-105">
              <h2 className="mb-2 text-2xl font-semibold text-gray-800">
                Workshops
              </h2>
              <p className="mb-4 text-gray-600">
                Hands-On Training Opportunities
              </p>
              <hr className="border-t border-gray-400" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
