
import { useState } from 'react';
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Mail, Lock, User, UserPlus } from "lucide-react";

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Signup logic would go here
    console.log("Signup attempt with:", formData);
    
    // Check if passwords match
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    
    alert("Signup functionality will be implemented when backend is connected.");
  };

  return (
    <div className="min-h-screen bg-workants-black text-white flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-gray-800 p-8 rounded-lg shadow-lg">
        <div className="text-center">
          <UserPlus className="mx-auto h-12 w-12 text-orange-500" />
          <h2 className="mt-6 text-3xl font-bold">Create a new account</h2>
          <p className="mt-2 text-sm text-gray-400">
            Or{" "}
            <Link to="/login" className="font-medium text-blue-500 hover:text-blue-400">
              sign in to existing account
            </Link>
          </p>
        </div>
        
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-300">
                  First Name
                </label>
                <div className="mt-1 relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-gray-500" />
                  </div>
                  <Input
                    id="firstName"
                    name="firstName"
                    type="text"
                    required
                    className="pl-10 bg-gray-700 border-gray-600 text-white"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-300">
                  Last Name
                </label>
                <div className="mt-1">
                  <Input
                    id="lastName"
                    name="lastName"
                    type="text"
                    required
                    className="bg-gray-700 border-gray-600 text-white"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                Email address
              </label>
              <div className="mt-1 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-500" />
                </div>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="pl-10 bg-gray-700 border-gray-600 text-white"
                  placeholder="Email address"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-300">
                Password
              </label>
              <div className="mt-1 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-500" />
                </div>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="pl-10 bg-gray-700 border-gray-600 text-white"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-300">
                Confirm Password
              </label>
              <div className="mt-1 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-500" />
                </div>
                <Input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  required
                  className="pl-10 bg-gray-700 border-gray-600 text-white"
                  placeholder="Confirm Password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          <div className="flex items-center">
            <Checkbox id="terms" className="h-4 w-4" required />
            <label htmlFor="terms" className="ml-2 block text-sm text-gray-300">
              I agree to the{" "}
              <a href="#" className="font-medium text-blue-500 hover:text-blue-400">
                Terms and Conditions
              </a>
            </label>
          </div>

          <div>
            <Button
              type="submit"
              className="w-full flex justify-center py-2 px-4 bg-orange-500 hover:bg-orange-600"
            >
              Create Account
            </Button>
          </div>
        </form>

        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-600"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-gray-800 text-gray-400">Or sign up with</span>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3">
            <Button variant="outline" className="bg-gray-700 border-gray-600 text-white hover:bg-gray-600">
              Google
            </Button>
            <Button variant="outline" className="bg-gray-700 border-gray-600 text-white hover:bg-gray-600">
              Microsoft
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
