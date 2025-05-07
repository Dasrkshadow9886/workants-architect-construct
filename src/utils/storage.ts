
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
