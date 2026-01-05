import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = "https://jndkjzwlpxyxitcfreqa.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpuZGtqendscHh5eGl0Y2ZyZXFhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU3MDI0MjUsImV4cCI6MjA3MTI3ODQyNX0.qTz8eg8cPAvfSx3W5UTiZiZVoLJJVcjn1kkwA1BbkBY";

export const supabaseClient = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
  auth: {
    storage: localStorage,
    persistSession: true,
    autoRefreshToken: true,
  }
});
