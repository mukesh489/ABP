export default function Footer() {
    return (
      <footer className="py-12 border-t border-gray-300 bg-yellow-50">
        <div className="container px-6 mx-auto lg:px-16">
          {/* Footer Content */}
          <div className="flex flex-col items-center justify-between space-y-8 md:flex-row md:space-y-0">
            {/* Logo and Description */}
            <div className="text-center md:text-left">
              <h2 className="mb-3 text-2xl font-bold text-gray-800">Gigalancer</h2>
              <p className="leading-relaxed text-gray-600">
                Your trusted platform for professional services and IT solutions.
              </p>
            </div>
  
            {/* Contact Info */}
            <div className="text-center">
              <p className="text-gray-600">
                <strong>Phone:</strong> +91 72178 60477
              </p>
              <p className="text-gray-600">
                <strong>Email:</strong> contact.abprofessionals@gmail.com
              </p>
            </div>
  
            {/* Address */}
            <div className="text-center md:text-right">
              <p className="text-gray-600">
                111 Mudgal Street,
              </p>
              <p className="text-gray-600">
                2nd Floor, India.
              </p>
            </div>
          </div>
  
          {/* Divider */}
          <div className="my-8 border-t border-gray-300"></div>
  
          {/* Social Media Links */}
          <div className="flex justify-center space-x-6">
            <a href="#" aria-label="Facebook" className="text-gray-600 hover:text-yellow-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-6 h-6"
              >
                <path d="M22.675 0h-21.35c-..."/>
              </svg>
            </a>
            <a href="#" aria-label="Twitter" className="text-gray-600 hover:text-yellow-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-6 h-6"
              >
                <path d="M22.23 5.924..."/>
              </svg>
            </a>
            <a href="#" aria-label="LinkedIn" className="text-gray-600 hover:text-yellow-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-6 h-6"
              >
                <path d="M19 0h-16c-1.65 0-..."/>
              </svg>
            </a>
          </div>
  
          {/* Footer Bottom */}
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500">
              &copy; {new Date().getFullYear()} Gigalancer. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    );
  }
  