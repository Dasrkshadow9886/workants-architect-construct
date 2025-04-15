
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    alert("Thanks for your message! We'll get back to you soon.");
  };

  return (
    <div className="min-h-screen bg-workants-black text-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-workants-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get in touch with our team to discuss your architecture and construction needs
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information and Form */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-blue-400">Get In Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-orange-500 mr-4 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Email Us</h3>
                    <p className="text-gray-300">Info@workants.co.za</p>
                    <p className="text-gray-300">Daniel@workants.co.za</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-orange-500 mr-4 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Call Us</h3>
                    <p className="text-gray-300">+27 73 246 1964</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-orange-500 mr-4 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
                    <p className="text-gray-300">South Africa</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h3 className="text-xl font-semibold mb-4">Office Hours</h3>
                <div className="space-y-2 text-gray-300">
                  <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
                  <p>Saturday: 9:00 AM - 1:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-gray-800 p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              
              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Your Name"
                      className="bg-gray-700 border-gray-600 text-white"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Your Email"
                      className="bg-gray-700 border-gray-600 text-white"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-gray-300 mb-2">Phone</label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="Your Phone Number"
                      className="bg-gray-700 border-gray-600 text-white"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-gray-300 mb-2">Subject</label>
                    <Input
                      id="subject"
                      type="text"
                      placeholder="Subject"
                      className="bg-gray-700 border-gray-600 text-white"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                    <Textarea
                      id="message"
                      placeholder="Your Message"
                      className="bg-gray-700 border-gray-600 text-white h-32"
                      required
                    />
                  </div>
                  
                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    Send Message
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Find answers to common questions about our services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">What areas do you serve?</h3>
              <p className="text-gray-300">
                We provide architecture and construction services throughout South Africa, with a focus on major cities and surrounding areas.
              </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">How long does a typical project take?</h3>
              <p className="text-gray-300">
                Project timelines vary depending on scope and complexity. A typical residential project might take 6-12 months from design to completion, while commercial projects may take longer.
              </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Do you offer free consultations?</h3>
              <p className="text-gray-300">
                We offer initial consultations to discuss your project needs and determine how we can best assist you. Contact us to schedule your consultation.
              </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Can you help with permit applications?</h3>
              <p className="text-gray-300">
                Yes, we handle all necessary permit applications and regulatory approvals as part of our comprehensive service.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
