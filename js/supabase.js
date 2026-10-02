// Supabase client configuration
const SUPABASE_URL = "https://nwldprughskrxpdysnus.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_utlhcD3BT12xypBS-8PjMA_YnHJl0X6";

const { createClient } = window.supabase;
const supabaseClient = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);
