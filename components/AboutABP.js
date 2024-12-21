export default function AboutABP() {
    return (
      <section className="py-16 bg-yellow-50">
        <div className="container px-6 mx-auto lg:px-16">
          {/* Section Heading */}
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-extrabold tracking-wide text-gray-800 transition-all duration-300 ease-in-out hover:text-yellow-500">
              About ABP
            </h2>
            <p className="max-w-2xl mx-auto leading-relaxed text-gray-600 transition-all duration-300 ease-in-out hover:text-gray-800">
              Empowering businesses with cutting-edge IT solutions and expertise.
            </p>
          </div>
  
          {/* Content Grid */}
          <div className="grid items-center grid-cols-1 gap-10 md:grid-cols-2">
            {/* Text Section */}
            <div>
              <h3 className="mb-6 text-2xl font-semibold text-gray-700 transition-all duration-300 ease-in-out hover:text-yellow-500">
                Our Vision & Mission
              </h3>
              <p className="mb-6 leading-relaxed text-gray-600 transition-all duration-300 ease-in-out hover:text-gray-800">
                Alpha Beta Professionals is your go-to partner for cutting-edge IT services and solutions. We specialize in AWS, Azure, GCP, CICD Pipelines, Cloud and DevOps Trainings, web development, UI/UX design, scripting, automation, and much more.
              </p>
              <p className="mb-6 leading-relaxed text-gray-600 transition-all duration-300 ease-in-out hover:text-gray-800">
                Our mission is to collaborate closely with our clients, ensuring project success by delivering high-quality work within budget and on time. Join us in shaping the digital future!
              </p>
              <a
                href="#"
                className="inline-block px-6 py-3 text-lg font-medium text-white transition-all duration-300 bg-yellow-500 rounded shadow-md hover:bg-yellow-600"
              >
                Discover More
              </a>
            </div>
  
            {/* Image Section */}
            <div className="flex justify-center transition-all duration-300 ease-in-out hover:scale-105">
              <img
                src="https://static.wixstatic.com/media/dd4c3cbbd2c04f1184a0b9b93f8fc606.jpg/v1/crop/x_1335,y_0,w_3346,h_4016/fill/w_450,h_513,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Portrait.jpg"
                alt="Various materials and items"
                className="object-cover h-auto max-w-full transition-all duration-300 ease-in-out rounded-lg shadow-lg md:h-96 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
  