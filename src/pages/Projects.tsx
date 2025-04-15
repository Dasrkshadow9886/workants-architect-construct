
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Projects = () => {
  // Sample projects data
  const projects = [
    {
      id: 1,
      title: "Modern Office Complex",
      category: "Commercial",
      description: "A sleek, modern office building with sustainable features and collaborative spaces.",
      location: "Cape Town",
      year: "2023"
    },
    {
      id: 2,
      title: "Luxury Residential Villa",
      category: "Residential",
      description: "Custom-designed luxury home with premium finishes and ocean views.",
      location: "Durban",
      year: "2022"
    },
    {
      id: 3,
      title: "Mixed-Use Development",
      category: "Commercial",
      description: "Urban development combining retail, office, and residential spaces.",
      location: "Johannesburg",
      year: "2022"
    },
    {
      id: 4,
      title: "Community Center",
      category: "Public",
      description: "Modern community facility with multipurpose rooms and sustainable design elements.",
      location: "Pretoria",
      year: "2021"
    },
    {
      id: 5,
      title: "Eco-Friendly Housing Complex",
      category: "Residential",
      description: "Environmentally conscious multi-unit residential development with shared amenities.",
      location: "Stellenbosch",
      year: "2023"
    },
    {
      id: 6,
      title: "Retail Shopping Center",
      category: "Commercial",
      description: "Contemporary retail center with creative space utilization and customer-focused design.",
      location: "Port Elizabeth",
      year: "2021"
    }
  ];

  return (
    <div className="min-h-screen bg-workants-black text-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-workants-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Projects</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our portfolio of successful architecture and construction projects
            </p>
          </div>
        </div>
      </section>

      {/* Project Filters (could be made functional with state) */}
      <section className="py-8 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              All Projects
            </Button>
            <Button variant="outline" className="border-gray-500 text-white hover:bg-gray-800">
              Residential
            </Button>
            <Button variant="outline" className="border-gray-500 text-white hover:bg-gray-800">
              Commercial
            </Button>
            <Button variant="outline" className="border-gray-500 text-white hover:bg-gray-800">
              Public
            </Button>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
                <div className="h-64 bg-gray-700"></div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                    <span className="text-sm text-blue-400 bg-blue-900/30 px-2 py-1 rounded">
                      {project.category}
                    </span>
                  </div>
                  <p className="text-gray-300 mb-4">
                    {project.description}
                  </p>
                  <div className="flex justify-between text-sm text-gray-400">
                    <span>{project.location}</span>
                    <span>{project.year}</span>
                  </div>
                  <Button className="w-full mt-4 bg-gray-700 hover:bg-gray-600 text-white">
                    View Project Details
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Process */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold mb-4">Our Project Process</h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              From concept to completion, our systematic approach ensures successful project delivery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-gray-800 p-6 rounded-lg relative">
              <div className="absolute -top-4 -left-4 bg-blue-500 h-10 w-10 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">1</span>
              </div>
              <h3 className="text-lg font-bold mb-3 mt-3 text-white">Consultation</h3>
              <p className="text-gray-300">
                Initial meeting to understand your vision, requirements, and project goals.
              </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg relative">
              <div className="absolute -top-4 -left-4 bg-orange-500 h-10 w-10 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">2</span>
              </div>
              <h3 className="text-lg font-bold mb-3 mt-3 text-white">Design & Planning</h3>
              <p className="text-gray-300">
                Architectural design, blueprint creation, and comprehensive project planning.
              </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg relative">
              <div className="absolute -top-4 -left-4 bg-blue-500 h-10 w-10 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">3</span>
              </div>
              <h3 className="text-lg font-bold mb-3 mt-3 text-white">Construction</h3>
              <p className="text-gray-300">
                Expert construction with regular updates and quality control throughout.
              </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg relative">
              <div className="absolute -top-4 -left-4 bg-orange-500 h-10 w-10 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">4</span>
              </div>
              <h3 className="text-lg font-bold mb-3 mt-3 text-white">Completion</h3>
              <p className="text-gray-300">
                Final inspections, walkthrough, and handover of your finished project.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold mb-4">Client Testimonials</h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              What our clients say about their experience working with WorkAnts
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-8 rounded-lg">
              <div className="flex text-yellow-400 mb-4">
                ★★★★★
              </div>
              <p className="text-gray-300 mb-4 italic">
                "WorkAnts delivered our office building on time and within budget. The team's attention to detail
                and quality craftsmanship exceeded our expectations."
              </p>
              <div>
                <p className="text-white font-semibold">John Smith</p>
                <p className="text-gray-400 text-sm">CEO, Tech Solutions</p>
              </div>
            </div>

            <div className="bg-gray-800 p-8 rounded-lg">
              <div className="flex text-yellow-400 mb-4">
                ★★★★★
              </div>
              <p className="text-gray-300 mb-4 italic">
                "The architectural design for our home was creative and perfectly suited to our lifestyle. 
                The construction was managed professionally with excellent communication throughout."
              </p>
              <div>
                <p className="text-white font-semibold">Sarah Johnson</p>
                <p className="text-gray-400 text-sm">Homeowner</p>
              </div>
            </div>

            <div className="bg-gray-800 p-8 rounded-lg">
              <div className="flex text-yellow-400 mb-4">
                ★★★★★
              </div>
              <p className="text-gray-300 mb-4 italic">
                "From concept to completion, the WorkAnts team was professional, creative, and responsive. 
                Our retail space has received numerous compliments from customers and staff alike."
              </p>
              <div>
                <p className="text-white font-semibold">Michael Brown</p>
                <p className="text-gray-400 text-sm">Retail Store Owner</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Your Project?</h2>
          <p className="text-xl text-blue-200 mb-8">
            Contact us today to discuss how we can bring your vision to life
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

export default Projects;
