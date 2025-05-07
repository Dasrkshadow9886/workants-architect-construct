
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Building2, Check, Download, AlertCircle, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { Skeleton } from "@/components/ui/skeleton";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";

interface Blueprint {
  id: string;
  title: string;
  description: string;
  price: number;
  category: string;
  file_url?: string;
}

interface Purchase {
  id: string;
  payment_status: string;
  payment_id?: string;
}

const BlueprintPurchase = () => {
  const { id } = useParams<{ id: string }>();
  const [blueprint, setBlueprint] = useState<Blueprint | null>(null);
  const [purchase, setPurchase] = useState<Purchase | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isPurchasing, setIsPurchasing] = useState(false);
  const { user } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBlueprint = async () => {
      try {
        setIsLoading(true);
        
        if (!id) return;
        
        // Fetch blueprint details
        const { data: blueprintData, error: blueprintError } = await supabase
          .from('blueprints')
          .select('*')
          .eq('id', id)
          .single();
          
        if (blueprintError) {
          throw blueprintError;
        }
        
        if (blueprintData) {
          setBlueprint(blueprintData);
          
          // If user is logged in, check for existing purchases
          if (user) {
            const { data: purchaseData, error: purchaseError } = await supabase
              .from('purchases')
              .select('*')
              .eq('blueprint_id', id)
              .eq('user_id', user.id)
              .maybeSingle();
              
            if (purchaseError && purchaseError.code !== 'PGRST116') {
              throw purchaseError;
            }
            
            if (purchaseData) {
              setPurchase(purchaseData);
            }
          }
        }
      } catch (error: any) {
        console.error('Error fetching blueprint details:', error);
        toast({
          variant: "destructive",
          title: "Error loading blueprint details",
          description: error.message || "Failed to load blueprint. Please try again later.",
        });
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchBlueprint();
  }, [id, user, toast]);

  const initiatePayment = async () => {
    if (!user) {
      toast({
        title: "Please sign in",
        description: "You need to be logged in to purchase blueprints",
      });
      navigate('/login', { state: { from: `/blueprints/${id}` } });
      return;
    }
    
    if (!blueprint) return;
    
    try {
      setIsPurchasing(true);
      
      // Create a pending purchase record
      const { data: newPurchase, error: purchaseError } = await supabase
        .from('purchases')
        .insert({
          user_id: user.id,
          blueprint_id: blueprint.id,
          amount: blueprint.price,
          payment_status: 'pending'
        })
        .select()
        .single();
        
      if (purchaseError) throw purchaseError;
      
      // For now, we'll just simulate a successful payment
      // In a real implementation, you would redirect to Ozow payment page
      toast({
        title: "Payment initiated",
        description: "You will be redirected to the payment gateway...",
      });
      
      // Simulate payment gateway
      setTimeout(async () => {
        // Update purchase record to completed
        const { error: updateError } = await supabase
          .from('purchases')
          .update({
            payment_status: 'completed',
            payment_id: `sim_${Date.now()}`
          })
          .eq('id', newPurchase.id);
          
        if (updateError) throw updateError;
        
        setPurchase({
          id: newPurchase.id,
          payment_status: 'completed',
          payment_id: `sim_${Date.now()}`
        });
        
        toast({
          title: "Purchase successful!",
          description: "You can now download your blueprint",
        });
      }, 2000);
      
    } catch (error: any) {
      console.error('Error initiating payment:', error);
      toast({
        variant: "destructive",
        title: "Payment failed",
        description: error.message || "Failed to process payment. Please try again later.",
      });
    } finally {
      setIsPurchasing(false);
    }
  };

  const downloadBlueprint = () => {
    if (!blueprint?.file_url) {
      toast({
        variant: "destructive",
        title: "Download failed",
        description: "Blueprint file is not available",
      });
      return;
    }
    
    // In a real implementation, you would have a secure download link
    // For now, we'll just show a success message
    toast({
      title: "Download started",
      description: "Your blueprint is being downloaded",
    });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-workants-black text-white pt-8 md:ml-64 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <Skeleton className="h-8 w-64 bg-gray-700" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
              <Skeleton className="h-64 w-full bg-gray-700" />
            </div>
            <div className="md:col-span-2">
              <Skeleton className="h-10 w-3/4 bg-gray-700 mb-4" />
              <Skeleton className="h-4 w-full bg-gray-700 mb-2" />
              <Skeleton className="h-4 w-full bg-gray-700 mb-2" />
              <Skeleton className="h-4 w-2/3 bg-gray-700 mb-6" />
              <Skeleton className="h-8 w-32 bg-gray-700 mb-6" />
              <Skeleton className="h-12 w-48 bg-gray-700" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!blueprint) {
    return (
      <div className="min-h-screen bg-workants-black text-white pt-8 md:ml-64 px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center py-16">
          <AlertCircle className="h-16 w-16 mx-auto text-red-500 mb-4" />
          <h1 className="text-3xl font-bold mb-2">Blueprint Not Found</h1>
          <p className="text-gray-300 mb-6">
            The blueprint you're looking for doesn't exist or has been removed.
          </p>
          <Button 
            variant="outline" 
            className="border-gray-600 text-white hover:bg-gray-800"
            onClick={() => navigate('/architecture/plans')}
          >
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back to Plans
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-workants-black text-white pt-8 md:ml-64 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <Button 
          variant="outline" 
          className="mb-6 border-gray-600 text-white hover:bg-gray-800"
          onClick={() => navigate('/architecture/plans')}
        >
          <ChevronLeft className="mr-2 h-4 w-4" />
          Back to Plans
        </Button>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <div className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden">
              {blueprint.file_url ? (
                <img 
                  src={blueprint.file_url} 
                  alt={blueprint.title} 
                  className="w-full h-64 object-cover"
                />
              ) : (
                <div className="h-64 bg-gray-700 flex items-center justify-center">
                  <Building2 className="h-16 w-16 text-gray-500" />
                </div>
              )}
              
              <div className="p-4 border-t border-gray-700">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Category</span>
                  <span className="bg-blue-900/30 px-2 py-1 rounded text-xs text-blue-300">
                    {blueprint.category}
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-2">
            <h1 className="text-3xl font-bold mb-4">{blueprint.title}</h1>
            <p className="text-gray-300 mb-6 whitespace-pre-line">
              {blueprint.description}
            </p>
            
            <div className="text-3xl font-bold text-blue-400 mb-8">
              R{blueprint.price.toFixed(2)}
            </div>
            
            {purchase?.payment_status === 'completed' ? (
              <Card className="bg-green-900/20 border-green-800">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Check className="mr-2 h-5 w-5 text-green-400" />
                    Purchase Complete
                  </CardTitle>
                  <CardDescription className="text-green-300">
                    Transaction ID: {purchase.payment_id}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">
                    You now have full access to this blueprint. You can download it anytime.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button 
                    className="bg-green-700 hover:bg-green-800 text-white"
                    onClick={downloadBlueprint}
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Download Blueprint
                  </Button>
                </CardFooter>
              </Card>
            ) : (
              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle>Purchase this Blueprint</CardTitle>
                  <CardDescription className="text-gray-400">
                    Get instant access to the full blueprint after purchase
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="mr-2 h-4 w-4 text-green-400 mt-1" />
                      <span>Complete architectural blueprint</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-4 w-4 text-green-400 mt-1" />
                      <span>Immediate download after payment</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-4 w-4 text-green-400 mt-1" />
                      <span>Ready to use for construction permits</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button 
                    className="bg-blue-600 hover:bg-blue-700 text-white w-full"
                    onClick={initiatePayment}
                    disabled={isPurchasing}
                  >
                    {isPurchasing ? 'Processing...' : 'Purchase Now'}
                  </Button>
                </CardFooter>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlueprintPurchase;
