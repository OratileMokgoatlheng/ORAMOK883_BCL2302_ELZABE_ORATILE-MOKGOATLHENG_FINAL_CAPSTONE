
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://slxudijoueehykwnmhjv.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNseHVkaWpvdWVlaHlrd25taGp2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTExMDcxMzYsImV4cCI6MjAwNjY4MzEzNn0.vyv2NiT5cloQrJU1_GYAl-_Oovf2RfRobEh9W4NKO-8'
export const supabase = createClient(supabaseUrl, supabaseKey)

