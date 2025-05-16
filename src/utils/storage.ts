
import { supabase } from "@/integrations/supabase/client";

export const BLUEPRINTS_BUCKET = 'blueprint_files';

export const uploadBlueprint = async (file: File, fileName: string): Promise<string> => {
  const fileExt = file.name.split('.').pop();
  const filePath = `${fileName.replace(/\s+/g, '-').toLowerCase()}-${Date.now()}.${fileExt}`;
  
  const { data, error } = await supabase.storage
    .from(BLUEPRINTS_BUCKET)
    .upload(filePath, file, {
      cacheControl: '3600',
      upsert: false
    });
  
  if (error) {
    throw error;
  }
  
  const { data: { publicUrl } } = supabase.storage
    .from(BLUEPRINTS_BUCKET)
    .getPublicUrl(data.path);
  
  return publicUrl;
};

export const getFileUrl = (path: string): string => {
  const { data: { publicUrl } } = supabase.storage
    .from(BLUEPRINTS_BUCKET)
    .getPublicUrl(path);
    
  return publicUrl;
};

export const deleteFile = async (path: string): Promise<void> => {
  const { error } = await supabase.storage
    .from(BLUEPRINTS_BUCKET)
    .remove([path]);
    
  if (error) {
    throw error;
  }
};

export const listFiles = async (prefix: string = ''): Promise<string[]> => {
  const { data, error } = await supabase.storage
    .from(BLUEPRINTS_BUCKET)
    .list(prefix);
    
  if (error) {
    throw error;
  }
  
  return data?.map(file => file.name) || [];
};

export const createOzowPayment = async (
  amount: number, 
  userId: string, 
  blueprintId: string, 
  successUrl: string, 
  cancelUrl: string
): Promise<string> => {
  try {
    // Create a payment record in the database
    const { data, error } = await supabase
      .from('purchases')
      .insert({
        user_id: userId,
        blueprint_id: blueprintId,
        amount: amount,
        payment_status: 'pending'
      })
      .select()
      .single();
      
    if (error) throw error;

    // Get the Ozow site code from the Supabase secrets
    const { data: secretData, error: secretError } = await supabase.functions.invoke('get-ozow-site-code');
    
    if (secretError) {
      console.error('Error getting Ozow site code:', secretError);
      throw new Error('Failed to retrieve Ozow configuration');
    }
    
    const siteCode = secretData.siteCode;

    // Generate a real Ozow payment URL with the purchase ID as reference
    const paymentUrl = `https://pay.ozow.com/?siteCode=${siteCode}&amount=${amount.toFixed(2)}&reference=${data.id}&cancelUrl=${encodeURIComponent(cancelUrl)}&successUrl=${encodeURIComponent(successUrl)}`;
    
    return paymentUrl;
  } catch (error: any) {
    console.error('Error creating Ozow payment:', error);
    throw error;
  }
};
