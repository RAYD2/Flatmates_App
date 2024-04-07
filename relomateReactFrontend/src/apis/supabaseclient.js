// supabaseClient.js
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://folkgobawpbterfitlma.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZvbGtnb2Jhd3BidGVyZml0bG1hIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTE2MjA0NTAsImV4cCI6MjAyNzE5NjQ1MH0.8gHRBa5JVkL0fSIBCRh06dAvDfJRgrKq8o0iRoD8yaY"
);

export default supabase;
