
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-workants-black text-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-workants-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About WorkAnts Consulting</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Dedicated to excellence in architecture and construction since our founding
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-blue-400">Our Story</h2>
              <p className="text-gray-300 mb-4">
                WorkAnts Consulting was founded with a vision to provide exceptional architecture and construction 
                services that combine creativity, functionality, and sustainability. Our journey began with a small 
                team of passionate professionals committed to transforming spaces and creating environments that inspire.
              </p>
              <p className="text-gray-300 mb-4">
                Over the years, we have grown into a full-service firm that handles every aspect of the building 
                process, from initial concept and design to final construction and project delivery. Our integrated 
                approach ensures seamless execution and attention to detail at every stage.
              </p>
              <p className="text-gray-300">
                Today, WorkAnts Consulting stands as a trusted partner for clients seeking innovative design 
                solutions and quality construction services across South Africa.
              </p>
            </div>
            <div className="bg-gray-800 rounded-lg p-8">
              <div className="h-80 bg-gray-700 rounded mb-6"></div>
              <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
              <p className="text-gray-300">
                To create spaces that enhance lives through thoughtful design and quality construction, while 
                maintaining the highest standards of integrity, professionalism, and client satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              These principles guide everything we do at WorkAnts Consulting
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-8 rounded-lg text-center transition-transform hover:scale-105">
              <div className="bg-blue-500 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Quality</h3>
              <p className="text-gray-300">
                We never compromise on the quality of our work, ensuring every project meets our high standards.
              </p>
            </div>

            <div className="bg-gray-800 p-8 rounded-lg text-center transition-transform hover:scale-105">
              <div className="bg-orange-500 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Innovation</h3>
              <p className="text-gray-300">
                We embrace new ideas and technologies to create cutting-edge designs and construction methodologies.
              </p>
            </div>

            <div className="bg-gray-800 p-8 rounded-lg text-center transition-transform hover:scale-105">
              <div className="bg-blue-500 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Client-Centric</h3>
              <p className="text-gray-300">
                We prioritize our clients' needs and work collaboratively to bring their visions to life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold mb-4">Our Leadership Team</h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Meet the dedicated professionals behind WorkAnts Consulting
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
              <div className="h-64 bg-gray-700"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Daniel</h3>
                <p className="text-blue-400 mb-4">Founder & Lead Architect</p>
                <p className="text-gray-300 mb-4">
                  With over 15 years of experience in architecture and construction, Daniel leads our team with vision and expertise.
                </p>
                <p className="text-gray-400">Contact: Daniel@workants.co.za</p>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
              <div className="h-64 bg-gray-700"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Team Member</h3>
                <p className="text-orange-400 mb-4">Construction Manager</p>
                <p className="text-gray-300 mb-4">
                  Overseeing all construction projects with precision and dedication to quality craftsmanship.
                </p>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
              <div className="h-64 bg-gray-700"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Team Member</h3>
                <p className="text-blue-400 mb-4">Interior Designer</p>
                <p className="text-gray-300 mb-4">
                  Creating beautiful, functional interior spaces that complement our architectural designs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Work With Us?</h2>
          <p className="text-xl text-blue-200 mb-8">
            Contact our team today to discuss your project needs
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

export default About;
