import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const property = await db.property.findUnique({
      where: { id: params.id },
      include: {
        owner: {
          select: {
            id: true,
            name: true,
            email: true,
            phone: true
          }
        },
        inquiries: {
          include: {
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
          }
        },
        reviews: {
          include: {
            user: {
              select: {
                id: true,
                name: true
              }
            }
          },
          orderBy: {
            createdAt: 'desc'
          }
        }
      }
    })

    if (!property) {
      return NextResponse.json(
        { success: false, error: 'Property not found' },
        { status: 404 }
      )
    }

    // Parse JSON strings for arrays
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
    console.error('Error fetching property:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to fetch property' },
      { status: 500 }
    )
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json()
    
    const {
      title,
      description,
      type,
      status,
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
      facilities
    } = body

    const updateData: any = {}
    
    if (title !== undefined) updateData.title = title
    if (description !== undefined) updateData.description = description
    if (type !== undefined) updateData.type = type.toUpperCase()
    if (status !== undefined) updateData.status = status.toUpperCase()
    if (price !== undefined) updateData.price = parseFloat(price)
    if (priceType !== undefined) updateData.priceType = priceType.toUpperCase()
    if (address !== undefined) updateData.address = address
    if (city !== undefined) updateData.city = city
    if (province !== undefined) updateData.province = province
    if (postalCode !== undefined) updateData.postalCode = postalCode
    if (area !== undefined) updateData.area = parseFloat(area)
    if (areaUnit !== undefined) updateData.areaUnit = areaUnit
    if (bedrooms !== undefined) updateData.bedrooms = parseInt(bedrooms)
    if (bathrooms !== undefined) updateData.bathrooms = parseInt(bathrooms)
    if (floors !== undefined) updateData.floors = parseInt(floors)
    if (yearBuilt !== undefined) updateData.yearBuilt = parseInt(yearBuilt)
    if (featured !== undefined) updateData.featured = featured
    if (images !== undefined) updateData.images = JSON.stringify(images)
    if (facilities !== undefined) updateData.facilities = JSON.stringify(facilities)

    const property = await db.property.update({
      where: { id: params.id },
      data: updateData,
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
    console.error('Error updating property:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to update property' },
      { status: 500 }
    )
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await db.property.delete({
      where: { id: params.id }
    })

    return NextResponse.json({
      success: true,
      message: 'Property deleted successfully'
    })
  } catch (error) {
    console.error('Error deleting property:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to delete property' },
      { status: 500 }
    )
  }
}