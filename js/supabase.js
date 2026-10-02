// Supabase client for Local Shop Platform
// Safe to use in the browser: this is the public publishable key.
// Never put a Supabase service_role/secret key in frontend code.

const SUPABASE_URL = "https://nwldprughskrxpdysnus.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_utlhcD3BT12xypBS-8PjMA_YnHJl0X6";

if (!window.supabase) {
  throw new Error("Supabase JS library did not load.");
}

const { createClient } = window.supabase;

const supabaseClient = createClient(
  SUPABASE_URL,
  SUPABASE_PUBLISHABLE_KEY,
  {
    auth: {
      persistSession: true,
      autoRefreshToken: true,
      detectSessionInUrl: true
    }
  }
);
