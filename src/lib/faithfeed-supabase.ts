import { createClient } from '@supabase/supabase-js'

const url = process.env.FAITHFEED_SUPABASE_URL!
const key = process.env.FAITHFEED_SUPABASE_ANON_KEY!

export const faithfeedSupabase = createClient(url, key)
