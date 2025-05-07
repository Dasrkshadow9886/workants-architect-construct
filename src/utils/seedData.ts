
import { supabase } from "@/integrations/supabase/client";

export const addDemoBlueprint = async () => {
  try {
    // Check if demo blueprint already exists
    const { data: existingBlueprints, error: checkError } = await supabase
      .from('blueprints')
      .select('id')
      .eq('title', 'Modern Family Home')
      .limit(1);
      
    if (checkError) throw checkError;
    
    // If demo blueprint already exists, don't add another one
    if (existingBlueprints && existingBlueprints.length > 0) {
      console.log("Demo blueprint already exists");
      return;
    }

    // Insert demo blueprint
    const { error: insertError } = await supabase
      .from('blueprints')
      .insert({
        title: 'Modern Family Home',
        description: 'A contemporary 4-bedroom family home design with open floor plan, energy-efficient features, and smart home integration. Perfect for modern families looking for comfort and style.',
        category: 'Residential',
        price: 3499.99,
        file_url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop'
      });
      
    if (insertError) throw insertError;
    console.log("Demo blueprint added successfully");
    
  } catch (error) {
    console.error("Failed to add demo blueprint:", error);
  }
};
