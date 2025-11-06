import { createClient } from '@supabase/supabase-js'

const URL = 'https://zsbczutmhfccizlfbdzj.supabase.co'
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpzYmN6dXRtaGZjY2l6bGZiZHpqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjIzNzc2NjksImV4cCI6MjA3Nzk1MzY2OX0.w5mhCY_QEuVh7wDccfrJLnNyQD8HJuBIVBLQr3kd5j4'

export const supabase = createClient(URL, API_KEY)