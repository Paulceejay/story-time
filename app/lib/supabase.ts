import "react-native-url-polyfill/auto";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://xnaqpjciuxuvlemnxfyw.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhuYXFwamNpdXh1dmxlbW54Znl3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg3OTU2MTgsImV4cCI6MjA2NDM3MTYxOH0.HCvhHf7IlAGLB-YRInWj4N0wsWfcTsrPVbzn-uApHcI";

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
