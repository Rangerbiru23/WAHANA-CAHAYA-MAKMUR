import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const type = searchParams.get('type')
    const status = searchParams.get('status')
    const featured = searchParams.get('featured')
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '10')
    const search = searchParams.get('search')

    const where: any = {}

    if (type) {
      where.type = type.toUpperCase()
    }

    if (status) {
      where.status = status.toUpperCase()
    }

    if (featured === 'true') {
      where.featured = true
    }

    if (search) {
      where.OR = [
        { title: { contains: search, mode: 'insensitive' } },
        { description: { contains: search, mode: 'insensitive' } },
        { address: { contains: search, mode: 'insensitive' } },
        { city: { contains: search, mode: 'insensitive' } }
      ]
    }

    const skip = (page - 1) * limit

    const [properties, total] = await Promise.all([
      db.property.findMany({
        where,
        include: {
          owner: {
            select: {
              id: true,
              name: true,
              email: true,
              phone: true
            }
          },
          _count: {
            select: {
              inquiries: true,
              reviews: true
            }
          }
        },
        orderBy: {
          createdAt: 'desc'
        },
        skip,
        take: limit
      }),
      db.property.count({ where })
    ])

    // Parse JSON strings for arrays
    const formattedProperties = properties.map(property => ({
      ...property,
      images: property.images ? JSON.parse(property.images) : [],
      facilities: property.facilities ? JSON.parse(property.facilities) : []
    }))

    return NextResponse.json({
      success: true,
      data: formattedProperties,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit)
      }
    })
  } catch (error) {
    console.error('Error fetching properties:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to fetch properties' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    const {
      title,
      description,
      type,
      price,
      priceType,
      address,
      city,
      province,
      postalCode,
      area,
      areaUnit,
      bedrooms,
      bathrooms,
      floors,
      yearBuilt,
      featured,
      images,
      facilities,
      ownerId
    } = body

    // Validation
    if (!title || !description || !type || !price || !address || !city || !province || !area || !ownerId) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      )
    }

    const property = await db.property.create({
      data: {
        title,
        description,
        type: type.toUpperCase(),
        price: parseFloat(price),
        priceType: priceType?.toUpperCase() || 'MONTHLY',
        address,
        city,
        province,
        postalCode,
        area: parseFloat(area),
        areaUnit: areaUnit || 'm²',
        bedrooms: bedrooms ? parseInt(bedrooms) : null,
        bathrooms: bathrooms ? parseInt(bathrooms) : null,
        floors: floors ? parseInt(floors) : null,
        yearBuilt: yearBuilt ? parseInt(yearBuilt) : null,
        featured: featured || false,
        images: images ? JSON.stringify(images) : null,
        facilities: facilities ? JSON.stringify(facilities) : null,
        ownerId
      },
      include: {
        owner: {
          select: {
            id: true,
            name: true,
            email: true,
            phone: true
          }
        }
      }
    })

    // Parse JSON strings for response
    const formattedProperty = {
      ...property,
      images: property.images ? JSON.parse(property.images) : [],
      facilities: property.facilities ? JSON.parse(property.facilities) : []
    }

    return NextResponse.json({
      success: true,
      data: formattedProperty
    })
  } catch (error) {
    console.error('Error creating property:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to create property' },
      { status: 500 }
    )
  }
}