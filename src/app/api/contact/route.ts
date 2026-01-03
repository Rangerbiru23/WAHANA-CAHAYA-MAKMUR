import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    const {
      name,
      email,
      phone,
      subject,
      message,
      propertyInterest
    } = body

    // Validation
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Create a contact record (you could also create a separate Contact model)
    // For now, we'll just return success and you can implement email sending or database storage
    
    const contactData = {
      name,
      email,
      phone,
      subject: subject || 'General Inquiry',
      message,
      propertyInterest: propertyInterest || null,
      submittedAt: new Date().toISOString()
    }

    // Here you would typically:
    // 1. Save to database
    // 2. Send email notification
    // 3. Send confirmation email to user
    // 4. Log the contact attempt

    console.log('New contact form submission:', contactData)

    // For demo purposes, we'll just return success
    return NextResponse.json({
      success: true,
      message: 'Pesan Anda telah terkirim! Tim kami akan segera menghubungi Anda.',
      data: {
        id: `contact_${Date.now()}`,
        ...contactData
      }
    })

  } catch (error) {
    console.error('Error processing contact form:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to process your request. Please try again.' },
      { status: 500 }
    )
  }
}