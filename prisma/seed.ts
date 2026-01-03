import { PrismaClient } from '@prisma/client'

const db = new PrismaClient()

async function main() {
  console.log('Start seeding...')

  // Create demo users
  const owner1 = await db.user.upsert({
    where: { email: 'owner1@wahanacahaya.com' },
    update: {},
    create: {
      email: 'owner1@wahanacahaya.com',
      name: 'Budi Santoso',
      phone: '08123456789',
      address: 'Jatiwaringin, Mauk, Tangerang',
      role: 'AGENT'
    }
  })

  const owner2 = await db.user.upsert({
    where: { email: 'owner2@wahanacahaya.com' },
    update: {},
    create: {
      email: 'owner2@wahanacahaya.com',
      name: 'Siti Nurhaliza',
      phone: '08234567890',
      address: 'Jalan Raya Mauk, Tangerang',
      role: 'AGENT'
    }
  })

  // Create demo properties
  const property1 = await db.property.create({
    data: {
      title: 'Rumah Modern Minimalis di Jatiwaringin',
      description: 'Rumah modern dengan desain minimalis, lokasi strategis di Jatiwaringin. Akses mudah ke jalan raya Mauk, dekat dengan fasilitas umum seperti sekolah, pasar, dan rumah sakit.',
      type: 'RUMAH',
      price: 45000000,
      priceType: 'YEARLY',
      address: 'Jl. Jatiwaringin No. 123',
      city: 'Tangerang',
      province: 'Banten',
      postalCode: '15510',
      area: 120,
      areaUnit: 'm²',
      bedrooms: 3,
      bathrooms: 2,
      floors: 1,
      yearBuilt: 2020,
      featured: true,
      images: JSON.stringify([
        '/api/placeholder/400/300',
        '/api/placeholder/400/301',
        '/api/placeholder/400/302'
      ]),
      facilities: JSON.stringify([
        'Carport',
        'Taman',
        'Dapur Bersih',
        'Ruang Keluarga',
        'Listrik 2200W',
        'PDAM'
      ]),
      ownerId: owner1.id
    }
  })

  const property2 = await db.property.create({
    data: {
      title: 'Ruko Strategis di Jalan Raya Mauk',
      description: 'Ruko 2 lantai dengan lokasi sangat strategis di jalan raya Mauk. Cocok untuk usaha retail, kantor, atau gudang kecil. Parkir luas dan akses mudah.',
      type: 'RUKO',
      price: 85000000,
      priceType: 'YEARLY',
      address: 'Jl. Raya Mauk No. 456',
      city: 'Tangerang',
      province: 'Banten',
      postalCode: '15520',
      area: 200,
      areaUnit: 'm²',
      bedrooms: 0,
      bathrooms: 4,
      floors: 2,
      yearBuilt: 2019,
      featured: true,
      images: JSON.stringify([
        '/api/placeholder/400/303',
        '/api/placeholder/400/304',
        '/api/placeholder/400/305'
      ]),
      facilities: JSON.stringify([
        'Parkir Luas',
        'Toilet Setiap Lantai',
        'Ruang Tamu',
        'Gudang Kecil',
        'Listrik 3500W',
        'Telpon Line'
      ]),
      ownerId: owner2.id
    }
  })

  const property3 = await db.property.create({
    data: {
      title: 'Tanah Kavling Hook di Mauk',
      description: 'Tanah kavling posisi hook dengan ukuran 500m². Sangat cocok untuk dibangun rumah tinggal atau ruko kecil. Lokasi berkembang dengan potensi investasi tinggi.',
      type: 'TANAH',
      price: 2500000,
      priceType: 'PER_METER',
      address: 'Perumahan Mauk Indah Blok A No. 1',
      city: 'Tangerang',
      province: 'Banten',
      postalCode: '15530',
      area: 500,
      areaUnit: 'm²',
      bedrooms: null,
      bathrooms: null,
      floors: null,
      yearBuilt: null,
      featured: false,
      images: JSON.stringify([
        '/api/placeholder/400/306',
        '/api/placeholder/400/307'
      ]),
      facilities: JSON.stringify([
        'Hook',
        'Jalan Lebar',
        'Bebas Banjir',
        'Dekat Jalan Utama'
      ]),
      ownerId: owner1.id
    }
  })

  const property4 = await db.property.create({
    data: {
      title: 'Apartemen Studio City Center',
      description: 'Apartemen studio fully furnished di pusat kota Tangerang. Fasilitas lengkap dengan kolam renang, gym, dan keamanan 24 jam. Dekat dengan mall dan transportasi publik.',
      type: 'APARTEMEN',
      price: 3500000,
      priceType: 'MONTHLY',
      address: 'Tangerang City Tower A No. 1506',
      city: 'Tangerang',
      province: 'Banten',
      postalCode: '15111',
      area: 28,
      areaUnit: 'm²',
      bedrooms: 1,
      bathrooms: 1,
      floors: null,
      yearBuilt: 2021,
      featured: false,
      images: JSON.stringify([
        '/api/placeholder/400/308',
        '/api/placeholder/400/309',
        '/api/placeholder/400/310'
      ]),
      facilities: JSON.stringify([
        'Fully Furnished',
        'AC',
        'WiFi',
        'Kulkas',
        'TV',
        'Access Card'
      ]),
      ownerId: owner2.id
    }
  })

  // Create some sample inquiries
  await db.inquiry.createMany({
    data: [
      {
        name: 'Ahmad Wijaya',
        email: 'ahmad@email.com',
        phone: '081234567890',
        message: 'Saya tertarik dengan rumah di Jatiwaringin. Apakah masih tersedia dan bisa saya lihat langsung?',
        propertyId: property1.id,
        status: 'PENDING'
      },
      {
        name: 'Rina Permata',
        email: 'rina@email.com',
        phone: '082345678901',
        message: 'Berapa harga sewa per bulan untuk ruko di Jalan Raya Mauk? Apakah ada nego?',
        propertyId: property2.id,
        status: 'RESPONDED'
      },
      {
        name: 'Budi Hartono',
        email: 'budi@email.com',
        phone: '083456789012',
        message: 'Apakah tanah kavling ini sudah bersertifikat SHM? Bagaimana cara pembayarannya?',
        propertyId: property3.id,
        status: 'RESOLVED'
      }
    ]
  })

  // Create some sample reviews
  await db.review.createMany({
    data: [
      {
        rating: 5,
        comment: 'Pelayanan sangat baik, properti sesuai dengan foto. Proses transaksi mudah dan cepat.',
        propertyId: property1.id,
        userId: owner2.id
      },
      {
        rating: 4,
        comment: 'Lokasi strategis, harga sesuai dengan kualitas. Komunikasi dengan agen sangat responsif.',
        propertyId: property2.id,
        userId: owner1.id
      },
      {
        rating: 5,
        comment: 'Tanah bagus, surat-surat lengkap. Cocok untuk investasi jangka panjang.',
        propertyId: property3.id,
        userId: owner2.id
      }
    ]
  })

  console.log('Seeding finished.')
}

main()
  .then(async () => {
    await db.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await db.$disconnect()
    process.exit(1)
  })