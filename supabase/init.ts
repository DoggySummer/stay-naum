import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
const supabase_url: string = process.env.NEXT_PUBLIC_SUPABASE_URL ?? ''
const supabase_anon_key: string =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? ''
const supabase = createClient(supabase_url, supabase_anon_key)

const { data, error } = await supabase.auth.signUp({
  email: 'example@emial.com',
  password: 'abcd1234!',
})

export default supabase
