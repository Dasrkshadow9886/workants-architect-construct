
import { useState } from "react";
import { Calendar, Clock, User, Mail, Phone, MessageSquare, Calendar as CalendarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";

const availableTimes = [
  "09:00", "10:00", "11:00", "13:00", "14:00", "15:00", "16:00",
];

const BookConsultation = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    consultationType: "architecture",
    message: "",
  });
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [time, setTime] = useState<string | undefined>(undefined);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const { user } = useAuth();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleConsultationTypeChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      consultationType: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!date || !time) {
      toast({
        variant: "destructive",
        title: "Please select a date and time",
        description: "Both date and time are required to book a consultation",
      });
      return;
    }
    
    try {
      setIsSubmitting(true);
      
      // Format the date and time for storage
      const selectedDateTime = new Date(date);
      const [hours, minutes] = time.split(':');
      selectedDateTime.setHours(parseInt(hours, 10), parseInt(minutes, 10));
      
      // If we had a real backend integration, we would send this data to the API
      // For now, we'll simulate a successful booking
      
      if (user) {
        // For authenticated users, we can store consultation in their profile
        // This is a placeholder for future functionality
        console.log("Booking for authenticated user:", user.id);
      }
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: "Consultation Booked!",
        description: `Your consultation has been scheduled for ${format(selectedDateTime, 'PPP')} at ${time}.`,
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        consultationType: "architecture",
        message: "",
      });
      setDate(undefined);
      setTime(undefined);
      
    } catch (error: any) {
      console.error("Error booking consultation:", error);
      toast({
        variant: "destructive",
        title: "Booking failed",
        description: error.message || "Could not book consultation. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-workants-black text-white pt-8 md:ml-64 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Book a Consultation</h1>
          <p className="text-gray-300">
            Schedule a meeting with our experts to discuss your project needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <div className="bg-gray-800 rounded-lg p-6 space-y-6 border border-gray-700">
              <h2 className="text-xl font-semibold">Consultation Details</h2>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 text-blue-400 mr-3" />
                  <div>
                    <h3 className="font-medium">Duration</h3>
                    <p className="text-gray-400 text-sm">60 minutes</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-blue-400 mr-3" />
                  <div>
                    <h3 className="font-medium">Business Hours</h3>
                    <p className="text-gray-400 text-sm">Mon-Fri: 9am - 5pm</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="h-5 w-5 text-blue-400 mr-3 mt-1" />
                  <div>
                    <h3 className="font-medium">Phone</h3>
                    <p className="text-gray-400 text-sm">+27 12 345 6789</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="h-5 w-5 text-blue-400 mr-3 mt-1" />
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p className="text-gray-400 text-sm">info@workants.co.za</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-2">
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                      Name
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <User className="h-5 w-5 text-gray-500" />
                      </div>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="pl-10 bg-gray-700 border-gray-600 text-white"
                        placeholder="Your full name"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                        Email
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <Mail className="h-5 w-5 text-gray-500" />
                        </div>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="pl-10 bg-gray-700 border-gray-600 text-white"
                          placeholder="Your email"
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">
                        Phone
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <Phone className="h-5 w-5 text-gray-500" />
                        </div>
                        <Input
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="pl-10 bg-gray-700 border-gray-600 text-white"
                          placeholder="Your phone number"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="consultationType" className="block text-sm font-medium text-gray-300 mb-1">
                      Consultation Type
                    </label>
                    <Select
                      value={formData.consultationType}
                      onValueChange={handleConsultationTypeChange}
                    >
                      <SelectTrigger className="bg-gray-700 border-gray-600 text-white">
                        <SelectValue placeholder="Select consultation type" />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-800 border-gray-700 text-white">
                        <SelectItem value="architecture">Architecture</SelectItem>
                        <SelectItem value="construction">Construction</SelectItem>
                        <SelectItem value="interior">Interior Design</SelectItem>
                        <SelectItem value="renovation">Renovation</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">
                        Preferred Date
                      </label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-full justify-start text-left font-normal bg-gray-700 border-gray-600 text-white hover:bg-gray-600",
                              !date && "text-muted-foreground"
                            )}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {date ? format(date, "PPP") : <span>Select date</span>}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0 bg-gray-800 border-gray-700 text-white">
                          <CalendarComponent
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            initialFocus
                            disabled={(date) => 
                              date < new Date(new Date().setHours(0, 0, 0, 0)) || 
                              date.getDay() === 0 || 
                              date.getDay() === 6
                            }
                            className="bg-gray-800 text-white"
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">
                        Preferred Time
                      </label>
                      <Select
                        value={time}
                        onValueChange={setTime}
                      >
                        <SelectTrigger 
                          className="bg-gray-700 border-gray-600 text-white"
                          disabled={!date}
                        >
                          <SelectValue placeholder="Select time" />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-800 border-gray-700 text-white">
                          {availableTimes.map((t) => (
                            <SelectItem key={t} value={t}>
                              {t}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                      Message
                    </label>
                    <div className="relative">
                      <div className="absolute top-3 left-3 pointer-events-none">
                        <MessageSquare className="h-5 w-5 text-gray-500" />
                      </div>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="pl-10 bg-gray-700 border-gray-600 text-white h-32"
                        placeholder="Tell us about your project and what you'd like to discuss"
                        required
                      />
                    </div>
                  </div>
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Booking..." : "Book Consultation"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookConsultation;
