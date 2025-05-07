
import React from "react";
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
  ShoppingCart,
  Instagram,
  Mail,
} from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";

interface NavMenuProps {
  onItemClick?: () => void;
}

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

const NavMenu = ({ onItemClick }: NavMenuProps) => {
  const location = useLocation();
  const { user, signOut } = useAuth();
  
  const isActive = (path: string) => location.pathname === path;
  
  const handleSignOut = async () => {
    await signOut();
    if (onItemClick) onItemClick();
  };

  return (
    <div className="flex flex-col h-full">
      <div className="space-y-1 flex-1 px-4">
        <NavItem 
          to="/" 
          icon={<Home className="h-5 w-5" />} 
          label="Home" 
          isActive={isActive("/")} 
          onClick={onItemClick}
        />
        <NavItem 
          to="/about" 
          icon={<Info className="h-5 w-5" />} 
          label="About" 
          isActive={isActive("/about")} 
          onClick={onItemClick}
        />
        <NavItem 
          to="/architecture" 
          icon={<Building2 className="h-5 w-5" />} 
          label="Architecture" 
          isActive={isActive("/architecture")} 
          onClick={onItemClick}
        />
        <NavItem 
          to="/architecture/plans" 
          icon={<ShoppingCart className="h-5 w-5" />} 
          label="Plans for Sale" 
          isActive={isActive("/architecture/plans")} 
          onClick={onItemClick}
        />
        <NavItem 
          to="/construction" 
          icon={<HardHat className="h-5 w-5" />} 
          label="Construction" 
          isActive={isActive("/construction")} 
          onClick={onItemClick}
        />
        <NavItem 
          to="/projects" 
          icon={<FolderKanban className="h-5 w-5" />} 
          label="Projects" 
          isActive={isActive("/projects")} 
          onClick={onItemClick}
        />
        <NavItem 
          to="/contact" 
          icon={<Phone className="h-5 w-5" />} 
          label="Contact" 
          isActive={isActive("/contact")} 
          onClick={onItemClick}
        />
        <NavItem 
          to="/book" 
          icon={<Calendar className="h-5 w-5" />} 
          label="Book Consultation" 
          isActive={isActive("/book")} 
          onClick={onItemClick}
        />
        
        <div className="border-t border-workants-gray my-3"></div>
        
        {user ? (
          <>
            <NavItem 
              to="/admin" 
              icon={<BookOpen className="h-5 w-5" />} 
              label="Admin Dashboard" 
              isActive={isActive("/admin")} 
              onClick={onItemClick}
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
              onClick={onItemClick}
            />
            <NavItem 
              to="/signup" 
              icon={<UserPlus className="h-5 w-5" />} 
              label="Sign Up" 
              isActive={isActive("/signup")} 
              onClick={onItemClick}
            />
          </>
        )}
      </div>
      
      <div className="border-t border-workants-gray my-3 px-4"></div>
      
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
  );
};

export default NavMenu;
