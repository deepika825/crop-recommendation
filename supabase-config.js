// Supabase Configuration
const SUPABASE_URL = 'https://insukneerswqxrbvecql.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imluc3VrbmVlcnN3cXhyYnZlY3FsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ4MjQ1MjEsImV4cCI6MjA4MDQwMDUyMX0.2-1I54SEid6wLaKRCOLIysFdM__Sb-XQKlTGjwgJcQI';

// Initialize Supabase client
let supabase;

try {
    supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY, {
        auth: {
            autoRefreshToken: true,
            persistSession: true,
            detectSessionInUrl: true,
            storage: window.localStorage
        }
    });
    console.log('Supabase client initialized successfully');
    window.supabaseClient = supabase;
} catch (error) {
    console.error('Error initializing Supabase client:', error);
    window.supabaseClient = null;
}
