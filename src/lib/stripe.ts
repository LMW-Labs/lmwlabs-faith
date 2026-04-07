import Stripe from 'stripe'

// Lazy-initialize so missing key doesn't crash the build — only throws at request time
export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY ?? '', {
  apiVersion: '2025-12-15.clover',
  typescript: true,
})

// Tier pricing configuration
// These will be replaced with actual Stripe Price IDs after you create products in Stripe Dashboard
export const TIER_PRICES = {
  'self-managed': {
    name: 'Self-Managed',
    setupMin: 250000, // $2,500 in cents
    setupMax: 400000, // $4,000 in cents
    monthly: 0,
    description: 'Full ownership website package',
  },
  'growth': {
    name: 'Growth',
    setupMin: 150000, // $1,500 in cents
    setupMax: 250000, // $2,500 in cents
    monthly: 10000, // $100 in cents
    description: 'Shared success website package with monthly service',
  },
  'authority': {
    name: 'Authority',
    setupMin: 50000, // $500 in cents
    setupMax: 100000, // $1,000 in cents
    monthly: 15000, // $150 in cents
    description: 'Full service website package with monthly service',
  },
} as const

export type TierKey = keyof typeof TIER_PRICES
