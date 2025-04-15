import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-workants-black text-white">
      <div className="text-center max-w-md">
        <h1 className="text-7xl font-bold mb-4">404</h1>
        <p className="text-2xl text-gray-300 mb-6">Page Not Found</p>
        <p className="text-gray-400 mb-8">
          The page you are looking for might have been removed, had its name changed, 
          or is temporarily unavailable.
        </p>
        <Link to="/">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">
            <Home className="mr-2 h-4 w-4" /> Return to Homepage
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
