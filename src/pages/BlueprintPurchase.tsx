
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CreditCard, Check, Package, Download, ArrowLeft } from "lucide-react";

const BlueprintPurchase = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [paymentStep, setPaymentStep] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState("credit");
  const [paymentComplete, setPaymentComplete] = useState(false);

  // Simulated blueprint data based on ID
  const blueprintData = {
    id: parseInt(id || "1"),
    title: `Blueprint #${id} - Modern Design`,
    description: "Comprehensive architectural blueprint with detailed specifications and measurements.",
    price: 5500.00,
    format: "PDF, DWG",
    pages: 24,
    image: ""
  };

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (paymentStep === 1) {
      setPaymentStep(2);
    } else {
      // Simulate payment processing
      setTimeout(() => {
        setPaymentComplete(true);
      }, 1500);
    }
  };

  const handleDownload = () => {
    // In a real application, this would initiate the download
    alert("Blueprints would be downloaded here or sent via email.");
  };

  if (paymentComplete) {
    return (
      <div className="min-h-screen bg-workants-black text-white flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 bg-gray-800 p-8 rounded-lg shadow-lg text-center">
          <div className="bg-green-500 h-20 w-20 rounded-full flex items-center justify-center mx-auto">
            <Check className="h-10 w-10 text-white" />
          </div>
          <h2 className="mt-6 text-3xl font-bold text-white">Payment Successful!</h2>
          <p className="mt-2 text-lg text-gray-300">
            Thank you for your purchase. Your blueprint is ready for download.
          </p>
          <div className="bg-gray-700 p-4 rounded-lg mt-8">
            <h3 className="text-xl font-semibold mb-2">{blueprintData.title}</h3>
            <p className="text-gray-400 mb-4">Order #{Math.floor(Math.random() * 10000)}</p>
            <Button 
              onClick={handleDownload}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white"
            >
              <Download className="mr-2 h-4 w-4" /> Download Blueprint
            </Button>
          </div>
          <p className="mt-4 text-sm text-gray-400">
            The blueprint has also been sent to your registered email address.
          </p>
          <div className="mt-6">
            <Button
              variant="outline"
              onClick={() => navigate("/architecture")}
              className="border-gray-600 text-gray-300 hover:text-white"
            >
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Architecture
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-workants-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Button
            variant="outline"
            onClick={() => navigate(-1)}
            className="border-gray-600 text-gray-300 hover:text-white"
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Blueprint Details */}
          <div className="md:col-span-1">
            <Card className="bg-gray-800 border-gray-700 text-white">
              <CardHeader>
                <CardTitle>Blueprint Details</CardTitle>
                <CardDescription className="text-gray-400">Product information</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-48 bg-gray-700 rounded-md mb-4"></div>
                <h3 className="text-xl font-bold mb-2">{blueprintData.title}</h3>
                <p className="text-gray-300 mb-4">{blueprintData.description}</p>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Price:</span>
                    <span className="font-semibold">R{blueprintData.price.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Format:</span>
                    <span>{blueprintData.format}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Pages:</span>
                    <span>{blueprintData.pages}</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="border-t border-gray-700 pt-4">
                <div className="w-full flex items-center justify-between">
                  <span className="text-lg font-bold">Total:</span>
                  <span className="text-lg font-bold">R{blueprintData.price.toFixed(2)}</span>
                </div>
              </CardFooter>
            </Card>
          </div>

          {/* Payment Form */}
          <div className="md:col-span-2">
            <Card className="bg-gray-800 border-gray-700 text-white">
              <CardHeader>
                <CardTitle>{paymentStep === 1 ? "Billing Information" : "Payment Details"}</CardTitle>
                <CardDescription className="text-gray-400">
                  {paymentStep === 1 ? "Enter your billing information" : "Complete your purchase"}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handlePaymentSubmit}>
                  {paymentStep === 1 ? (
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-1">
                            First Name
                          </label>
                          <Input
                            id="firstName"
                            className="bg-gray-700 border-gray-600 text-white"
                            placeholder="First Name"
                            required
                          />
                        </div>
                        <div>
                          <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-1">
                            Last Name
                          </label>
                          <Input
                            id="lastName"
                            className="bg-gray-700 border-gray-600 text-white"
                            placeholder="Last Name"
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                          Email Address
                        </label>
                        <Input
                          id="email"
                          type="email"
                          className="bg-gray-700 border-gray-600 text-white"
                          placeholder="Email Address"
                          required
                        />
                        <p className="text-sm text-gray-400 mt-1">Your blueprints will be sent to this email</p>
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">
                          Phone Number
                        </label>
                        <Input
                          id="phone"
                          type="tel"
                          className="bg-gray-700 border-gray-600 text-white"
                          placeholder="Phone Number"
                          required
                        />
                      </div>

                      <div>
                        <h3 className="text-sm font-medium text-gray-300 mb-3">Payment Method</h3>
                        <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="space-y-2">
                          <div className="flex items-center space-x-2 bg-gray-700 p-3 rounded-md">
                            <RadioGroupItem value="credit" id="credit" className="border-gray-600" />
                            <label htmlFor="credit" className="flex items-center">
                              <CreditCard className="h-4 w-4 mr-2" />
                              Credit/Debit Card
                            </label>
                          </div>
                          <div className="flex items-center space-x-2 bg-gray-700 p-3 rounded-md">
                            <RadioGroupItem value="ozow" id="ozow" className="border-gray-600" />
                            <label htmlFor="ozow" className="flex items-center">
                              <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24">
                                <rect width="24" height="24" fill="none" />
                              </svg>
                              Ozow Payment
                            </label>
                          </div>
                        </RadioGroup>
                      </div>

                      <div className="flex items-start">
                        <Checkbox id="terms" className="mt-1 border-gray-600" required />
                        <label htmlFor="terms" className="ml-2 text-sm text-gray-300">
                          I agree to the Terms of Service and Privacy Policy regarding the purchase and 
                          use of architectural blueprints.
                        </label>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-300 mb-1">
                          Card Number
                        </label>
                        <Input
                          id="cardNumber"
                          className="bg-gray-700 border-gray-600 text-white"
                          placeholder="0000 0000 0000 0000"
                          required
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="expiration" className="block text-sm font-medium text-gray-300 mb-1">
                            Expiration Date
                          </label>
                          <Input
                            id="expiration"
                            className="bg-gray-700 border-gray-600 text-white"
                            placeholder="MM/YY"
                            required
                          />
                        </div>
                        <div>
                          <label htmlFor="cvv" className="block text-sm font-medium text-gray-300 mb-1">
                            CVV
                          </label>
                          <Input
                            id="cvv"
                            className="bg-gray-700 border-gray-600 text-white"
                            placeholder="123"
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="nameOnCard" className="block text-sm font-medium text-gray-300 mb-1">
                          Name on Card
                        </label>
                        <Input
                          id="nameOnCard"
                          className="bg-gray-700 border-gray-600 text-white"
                          placeholder="Name on Card"
                          required
                        />
                      </div>
                    </div>
                  )}

                  <div className="mt-6">
                    {paymentStep === 1 ? (
                      <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                        Continue to Payment
                      </Button>
                    ) : (
                      <div className="space-y-4">
                        <Button 
                          type="button" 
                          variant="outline" 
                          className="w-full border-gray-600 text-gray-300 hover:text-white"
                          onClick={() => setPaymentStep(1)}
                        >
                          Back
                        </Button>
                        <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                          Complete Purchase (R{blueprintData.price.toFixed(2)})
                        </Button>
                      </div>
                    )}
                  </div>
                </form>
              </CardContent>
              <CardFooter className="border-t border-gray-700 pt-4">
                <div className="text-sm text-gray-400 flex items-center">
                  <Package className="h-4 w-4 mr-2" />
                  Blueprint will be delivered immediately after payment
                </div>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlueprintPurchase;
