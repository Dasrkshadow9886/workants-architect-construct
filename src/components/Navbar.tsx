
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, User } from 'lucide-react';
import { Button } from './ui/button';
import { useAuth } from '@/contexts/AuthContext';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const { user, signOut } = useAuth();

  return (
    <nav className="bg-workants-black border-b border-workants-gray sticky top-0 z-40 md:pl-64">
      <div className="h-16 px-4 flex items-center justify-end">
        {user && (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white rounded-full">
                <User className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-gray-800 border-gray-700 text-white" align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator className="bg-gray-700" />
              <DropdownMenuItem 
                className="hover:bg-gray-700 focus:bg-gray-700 cursor-pointer"
                asChild
              >
                <Link to="/admin">Dashboard</Link>
              </DropdownMenuItem>
              <DropdownMenuItem 
                className="hover:bg-gray-700 focus:bg-gray-700 cursor-pointer"
                onClick={signOut}
              >
                Sign Out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
