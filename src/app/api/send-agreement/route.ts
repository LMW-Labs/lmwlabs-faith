import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function POST(request: NextRequest) {
  // Initialize Resend inside the handler to avoid build-time errors
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    return NextResponse.json(
      { error: 'Email service not configured. Please add RESEND_API_KEY to environment variables.' },
      { status: 500 }
    )
  }

  const resend = new Resend(apiKey)
  try {
    const body = await request.json()
    const {
      clientEmail,
      clientName,
      businessName,
      agreementLink,
      mode, // 'quote' or 'agreement'
      tier,
      amount
    } = body

    // Validate required fields
    if (!clientEmail || !agreementLink) {
      return NextResponse.json(
        { error: 'Missing required fields: clientEmail and agreementLink are required' },
        { status: 400 }
      )
    }

    const isQuote = mode === 'quote'
    const documentType = isQuote ? 'Quote' : 'Agreement'
    const tierDisplay = tier === 'custom' ? 'Custom Build' :
                        tier === 'self-managed' ? 'Self-Managed' :
                        tier === 'growth' ? 'Growth' :
                        tier === 'authority' ? 'Authority' : tier

    const subject = isQuote
      ? `Your Website Project Quote from LMW Labs`
      : `Website Project Agreement Ready for Signature - LMW Labs`

    const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${documentType} from LMW Labs</title>
</head>
<body style="margin: 0; padding: 0; background-color: #0a0a0f; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
  <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #0a0a0f;">
    <tr>
      <td style="padding: 40px 20px;">
        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="600" style="margin: 0 auto; max-width: 600px;">

          <!-- Header -->
          <tr>
            <td style="text-align: center; padding-bottom: 30px;">
              <h1 style="margin: 0; font-size: 28px; font-weight: 700; color: #ffffff;">
                <span style="color: #5f6ff1;">LMW</span> Labs
              </h1>
              <p style="margin: 8px 0 0; color: #9ca3af; font-size: 14px;">AI-Powered Development Studio</p>
            </td>
          </tr>

          <!-- Main Card -->
          <tr>
            <td style="background: linear-gradient(135deg, rgba(26, 26, 46, 0.9), rgba(30, 30, 75, 0.9)); border-radius: 16px; padding: 40px; border: 1px solid rgba(127, 149, 248, 0.2);">

              <!-- Greeting -->
              <h2 style="margin: 0 0 16px; font-size: 24px; font-weight: 600; color: #ffffff;">
                Hi ${clientName || 'there'},
              </h2>

              <p style="margin: 0 0 24px; font-size: 16px; line-height: 1.6; color: #d1d5db;">
                ${isQuote
                  ? `Thank you for your interest in working with LMW Labs! We've prepared a detailed quote for your ${businessName ? businessName + ' ' : ''}website project.`
                  : `Your website project agreement is ready for review and signature. Please take a moment to review the details and sign when you're ready to proceed.`
                }
              </p>

              <!-- Project Details Box -->
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: rgba(95, 111, 241, 0.1); border-radius: 12px; margin-bottom: 24px;">
                <tr>
                  <td style="padding: 20px;">
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                      <tr>
                        <td style="padding: 8px 0;">
                          <span style="color: #9ca3af; font-size: 14px;">Package:</span>
                          <span style="color: #fbbf24; font-size: 14px; font-weight: 600; float: right;">${tierDisplay}</span>
                        </td>
                      </tr>
                      ${amount ? `
                      <tr>
                        <td style="padding: 8px 0; border-top: 1px solid rgba(127, 149, 248, 0.1);">
                          <span style="color: #9ca3af; font-size: 14px;">Investment:</span>
                          <span style="color: #22c55e; font-size: 14px; font-weight: 600; float: right;">$${parseFloat(amount).toLocaleString()}</span>
                        </td>
                      </tr>
                      ` : ''}
                      <tr>
                        <td style="padding: 8px 0; border-top: 1px solid rgba(127, 149, 248, 0.1);">
                          <span style="color: #9ca3af; font-size: 14px;">Document Type:</span>
                          <span style="color: #ffffff; font-size: 14px; font-weight: 500; float: right;">${documentType}</span>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <!-- CTA Button -->
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                <tr>
                  <td style="text-align: center; padding: 8px 0 24px;">
                    <a href="${agreementLink}" style="display: inline-block; background: linear-gradient(135deg, #fbbf24, #f59e0b); color: #1e1e4b; font-size: 16px; font-weight: 600; text-decoration: none; padding: 14px 32px; border-radius: 8px;">
                      ${isQuote ? 'View Your Quote' : 'Review & Sign Agreement'}
                    </a>
                  </td>
                </tr>
              </table>

              <p style="margin: 0; font-size: 14px; line-height: 1.6; color: #9ca3af; text-align: center;">
                ${isQuote
                  ? 'This quote is valid for 30 days. If you have any questions, feel free to reply to this email.'
                  : 'If you have any questions before signing, please don\'t hesitate to reach out.'
                }
              </p>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding: 30px 20px; text-align: center;">
              <p style="margin: 0 0 8px; font-size: 14px; color: #6b7280;">
                LMW Labs LLC • Brandon, Mississippi
              </p>
              <p style="margin: 0; font-size: 12px; color: #4b5563;">
                <a href="https://lmwlabs.faith" style="color: #7f95f8; text-decoration: none;">lmwlabs.faith</a>
                &nbsp;•&nbsp;
                <a href="mailto:info@lmwlabs.faith" style="color: #7f95f8; text-decoration: none;">info@lmwlabs.faith</a>
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
    `

    const textContent = `
Hi ${clientName || 'there'},

${isQuote
  ? `Thank you for your interest in working with LMW Labs! We've prepared a detailed quote for your ${businessName ? businessName + ' ' : ''}website project.`
  : `Your website project agreement is ready for review and signature.`
}

Package: ${tierDisplay}
${amount ? `Investment: $${parseFloat(amount).toLocaleString()}` : ''}
Document Type: ${documentType}

${isQuote ? 'View Your Quote' : 'Review & Sign Agreement'}: ${agreementLink}

${isQuote
  ? 'This quote is valid for 30 days. If you have any questions, feel free to reply to this email.'
  : 'If you have any questions before signing, please don\'t hesitate to reach out.'
}

---
LMW Labs LLC
Brandon, Mississippi
https://lmwlabs.faith
info@lmwlabs.faith
    `

    const { data, error } = await resend.emails.send({
      from: 'LMW Labs <noreply@lmwlabs.faith>',
      to: [clientEmail],
      subject: subject,
      html: htmlContent,
      text: textContent,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json(
        { error: error.message || 'Failed to send email' },
        { status: 500 }
      )
    }

    return NextResponse.json({
      success: true,
      messageId: data?.id,
      message: `${documentType} email sent successfully to ${clientEmail}`
    })

  } catch (error: any) {
    console.error('Email sending error:', error)
    return NextResponse.json(
      { error: error.message || 'Failed to send email' },
      { status: 500 }
    )
  }
}
