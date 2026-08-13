import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://niyhjbnfksouzqtczhjp.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5peWhqYm5ma3NvdXpxdGN6aGpwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODYxNzkzODksImV4cCI6MjEwMTc1NTM4OX0.kgur4dx5BO0-vOAvw9gGgd_IqQ9Rf487AJGCTq-GT4k';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);