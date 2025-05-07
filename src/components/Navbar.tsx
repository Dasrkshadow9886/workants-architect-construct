
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, User, X } from 'lucide-react';
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
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer";
import NavMenu from './NavMenu';

const Navbar = () => {
  const { user, signOut } = useAuth();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <nav className="bg-workants-black border-b border-workants-gray sticky top-0 z-40">
      <div className="h-16 px-4 flex items-center justify-between">
        <Link to="/" className="flex">
          <img
            src="/lovable-uploads/551b1535-7e2d-46c2-90e6-ea22467d3e9e.png"
            alt="WorkAnts Consulting"
            className="h-12"
          />
        </Link>
        
        <div className="flex items-center gap-2">
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
          
          <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
            <DrawerTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white">
                <Menu className="h-6 w-6" />
              </Button>
            </DrawerTrigger>
            <DrawerContent side="right" className="bg-workants-black border-l border-workants-gray w-72 p-0 pt-2">
              <div className="flex justify-end p-2">
                <DrawerClose asChild>
                  <Button variant="ghost" size="icon" className="text-white">
                    <X className="h-5 w-5" />
                  </Button>
                </DrawerClose>
              </div>
              <NavMenu onItemClick={() => setIsDrawerOpen(false)} />
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
