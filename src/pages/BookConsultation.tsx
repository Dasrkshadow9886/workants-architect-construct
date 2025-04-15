
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { CalendarIcon, Clock, CheckCircle } from "lucide-react";
import { format } from "date-fns";

const BookConsultation = () => {
  const [date, setDate] = useState<Date | undefined>();
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    setFormSubmitted(true);
  };

  const consultationTypes = [
    { value: "architecture", label: "Architecture Consultation" },
    { value: "construction", label: "Construction Consultation" },
    { value: "both", label: "Architecture & Construction Consultation" }
  ];

  const timeSlots = [
    "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", 
    "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM"
  ];

  if (formSubmitted) {
    return (
      <div className="min-h-screen bg-workants-black text-white flex items-center justify-center">
        <div className="max-w-lg mx-auto text-center p-8 bg-gray-800 rounded-lg">
          <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-6" />
          <h1 className="text-3xl font-bold mb-4">Consultation Request Submitted!</h1>
          <p className="text-xl text-gray-300 mb-6">
            Thank you for booking a consultation with WorkAnts. We'll review your request and get back to you shortly to confirm your appointment.
          </p>
          <Button 
            onClick={() => setFormSubmitted(false)} 
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            Book Another Consultation
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-workants-black text-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-workants-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Book a Consultation</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Schedule a consultation with our experts to discuss your project needs
            </p>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-800 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-6">Consultation Request Form</h2>
            
            <form onSubmit={handleSubmit}>
              <div className="space-y-6">
                {/* Personal Information */}
                <div>
                  <h3 className="text-xl font-semibold mb-4">Personal Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-gray-300 mb-2">First Name</label>
                      <Input
                        id="firstName"
                        type="text"
                        placeholder="Enter your first name"
                        className="bg-gray-700 border-gray-600 text-white"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-gray-300 mb-2">Last Name</label>
                      <Input
                        id="lastName"
                        type="text"
                        placeholder="Enter your last name"
                        className="bg-gray-700 border-gray-600 text-white"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Contact Information */}
                <div>
                  <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        className="bg-gray-700 border-gray-600 text-white"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-gray-300 mb-2">Phone</label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="Enter your phone number"
                        className="bg-gray-700 border-gray-600 text-white"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Consultation Type */}
                <div>
                  <label htmlFor="consultationType" className="block text-gray-300 mb-2">Consultation Type</label>
                  <Select>
                    <SelectTrigger className="bg-gray-700 border-gray-600 text-white">
                      <SelectValue placeholder="Select consultation type" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-800 border-gray-700 text-white">
                      {consultationTypes.map((type) => (
                        <SelectItem key={type.value} value={type.value}>
                          {type.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Preferred Date */}
                <div>
                  <label className="block text-gray-300 mb-2">Preferred Date</label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full bg-gray-700 border-gray-600 text-white justify-start text-left font-normal"
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP") : <span>Pick a date</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0 bg-gray-800 border-gray-700">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        initialFocus
                        className="bg-gray-800 text-white"
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                {/* Preferred Time */}
                <div>
                  <label htmlFor="preferredTime" className="block text-gray-300 mb-2">Preferred Time</label>
                  <Select>
                    <SelectTrigger className="bg-gray-700 border-gray-600 text-white">
                      <SelectValue placeholder="Select preferred time" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-800 border-gray-700 text-white">
                      {timeSlots.map((time) => (
                        <SelectItem key={time} value={time}>
                          {time}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Project Details */}
                <div>
                  <label htmlFor="projectDetails" className="block text-gray-300 mb-2">Project Details</label>
                  <Textarea
                    id="projectDetails"
                    placeholder="Please provide details about your project"
                    className="bg-gray-700 border-gray-600 text-white h-32"
                  />
                </div>

                {/* Questions or Comments */}
                <div>
                  <label htmlFor="questions" className="block text-gray-300 mb-2">Questions or Comments</label>
                  <Textarea
                    id="questions"
                    placeholder="Any specific questions or comments for the consultation"
                    className="bg-gray-700 border-gray-600 text-white h-24"
                  />
                </div>

                <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                  Book Consultation
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-16 bg-black">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold mb-4">What to Expect</h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Our consultation process is designed to understand your needs and provide expert guidance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg text-center">
              <div className="bg-blue-500 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Initial Consultation</h3>
              <p className="text-gray-300">
                A 60-minute session with our experts to discuss your vision, requirements, and project goals.
              </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg text-center">
              <div className="bg-orange-500 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Expert Advice</h3>
              <p className="text-gray-300">
                Professional insights on feasibility, design options, construction considerations, and budget guidance.
              </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg text-center">
              <div className="bg-blue-500 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Next Steps</h3>
              <p className="text-gray-300">
                Clear recommendations on how to proceed with your project and a proposed timeline for implementation.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BookConsultation;
