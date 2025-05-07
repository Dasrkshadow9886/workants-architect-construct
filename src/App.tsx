
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import { RequireAuth } from "@/components/RequireAuth";

// Pages
import Index from "./pages/Index";
import About from "./pages/About";
import Architecture from "./pages/Architecture";
import ArchitecturePlans from "./pages/ArchitecturePlans";
import Construction from "./pages/Construction";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import BookConsultation from "./pages/BookConsultation";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AdminDashboard from "./pages/AdminDashboard";
import BlueprintPurchase from "./pages/BlueprintPurchase";
import NotFound from "./pages/NotFound";

// Layout components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="flex flex-col min-h-screen bg-workants-black">
            <Navbar />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/about" element={<About />} />
                <Route path="/architecture" element={<Architecture />} />
                <Route path="/architecture/plans" element={<ArchitecturePlans />} />
                <Route path="/construction" element={<Construction />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/book" element={<BookConsultation />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route 
                  path="/admin" 
                  element={
                    <RequireAuth>
                      <AdminDashboard />
                    </RequireAuth>
                  } 
                />
                <Route path="/blueprints/:id" element={<BlueprintPurchase />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
              <Footer />
            </main>
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
