import { NextRequest, NextResponse } from 'next/server'

interface ContactFormData {
  name: string
  email: string
  phone?: string
  budget?: string
  projectType?: string
  message?: string
}

export async function POST(request: NextRequest) {
  try {
    const data: ContactFormData = await request.json()

    // Validate required fields
    if (!data.name || !data.email) {
      return NextResponse.json(
        { error: 'Name and email are required' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Get Formspree ID from environment variable
    const formspreeId = process.env.FORMSPREE_ID

    if (!formspreeId) {
      // If no Formspree ID, log the submission (for development)
      console.log('Contact form submission:', data)

      return NextResponse.json(
        {
          success: true,
          message: 'Form received (Formspree not configured - check server logs)'
        },
        { status: 200 }
      )
    }

    // Send to Formspree
    const formspreeResponse = await fetch(`https://formspree.io/f/${formspreeId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        phone: data.phone || 'Not provided',
        budget: data.budget || 'Not specified',
        projectType: data.projectType || 'Not specified',
        message: data.message || 'No message provided',
        _subject: `New Lead from LMW Labs: ${data.name}`,
      }),
    })

    if (!formspreeResponse.ok) {
      throw new Error('Failed to submit to Formspree')
    }

    return NextResponse.json(
      { success: true, message: 'Form submitted successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to submit form. Please try again.' },
      { status: 500 }
    )
  }
}
