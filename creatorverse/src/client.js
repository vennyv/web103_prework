import { createClient } from '@supabase/supabase-js';
const URL = 'https://njqpcnntojfuqmsbqxtb.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5qcXBjbm50b2pmdXFtc2JxeHRiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjUwNTc3OTUsImV4cCI6MjA0MDYzMzc5NX0.nA6v0-MAPvJChxbnVOeyfPgNMeUG_IU-fHBytM8_L20';
export const supabase = createClient(URL, API_KEY);
