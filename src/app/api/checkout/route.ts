import { NextRequest, NextResponse } from 'next/server'
import { stripe, TIER_PRICES, TierKey } from '@/lib/stripe'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { tier, amount, customerEmail, customerName } = body

    // Validate tier
    if (!tier || !TIER_PRICES[tier as TierKey]) {
      return NextResponse.json(
        { error: 'Invalid tier specified' },
        { status: 400 }
      )
    }

    const tierConfig = TIER_PRICES[tier as TierKey]

    // Validate amount is within tier range
    const amountInCents = amount * 100
    if (amountInCents < tierConfig.setupMin || amountInCents > tierConfig.setupMax) {
      return NextResponse.json(
        { error: 'Amount outside valid range for this tier' },
        { status: 400 }
      )
    }

    const origin = request.headers.get('origin') || 'https://lmwlabs.faith'

    // Build line items
    const lineItems: any[] = [
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name: `${tierConfig.name} - Setup Fee`,
            description: tierConfig.description,
          },
          unit_amount: amountInCents,
        },
        quantity: 1,
      },
    ]

    // For Growth and Authority tiers, add monthly subscription
    // Note: For subscriptions, you'll need to create Price IDs in Stripe Dashboard
    // and use mode: 'subscription' with those price IDs instead

    const sessionConfig: any = {
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: 'payment',
      success_url: `${origin}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/checkout/cancel`,
      customer_email: customerEmail || undefined,
      metadata: {
        tier,
        customerName: customerName || '',
        setupAmount: amount.toString(),
      },
    }

    const session = await stripe.checkout.sessions.create(sessionConfig)

    return NextResponse.json({
      sessionId: session.id,
      url: session.url
    })
  } catch (error: any) {
    console.error('Stripe checkout error:', error)
    return NextResponse.json(
      { error: error.message || 'Failed to create checkout session' },
      { status: 500 }
    )
  }
}
