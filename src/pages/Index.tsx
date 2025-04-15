
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-workants-black text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-90"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 flex flex-col items-start">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Building Your <span className="text-blue-500">Vision</span>, Creating Your <span className="text-orange-500">Future</span>
          </h1>
          <p className="text-xl mb-8 max-w-2xl">
            WorkAnts Consulting provides exceptional architecture design and construction services for residential and commercial projects.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/architecture">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 text-lg">
                Architecture Services
              </Button>
            </Link>
            <Link to="/construction">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 text-lg">
                Construction Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Services</h2>
            <p className="text-gray-400 max-w-3xl mx-auto">
              We offer comprehensive architecture and construction services tailored to your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Architecture */}
            <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
              <div className="p-8">
                <h3 className="text-2xl font-bold text-blue-400 mb-4">Architecture</h3>
                <ul className="space-y-3 text-gray-300 mb-6">
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    <span>Custom architectural designs for residential and commercial projects</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    <span>Blueprint creation and planning</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    <span>3D rendering and visualization</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    <span>Sustainable and eco-friendly design options</span>
                  </li>
                </ul>
                <Link to="/architecture">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white w-full">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>

            {/* Construction */}
            <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
              <div className="p-8">
                <h3 className="text-2xl font-bold text-orange-400 mb-4">Construction</h3>
                <ul className="space-y-3 text-gray-300 mb-6">
                  <li className="flex items-start">
                    <span className="text-orange-400 mr-2">•</span>
                    <span>Full-service construction management</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-400 mr-2">•</span>
                    <span>Renovations and remodeling</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-400 mr-2">•</span>
                    <span>Commercial and residential building</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-400 mr-2">•</span>
                    <span>Quality craftsmanship and attention to detail</span>
                  </li>
                </ul>
                <Link to="/construction">
                  <Button className="bg-orange-500 hover:bg-orange-600 text-white w-full">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Projects</h2>
            <p className="text-gray-400 max-w-3xl mx-auto">
              Explore some of our recent work showcasing our expertise and attention to detail
            </p>
          </div>

          {/* Project Grid - placeholder for now */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
                <div className="h-64 bg-gray-700"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">Project {item}</h3>
                  <p className="text-gray-400 mb-4">
                    Modern design project featuring innovative architecture and quality construction.
                  </p>
                  <Link to={`/projects#project-${item}`}>
                    <Button variant="outline" className="text-white border-white hover:bg-gray-700">
                      View Details
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/projects">
              <Button className="bg-gray-700 hover:bg-gray-600 text-white">
                View All Projects
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Start Your Project?</h2>
          <p className="text-xl text-blue-200 mb-8">
            Contact us today to schedule a consultation and discuss your vision
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact">
              <Button className="bg-white text-blue-900 hover:bg-gray-200 px-6 py-3 text-lg">
                Contact Us
              </Button>
            </Link>
            <Link to="/book">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 text-lg">
                Book Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
