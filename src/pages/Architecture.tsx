import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { addDemoBlueprint } from "@/utils/seedData";

const Architecture = () => {
  useEffect(() => {
    // Add demo blueprint when the page loads
    addDemoBlueprint();
  }, []);

  // Sample blueprint data
  const blueprints = [
    {
      id: 1,
      title: "Modern Residential Design",
      description: "Contemporary home design with open floor plan and energy efficient features.",
      price: "R5,500",
      imageUrl: ""
    },
    {
      id: 2,
      title: "Commercial Office Space",
      description: "Flexible office layout designed for productivity and collaboration.",
      price: "R7,200",
      imageUrl: ""
    },
    {
      id: 3,
      title: "Sustainable Housing Complex",
      description: "Eco-friendly multi-unit residential design with shared community spaces.",
      price: "R8,900",
      imageUrl: ""
    }
  ];

  return (
    <div className="min-h-screen bg-workants-black text-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-workants-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Architecture Services</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Innovative designs that transform vision into reality
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-blue-400">Our Architectural Approach</h2>
              <p className="text-gray-300 mb-4">
                At WorkAnts Consulting, our architectural services blend creativity with functionality to create 
                spaces that are both beautiful and practical. We believe that great architecture should reflect 
                the unique needs and vision of each client while considering environmental impact and sustainability.
              </p>
              <p className="text-gray-300 mb-4">
                Our team of experienced architects works closely with clients throughout the design process, 
                from initial concept development to detailed construction documents. We utilize the latest 
                technologies in 3D modeling and visualization to help clients fully understand and visualize 
                their projects before construction begins.
              </p>
              <p className="text-gray-300">
                Whether you're planning a new home, commercial building, or renovation project, our architecture 
                team is committed to delivering exceptional designs that exceed expectations.
              </p>
            </div>
            <div className="bg-gray-800 rounded-lg p-8">
              <div className="h-80 bg-gray-700 rounded mb-6"></div>
              <h3 className="text-xl font-semibold mb-2">Design Philosophy</h3>
              <p className="text-gray-300">
                We create spaces that are functional, sustainable, and aesthetically pleasing, 
                always considering how the built environment affects those who inhabit it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Architecture Services */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold mb-4">Our Architecture Services</h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Comprehensive architectural solutions for all your design needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-8 rounded-lg transition-transform hover:scale-105">
              <div className="bg-blue-500 h-16 w-16 rounded-full flex items-center justify-center mb-4">
                <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Custom Home Design</h3>
              <p className="text-gray-300 mb-4">
                Personalized residential designs tailored to your lifestyle, preferences, and budget.
              </p>
              <ul className="text-gray-300 space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span>Conceptual design development</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span>Floor plan optimization</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span>3D visualization</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-800 p-8 rounded-lg transition-transform hover:scale-105">
              <div className="bg-orange-500 h-16 w-16 rounded-full flex items-center justify-center mb-4">
                <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Commercial Architecture</h3>
              <p className="text-gray-300 mb-4">
                Innovative commercial spaces designed for functionality, efficiency, and brand identity.
              </p>
              <ul className="text-gray-300 space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-orange-400 mr-2">•</span>
                  <span>Office buildings</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-400 mr-2">•</span>
                  <span>Retail spaces</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-400 mr-2">•</span>
                  <span>Mixed-use developments</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-800 p-8 rounded-lg transition-transform hover:scale-105">
              <div className="bg-blue-500 h-16 w-16 rounded-full flex items-center justify-center mb-4">
                <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Architectural Planning</h3>
              <p className="text-gray-300 mb-4">
                Comprehensive planning services from concept through construction documentation.
              </p>
              <ul className="text-gray-300 space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span>Site analysis and planning</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span>Building code compliance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span>Construction documentation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Blueprint Purchase Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold mb-4">Available Blueprints</h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Ready-made architectural blueprints available for purchase. All blueprints are delivered 
              automatically upon successful payment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blueprints.map((blueprint) => (
              <div key={blueprint.id} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
                <div className="h-48 bg-gray-700"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{blueprint.title}</h3>
                  <p className="text-gray-300 mb-4">
                    {blueprint.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold text-blue-400">{blueprint.price}</span>
                    <Link to={`/blueprints/${blueprint.id}`}>
                      <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                        Purchase
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Your Architectural Journey?</h2>
          <p className="text-xl text-blue-200 mb-8">
            Contact our architectural team to discuss your project or book a consultation
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact">
              <Button className="bg-white text-blue-900 hover:bg-gray-200 px-6 py-2 text-lg">
                Contact Us
              </Button>
            </Link>
            <Link to="/book">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 text-lg">
                Book Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Architecture;
