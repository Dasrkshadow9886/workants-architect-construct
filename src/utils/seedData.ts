
import { supabase } from "@/integrations/supabase/client";

export const addDemoBlueprint = async () => {
  try {
    // Check if demo blueprint already exists
    const { data: existingBlueprints, error: checkError } = await supabase
      .from('blueprints')
      .select('id')
      .eq('title', 'Modern Family Home')
      .limit(1);
      
    if (checkError) {
      console.error("Error checking existing blueprints:", checkError);
      throw checkError;
    }
    
    // If demo blueprint already exists, don't add another one
    if (existingBlueprints && existingBlueprints.length > 0) {
      console.log("Demo blueprint already exists");
      return;
    }

    // Insert demo blueprint
    const { data: blueprint1, error: insertError } = await supabase
      .from('blueprints')
      .insert({
        title: 'Modern Family Home',
        description: 'A contemporary 4-bedroom family home design with open floor plan, energy-efficient features, and smart home integration. Perfect for modern families looking for comfort and style.\n\nFeatures:\n- 4 Bedrooms\n- 3 Bathrooms\n- Double Garage\n- Open Plan Kitchen\n- Home Office\n- Energy Efficient Design',
        category: 'Residential',
        price: 3499.99,
        file_url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop'
      })
      .select();
      
    if (insertError) {
      console.error("Error inserting first blueprint:", insertError);
      throw insertError;
    }
    
    // Add a second demo blueprint
    const { data: blueprint2, error: insertError2 } = await supabase
      .from('blueprints')
      .insert({
        title: 'Modern Office Building',
        description: 'A sleek commercial office building design with modern amenities, flexible workspaces, and environmentally sustainable features. Ideal for businesses looking for a contemporary professional environment.\n\nFeatures:\n- 3 Floors\n- Open Plan Office Spaces\n- Meeting Rooms\n- Reception Area\n- Staff Kitchen\n- Underground Parking',
        category: 'Commercial',
        price: 5999.99,
        file_url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop'
      })
      .select();
      
    if (insertError2) {
      console.error("Error inserting second blueprint:", insertError2);
      throw insertError2;
    }
    
    // Add a third blueprint for variety
    const { error: insertError3 } = await supabase
      .from('blueprints')
      .insert({
        title: 'Sustainable Eco Cottage',
        description: 'An environmentally friendly small home designed with sustainable materials and energy efficiency in mind. Perfect for those looking to reduce their carbon footprint while enjoying modern comforts.\n\nFeatures:\n- 2 Bedrooms\n- 1 Bathroom\n- Solar Panel Ready\n- Rainwater Collection System\n- Natural Ventilation\n- Energy Efficient Appliances',
        category: 'Residential',
        price: 1999.99,
        file_url: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=2065&auto=format&fit=crop'
      });
      
    if (insertError3) {
      console.error("Error inserting third blueprint:", insertError3);
      throw insertError3;
    }
    
    console.log("Demo blueprints added successfully");
    
  } catch (error) {
    console.error("Failed to add demo blueprints:", error);
  }
};
