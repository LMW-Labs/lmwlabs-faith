import { createClient, SupabaseClient } from '@supabase/supabase-js'

let _client: SupabaseClient | null = null

export function getFaithfeedSupabase(): SupabaseClient {
  if (!_client) {
    const url = process.env.FAITHFEED_SUPABASE_URL ?? ''
    const key = process.env.FAITHFEED_SUPABASE_ANON_KEY ?? ''
    _client = createClient(url, key)
  }
  return _client
}
