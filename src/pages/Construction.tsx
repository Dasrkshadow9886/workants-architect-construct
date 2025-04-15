
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Construction = () => {
  return (
    <div className="min-h-screen bg-workants-black text-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-workants-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Construction Services</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Building excellence with quality craftsmanship and attention to detail
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="bg-gray-800 rounded-lg p-8 order-1 md:order-1">
              <div className="h-80 bg-gray-700 rounded mb-6"></div>
              <h3 className="text-xl font-semibold mb-2">Construction Excellence</h3>
              <p className="text-gray-300">
                We take pride in our craftsmanship and attention to detail, ensuring every project 
                is built to the highest standards of quality and durability.
              </p>
            </div>
            <div className="order-2 md:order-2">
              <h2 className="text-3xl font-bold mb-6 text-orange-400">Our Construction Philosophy</h2>
              <p className="text-gray-300 mb-4">
                At WorkAnts Consulting, our construction services are built on a foundation of quality, efficiency, 
                and reliability. We understand that bringing architectural designs to life requires skilled craftsmanship, 
                proper planning, and meticulous execution.
              </p>
              <p className="text-gray-300 mb-4">
                Our construction team works in close collaboration with our architects to ensure seamless 
                implementation of design intent, while maintaining focus on timelines, budgets, and quality control.
                We employ the latest construction technologies and methodologies to deliver projects that meet and 
                exceed client expectations.
              </p>
              <p className="text-gray-300">
                From residential builds to commercial developments, our construction team has the expertise 
                and resources to handle projects of all sizes and complexities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Construction Services */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold mb-4">Our Construction Services</h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Comprehensive construction solutions delivered with excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-8 rounded-lg transition-transform hover:scale-105">
              <div className="bg-orange-500 h-16 w-16 rounded-full flex items-center justify-center mb-4">
                <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Residential Construction</h3>
              <p className="text-gray-300 mb-4">
                Building custom homes and residential projects with precision and care.
              </p>
              <ul className="text-gray-300 space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-orange-400 mr-2">•</span>
                  <span>New home construction</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-400 mr-2">•</span>
                  <span>Home additions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-400 mr-2">•</span>
                  <span>Luxury and custom homes</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-800 p-8 rounded-lg transition-transform hover:scale-105">
              <div className="bg-blue-500 h-16 w-16 rounded-full flex items-center justify-center mb-4">
                <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Commercial Construction</h3>
              <p className="text-gray-300 mb-4">
                Delivering commercial projects on time and within budget, from small retail to large developments.
              </p>
              <ul className="text-gray-300 space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span>Office buildings</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span>Retail centers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span>Healthcare facilities</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-800 p-8 rounded-lg transition-transform hover:scale-105">
              <div className="bg-orange-500 h-16 w-16 rounded-full flex items-center justify-center mb-4">
                <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Renovations & Remodeling</h3>
              <p className="text-gray-300 mb-4">
                Transforming existing spaces with expert renovations and remodeling services.
              </p>
              <ul className="text-gray-300 space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-orange-400 mr-2">•</span>
                  <span>Kitchen and bathroom remodels</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-400 mr-2">•</span>
                  <span>Whole house renovations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-400 mr-2">•</span>
                  <span>Commercial space renovations</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Construction Process */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold mb-4">Our Construction Process</h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              A systematic approach to ensure successful project delivery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-gray-800 p-6 rounded-lg relative">
              <div className="absolute -top-4 -left-4 bg-orange-500 h-10 w-10 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">1</span>
              </div>
              <h3 className="text-lg font-bold mb-3 mt-3 text-white">Pre-Construction</h3>
              <p className="text-gray-300">
                Detailed planning, estimating, scheduling, and preparation before breaking ground.
              </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg relative">
              <div className="absolute -top-4 -left-4 bg-blue-500 h-10 w-10 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">2</span>
              </div>
              <h3 className="text-lg font-bold mb-3 mt-3 text-white">Site Development</h3>
              <p className="text-gray-300">
                Site preparation, excavation, foundation work, and initial structural elements.
              </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg relative">
              <div className="absolute -top-4 -left-4 bg-orange-500 h-10 w-10 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">3</span>
              </div>
              <h3 className="text-lg font-bold mb-3 mt-3 text-white">Construction</h3>
              <p className="text-gray-300">
                Building the structure, including framing, roofing, electrical, plumbing, and finishes.
              </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg relative">
              <div className="absolute -top-4 -left-4 bg-blue-500 h-10 w-10 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">4</span>
              </div>
              <h3 className="text-lg font-bold mb-3 mt-3 text-white">Project Completion</h3>
              <p className="text-gray-300">
                Final inspections, quality control, punch list items, and project handover.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-orange-400">Why Choose WorkAnts Construction</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <div>
                    <p className="text-white font-semibold">Quality Craftsmanship</p>
                    <p className="text-gray-300">
                      Our skilled team delivers superior construction quality in every detail.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <div>
                    <p className="text-white font-semibold">Transparent Communication</p>
                    <p className="text-gray-300">
                      Regular updates and clear communication throughout your project.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <div>
                    <p className="text-white font-semibold">On-Time Delivery</p>
                    <p className="text-gray-300">
                      We adhere to project timelines and respect deadlines.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <div>
                    <p className="text-white font-semibold">Cost-Effective Solutions</p>
                    <p className="text-gray-300">
                      Value engineering and budget-conscious approaches without compromising quality.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <div>
                    <p className="text-white font-semibold">Full-Service Capability</p>
                    <p className="text-gray-300">
                      From architecture to construction, we provide end-to-end solutions.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-800 rounded-lg h-48"></div>
              <div className="bg-gray-800 rounded-lg h-48"></div>
              <div className="bg-gray-800 rounded-lg h-48"></div>
              <div className="bg-gray-800 rounded-lg h-48"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Build Your Project?</h2>
          <p className="text-xl text-blue-200 mb-8">
            Contact our construction team to discuss your building needs
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

export default Construction;
