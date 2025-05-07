
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { Building2, Filter, Search } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";
import AddBlueprintForm from '@/components/AddBlueprintForm';
import { useAuth } from '@/contexts/AuthContext';
import { addDemoBlueprint } from '@/utils/seedData';

interface Blueprint {
  id: string;
  title: string;
  description: string;
  price: number;
  category: string;
  file_url?: string;
}

const ArchitecturePlans = () => {
  const [blueprints, setBlueprints] = useState<Blueprint[]>([]);
  const [filteredBlueprints, setFilteredBlueprints] = useState<Blueprint[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [isLoading, setIsLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const { toast } = useToast();
  const { user } = useAuth();

  // Check if the current user is an admin
  useEffect(() => {
    const checkAdminRole = async () => {
      if (!user) {
        setIsAdmin(false);
        return;
      }

      try {
        const { data, error } = await supabase
          .from('user_roles')
          .select('role')
          .eq('user_id', user.id)
          .eq('role', 'admin')
          .single();

        if (error) {
          console.error('Error checking admin role:', error);
          setIsAdmin(false);
          return;
        }

        setIsAdmin(!!data);
      } catch (error) {
        console.error('Error in admin check:', error);
        setIsAdmin(false);
      }
    };

    checkAdminRole();
  }, [user]);

  const fetchBlueprints = async () => {
    setIsLoading(true);
    try {
      // First, add a demo blueprint if none exists
      await addDemoBlueprint();
      
      const { data, error } = await supabase
        .from('blueprints')
        .select('*');

      if (error) throw error;

      if (data) {
        setBlueprints(data);
        setFilteredBlueprints(data);
        
        // Extract unique categories
        const uniqueCategories = Array.from(
          new Set(data.map((blueprint) => blueprint.category))
        );
        setCategories(uniqueCategories);
      }
    } catch (error: any) {
      console.error('Error fetching blueprints:', error);
      toast({
        variant: "destructive",
        title: "Error loading blueprints",
        description: error.message || "Failed to load blueprints. Please try again later.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchBlueprints();
  }, [toast]);

  useEffect(() => {
    let result = [...blueprints];
    
    // Apply search filter
    if (searchQuery) {
      result = result.filter(
        (blueprint) =>
          blueprint.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          blueprint.description?.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    // Apply category filter
    if (categoryFilter && categoryFilter !== "all") {
      result = result.filter((blueprint) => blueprint.category === categoryFilter);
    }
    
    setFilteredBlueprints(result);
  }, [searchQuery, categoryFilter, blueprints]);

  return (
    <div className="min-h-screen bg-workants-black text-white pt-8 md:ml-64 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Architecture Plans for Sale</h1>
            <p className="text-gray-300">
              Browse our collection of professionally designed architectural plans
            </p>
          </div>
          
          {isAdmin && (
            <AddBlueprintForm onSuccess={fetchBlueprints} />
          )}
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              type="search"
              placeholder="Search plans..."
              className="pl-10 bg-gray-800 border-gray-700 text-white"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex gap-2 items-center">
            <Filter className="text-gray-400" />
            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
              <SelectTrigger className="w-[180px] bg-gray-800 border-gray-700 text-white">
                <SelectValue placeholder="All Categories" />
              </SelectTrigger>
              <SelectContent className="bg-gray-800 border-gray-700 text-white">
                <SelectItem value="all">All Categories</SelectItem>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Blueprint Grid */}
        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <Card key={item} className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <Skeleton className="h-48 bg-gray-700" />
                  <Skeleton className="h-5 w-2/3 mt-4 bg-gray-700" />
                  <Skeleton className="h-4 w-full mt-2 bg-gray-700" />
                </CardHeader>
                <CardFooter className="flex justify-between">
                  <Skeleton className="h-4 w-20 bg-gray-700" />
                  <Skeleton className="h-10 w-24 bg-gray-700" />
                </CardFooter>
              </Card>
            ))}
          </div>
        ) : filteredBlueprints.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBlueprints.map((blueprint) => (
              <Card key={blueprint.id} className="bg-gray-800 border-gray-700 overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-blue-900/20">
                <div className="h-48 bg-gray-700 flex items-center justify-center">
                  {blueprint.file_url ? (
                    <img 
                      src={blueprint.file_url} 
                      alt={blueprint.title} 
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <Building2 className="h-16 w-16 text-gray-500" />
                  )}
                </div>
                <CardHeader>
                  <CardTitle>{blueprint.title}</CardTitle>
                  <CardDescription className="text-gray-400">
                    {blueprint.description?.substring(0, 100)}
                    {blueprint.description && blueprint.description.length > 100 ? '...' : ''}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="inline-block bg-blue-900/30 px-2 py-1 rounded text-xs text-blue-300">
                    {blueprint.category}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between items-center">
                  <div className="text-xl font-semibold text-blue-400">
                    R{blueprint.price.toFixed(2)}
                  </div>
                  <Link to={`/blueprints/${blueprint.id}`}>
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                      View Details
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-12">
            <Building2 className="h-16 w-16 text-gray-500 mb-4" />
            <h3 className="text-xl font-medium">No blueprints found</h3>
            <p className="text-gray-400 text-center mt-2">
              {searchQuery || categoryFilter !== "all"
                ? "Try changing your search or filter criteria"
                : "Check back later for new architectural plans"}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ArchitecturePlans;
