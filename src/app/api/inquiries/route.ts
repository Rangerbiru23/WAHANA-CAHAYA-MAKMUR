import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const propertyId = searchParams.get('propertyId')
    const status = searchParams.get('status')
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '10')

    const where: any = {}

    if (propertyId) {
      where.propertyId = propertyId
    }

    if (status) {
      where.status = status.toUpperCase()
    }

    const skip = (page - 1) * limit

    const [inquiries, total] = await Promise.all([
      db.inquiry.findMany({
        where,
        include: {
          property: {
            select: {
              id: true,
              title: true,
              type: true,
              price: true,
              address: true
            }
          },
          user: {
            select: {
              id: true,
              name: true,
              email: true
            }
          }
        },
        orderBy: {
          createdAt: 'desc'
        },
        skip,
        take: limit
      }),
      db.inquiry.count({ where })
    ])

    return NextResponse.json({
      success: true,
      data: inquiries,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit)
      }
    })
  } catch (error) {
    console.error('Error fetching inquiries:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to fetch inquiries' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    const {
      name,
      email,
      phone,
      message,
      propertyId,
      userId
    } = body

    // Validation
    if (!name || !email || !phone || !message || !propertyId) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Check if property exists
    const property = await db.property.findUnique({
      where: { id: propertyId }
    })

    if (!property) {
      return NextResponse.json(
        { success: false, error: 'Property not found' },
        { status: 404 }
      )
    }

    const inquiry = await db.inquiry.create({
      data: {
        name,
        email,
        phone,
        message,
        propertyId,
        userId: userId || null
      },
      include: {
        property: {
          select: {
            id: true,
            title: true,
            type: true,
            price: true,
            address: true,
            owner: {
              select: {
                id: true,
                name: true,
                email: true,
                phone: true
              }
            }
          }
        }
      }
    })

    return NextResponse.json({
      success: true,
      data: inquiry,
      message: 'Inquiry submitted successfully'
    })
  } catch (error) {
    console.error('Error creating inquiry:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to create inquiry' },
      { status: 500 }
    )
  }
}