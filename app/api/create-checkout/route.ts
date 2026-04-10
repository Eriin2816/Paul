import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2026-03-25.dahlia',
})

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { amount, fullName, email, address, city, state, zip, occupation, employer, message } = body

    if (!amount || amount <= 0) {
      return NextResponse.json({ error: 'Invalid donation amount.' }, { status: 400 })
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      customer_email: email,
      line_items: [
        {
          price_data: {
            currency: 'usd',
            unit_amount: Math.round(amount * 100), // cents
            product_data: {
              name: 'Campaign Contribution — Paul Harold Johnson',
              description: 'Ventura County Clerk-Recorder 2026',
            },
          },
          quantity: 1,
        },
      ],
      metadata: {
        fullName,
        address,
        city,
        state: state ?? 'CA',
        zip,
        occupation,
        employer,
        message: message ?? '',
      },
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL ?? 'https://paul-jet.vercel.app'}/?payment=success`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL ?? 'https://paul-jet.vercel.app'}/?payment=cancelled`,
    })

    return NextResponse.json({ url: session.url })
  } catch (err) {
    console.error('Stripe checkout error:', err)
    return NextResponse.json({ error: 'Failed to create checkout session.' }, { status: 500 })
  }
}
