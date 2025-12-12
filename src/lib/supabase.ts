import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export interface Project {
  id: string
  project_number: number | null
  province: string
  municipality: string | null
  closest_se: string | null
  se_available_power: number | null
  mvl_se_distance: number | null
  usable_surface: number | null
  selling_price: number | null
  unit_price: number | null
  renting_price: number | null
  pv_power: number | null
  bess_power: number | null
  land_contract_status: string | null
  peak_power: number | null
  access_capacity: number | null
  technology: string | null
  production: number | null
  administrative_status: string | null
  rtb_estimation: string | null
  cod_estimation: string | null
  created_at: string
  updated_at: string
}
