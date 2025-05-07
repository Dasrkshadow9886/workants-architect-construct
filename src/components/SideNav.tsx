
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Home,
  Info,
  BookOpen,
  Building2,
  HardHat,
  FolderKanban,
  Phone,
  Calendar,
  LogIn,
  UserPlus,
  Menu,
  X,
  ShoppingCart,
  Instagram,
  Mail,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

interface NavItemProps {
  to: string;
  icon: React.ReactNode;
  label: string;
  isActive: boolean;
  onClick?: () => void;
}

const NavItem = ({ to, icon, label, isActive, onClick }: NavItemProps) => (
  <Link 
    to={to} 
    className={`flex items-center gap-3 px-3 py-2 rounded-md transition-colors ${
      isActive ? "bg-blue-900/50 text-white" : "text-gray-300 hover:bg-blue-900/30 hover:text-white"
    }`}
    onClick={onClick}
  >
    <span className="text-blue-400">{icon}</span>
    <span>{label}</span>
  </Link>
);

const SideNav = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const { user, signOut } = useAuth();
  
  const isActive = (path: string) => location.pathname === path;
  
  const closeMenu = () => {
    setOpen(false);
  };

  const handleSignOut = async () => {
    await signOut();
    closeMenu();
  };

  return (
    <div>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button 
            variant="ghost" 
            size="icon" 
            className="fixed top-4 left-4 z-50 md:hidden text-white hover:bg-blue-900/50"
          >
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="bg-workants-black border-r border-workants-gray w-64 p-4">
          <div className="flex items-center justify-between mb-6">
            <Link to="/" onClick={closeMenu}>
              <img
                src="/lovable-uploads/551b1535-7e2d-46c2-90e6-ea22467d3e9e.png"
                alt="WorkAnts Consulting"
                className="h-12"
              />
            </Link>
            <SheetClose asChild>
              <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white hover:bg-blue-900/30">
                <X className="h-5 w-5" />
                <span className="sr-only">Close menu</span>
              </Button>
            </SheetClose>
          </div>
          
          <div className="space-y-1">
            <NavItem 
              to="/" 
              icon={<Home className="h-5 w-5" />} 
              label="Home" 
              isActive={isActive("/")} 
              onClick={closeMenu}
            />
            <NavItem 
              to="/about" 
              icon={<Info className="h-5 w-5" />} 
              label="About" 
              isActive={isActive("/about")} 
              onClick={closeMenu}
            />
            <NavItem 
              to="/architecture" 
              icon={<Building2 className="h-5 w-5" />} 
              label="Architecture" 
              isActive={isActive("/architecture")} 
              onClick={closeMenu}
            />
            <NavItem 
              to="/architecture/plans" 
              icon={<ShoppingCart className="h-5 w-5" />} 
              label="Plans for Sale" 
              isActive={isActive("/architecture/plans")} 
              onClick={closeMenu}
            />
            <NavItem 
              to="/construction" 
              icon={<HardHat className="h-5 w-5" />} 
              label="Construction" 
              isActive={isActive("/construction")} 
              onClick={closeMenu}
            />
            <NavItem 
              to="/projects" 
              icon={<FolderKanban className="h-5 w-5" />} 
              label="Projects" 
              isActive={isActive("/projects")} 
              onClick={closeMenu}
            />
            <NavItem 
              to="/contact" 
              icon={<Phone className="h-5 w-5" />} 
              label="Contact" 
              isActive={isActive("/contact")} 
              onClick={closeMenu}
            />
            <NavItem 
              to="/book" 
              icon={<Calendar className="h-5 w-5" />} 
              label="Book Consultation" 
              isActive={isActive("/book")} 
              onClick={closeMenu}
            />
            
            <div className="border-t border-workants-gray my-3"></div>

            {user ? (
              <>
                <NavItem 
                  to="/admin" 
                  icon={<BookOpen className="h-5 w-5" />} 
                  label="Admin Dashboard" 
                  isActive={isActive("/admin")} 
                  onClick={closeMenu}
                />
                <button
                  onClick={handleSignOut}
                  className="flex items-center gap-3 px-3 py-2 w-full text-left rounded-md transition-colors text-gray-300 hover:bg-blue-900/30 hover:text-white"
                >
                  <span className="text-blue-400">
                    <LogIn className="h-5 w-5" />
                  </span>
                  <span>Sign Out</span>
                </button>
              </>
            ) : (
              <>
                <NavItem 
                  to="/login" 
                  icon={<LogIn className="h-5 w-5" />} 
                  label="Login" 
                  isActive={isActive("/login")} 
                  onClick={closeMenu}
                />
                <NavItem 
                  to="/signup" 
                  icon={<UserPlus className="h-5 w-5" />} 
                  label="Sign Up" 
                  isActive={isActive("/signup")} 
                  onClick={closeMenu}
                />
              </>
            )}
            
            <div className="border-t border-workants-gray my-3"></div>
            
            <div className="flex justify-center space-x-4 py-3">
              <a 
                href="https://www.instagram.com/workants_128?igsh=cjlidGhwNTVwNHRk" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-300 hover:text-blue-400 transition-colors"
              >
                <Instagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </a>
              <a 
                href="mailto:info@workants.co.za" 
                className="text-gray-300 hover:text-blue-400 transition-colors"
              >
                <Mail className="h-6 w-6" />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </div>
        </SheetContent>
      </Sheet>
      
      {/* Desktop sidebar - permanently visible on larger screens */}
      <div className="hidden md:flex flex-col h-screen w-64 fixed left-0 top-0 bg-workants-black border-r border-workants-gray p-4">
        <Link to="/" className="mb-6">
          <img
            src="/lovable-uploads/551b1535-7e2d-46c2-90e6-ea22467d3e9e.png"
            alt="WorkAnts Consulting"
            className="h-12"
          />
        </Link>
        
        <div className="space-y-1 flex-1">
          <NavItem 
            to="/" 
            icon={<Home className="h-5 w-5" />} 
            label="Home" 
            isActive={isActive("/")} 
          />
          <NavItem 
            to="/about" 
            icon={<Info className="h-5 w-5" />} 
            label="About" 
            isActive={isActive("/about")} 
          />
          <NavItem 
            to="/architecture" 
            icon={<Building2 className="h-5 w-5" />} 
            label="Architecture" 
            isActive={isActive("/architecture")} 
          />
          <NavItem 
            to="/architecture/plans" 
            icon={<ShoppingCart className="h-5 w-5" />} 
            label="Plans for Sale" 
            isActive={isActive("/architecture/plans")} 
          />
          <NavItem 
            to="/construction" 
            icon={<HardHat className="h-5 w-5" />} 
            label="Construction" 
            isActive={isActive("/construction")} 
          />
          <NavItem 
            to="/projects" 
            icon={<FolderKanban className="h-5 w-5" />} 
            label="Projects" 
            isActive={isActive("/projects")} 
          />
          <NavItem 
            to="/contact" 
            icon={<Phone className="h-5 w-5" />} 
            label="Contact" 
            isActive={isActive("/contact")} 
          />
          <NavItem 
            to="/book" 
            icon={<Calendar className="h-5 w-5" />} 
            label="Book Consultation" 
            isActive={isActive("/book")} 
          />
          
          <div className="border-t border-workants-gray my-3"></div>
          
          {user ? (
            <>
              <NavItem 
                to="/admin" 
                icon={<BookOpen className="h-5 w-5" />} 
                label="Admin Dashboard" 
                isActive={isActive("/admin")} 
              />
              <button
                onClick={signOut}
                className="flex items-center gap-3 px-3 py-2 w-full text-left rounded-md transition-colors text-gray-300 hover:bg-blue-900/30 hover:text-white"
              >
                <span className="text-blue-400">
                  <LogIn className="h-5 w-5" />
                </span>
                <span>Sign Out</span>
              </button>
            </>
          ) : (
            <>
              <NavItem 
                to="/login" 
                icon={<LogIn className="h-5 w-5" />} 
                label="Login" 
                isActive={isActive("/login")} 
              />
              <NavItem 
                to="/signup" 
                icon={<UserPlus className="h-5 w-5" />} 
                label="Sign Up" 
                isActive={isActive("/signup")} 
              />
            </>
          )}
        </div>
        
        <div className="border-t border-workants-gray my-3"></div>
        
        <div className="flex justify-center space-x-4 py-3">
          <a 
            href="https://www.instagram.com/workants_128?igsh=cjlidGhwNTVwNHRk" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-300 hover:text-blue-400 transition-colors"
          >
            <Instagram className="h-6 w-6" />
            <span className="sr-only">Instagram</span>
          </a>
          <a 
            href="mailto:info@workants.co.za" 
            className="text-gray-300 hover:text-blue-400 transition-colors"
          >
            <Mail className="h-6 w-6" />
            <span className="sr-only">Email</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
