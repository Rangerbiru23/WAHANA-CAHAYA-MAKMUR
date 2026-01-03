'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Phone, Mail, MapPin, Building2, TrendingUp, Home, Search, Star, ArrowRight, Facebook, Instagram, MessageCircle, CheckCircle, AlertCircle } from 'lucide-react'
import Link from 'next/link'

export default function HomePage() {
  const [activeTab, setActiveTab] = useState('sewa')
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [submitMessage, setSubmitMessage] = useState('')

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    setSubmitMessage('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contactForm),
      })

      const data = await response.json()

      if (data.success) {
        setSubmitStatus('success')
        setSubmitMessage(data.message)
        setContactForm({ name: '', email: '', phone: '', message: '' })
      } else {
        setSubmitStatus('error')
        setSubmitMessage(data.error || 'Terjadi kesalahan. Silakan coba lagi.')
      }
    } catch (error) {
      setSubmitStatus('error')
      setSubmitMessage('Terjadi kesalahan jaringan. Silakan coba lagi.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setContactForm({
      ...contactForm,
      [e.target.name]: e.target.value
    })
  }

  const featuredProperties = [
    {
      id: 1,
      title: "Rumah Modern di Tangerang",
      type: "Rumah",
      location: "Mauk, Tangerang",
      price: "Rp 45 Juta/Tahun",
      image: "/api/placeholder/400/300",
      features: ["3 Kamar Tidur", "2 Kamar Mandi", "Garasi", "Taman"],
      rating: 4.8
    },
    {
      id: 2,
      title: "Ruko Strategis",
      type: "Ruko",
      location: "Jatiwaringin, Tangerang",
      price: "Rp 85 Juta/Tahun",
      image: "/api/placeholder/400/300",
      features: ["2 Lantai", "4 Kamar Mandi", "Parkir Luas"],
      rating: 4.9
    },
    {
      id: 3,
      title: "Tanah Komersial",
      type: "Tanah",
      location: "Jalan Raya Mauk",
      price: "Rp 2.5 Juta/m²",
      image: "/api/placeholder/400/300",
      features: ["500m²", "Hook", "Strategis"],
      rating: 4.7
    }
  ]

  const services = [
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Penyewaan Properti",
      description: "Solusi sewa properti terpercaya dengan harga kompetitif dan lokasi strategis"
    },
    {
      icon: <Home className="w-8 h-8" />,
      title: "Jual Beli Properti",
      description: "Transaksi jual beli properti aman, cepat, dan transparan"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Meta Ads Marketing",
      description: "Promosi properti efektif melalui Meta Ads untuk jangkauan luas"
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "Konsultasi Properti",
      description: "Konsultasi gratis untuk menemukan properti sesuai kebutuhan Anda"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-orange-500 rounded-lg flex items-center justify-center">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">
                  CV WAHANA CAHAYA MAKMUR
                </h1>
                <p className="text-xs text-slate-500">Properti & Meta Ads Solutions</p>
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-6">
              <Link href="#beranda" className="text-slate-700 hover:text-blue-600 transition-colors">Beranda</Link>
              <Link href="#properti" className="text-slate-700 hover:text-blue-600 transition-colors">Properti</Link>
              <Link href="#layanan" className="text-slate-700 hover:text-blue-600 transition-colors">Layanan</Link>
              <Link href="#tentang" className="text-slate-700 hover:text-blue-600 transition-colors">Tentang</Link>
              <Link href="#kontak" className="text-slate-700 hover:text-blue-600 transition-colors">Kontak</Link>
              <Button className="bg-gradient-to-r from-blue-600 to-orange-500 hover:from-blue-700 hover:to-orange-600">
                Hubungi Kami
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="beranda" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-orange-500/90 z-10"></div>
        <div className="absolute inset-0">
          <img src="/api/placeholder/1920/800" alt="Property Background" className="w-full h-full object-cover" />
        </div>
        
        <div className="relative z-20 container mx-auto px-4 py-24 md:py-32">
          <div className="max-w-3xl text-white">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              🏆 Terpercaya Sejak 2020
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="block">CV WAHANA CAHAYA MAKMUR</span>
              <span className="text-2xl md:text-3xl font-light mt-2 block text-orange-200">
                Solusi Properti & Digital Marketing Terpadu
              </span>
            </h1>
            <p className="text-lg md:text-xl mb-8 text-blue-50">
              Penyewaan dan penjualan properti terpercaya di Tangerang. 
              Didukung dengan Meta Ads marketing untuk jangkauan maksimal.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                <Search className="w-5 h-5 mr-2" />
                Cari Properti
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                <TrendingUp className="w-5 h-5 mr-2" />
                Meta Ads Services
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">150+</div>
              <div className="text-slate-600">Properti Terjual</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-500 mb-2">200+</div>
              <div className="text-slate-600">Properti Disewakan</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-slate-600">Klien Puas</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-500 mb-2">5+</div>
              <div className="text-slate-600">Tahun Pengalaman</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section id="properti" className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Properti <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">Unggulan</span>
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Temukan properti terbaik di Tangerang dengan harga kompetitif dan lokasi strategis
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-8">
            <div className="bg-white rounded-lg p-1 shadow-sm">
              <button
                onClick={() => setActiveTab('sewa')}
                className={`px-6 py-2 rounded-md transition-all ${
                  activeTab === 'sewa' 
                    ? 'bg-gradient-to-r from-blue-600 to-orange-500 text-white' 
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Disewakan
              </button>
              <button
                onClick={() => setActiveTab('jual')}
                className={`px-6 py-2 rounded-md transition-all ${
                  activeTab === 'jual' 
                    ? 'bg-gradient-to-r from-blue-600 to-orange-500 text-white' 
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Dijual
              </button>
            </div>
          </div>

          {/* Property Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProperties.map((property) => (
              <Card key={property.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img src={property.image} alt={property.title} className="w-full h-48 object-cover" />
                  <Badge className="absolute top-4 left-4 bg-blue-600">
                    {property.type}
                  </Badge>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center">
                    <Star className="w-4 h-4 text-yellow-500 mr-1" />
                    <span className="text-sm font-medium">{property.rating}</span>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{property.title}</CardTitle>
                  <CardDescription className="flex items-center text-slate-600">
                    <MapPin className="w-4 h-4 mr-1" />
                    {property.location}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-xl font-bold text-blue-600 mb-3">{property.price}</div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {property.features.map((feature, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-orange-500 hover:from-blue-700 hover:to-orange-600">
                    Lihat Detail
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="layanan" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Layanan <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">Unggulan</span>
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Solusi lengkap untuk kebutuhan properti dan digital marketing Anda
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, idx) => (
              <Card key={idx} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-gradient-to-r from-blue-600 to-orange-500 rounded-full flex items-center justify-center text-white mb-4">
                    {service.icon}
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 text-sm">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="tentang" className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Mengapa Memilih <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">CV WAHANA CAHAYA MAKMUR</span>
              </h2>
              <div className="space-y-4 text-slate-600">
                <p>
                  Sebagai perusahaan properti terpercaya di Tangerang, kami berkomitmen untuk memberikan 
                  layanan terbaik dalam penyewaan dan penjualan properti.
                </p>
                <p>
                  Dengan dukungan Meta Ads marketing, kami memastikan properti Anda mendapatkan eksposur 
                  maksimal dan menjangkau calon pembeli/penyewa yang tepat.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    Tim profesional berpengalaman
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                    Harga kompetitif dan transparan
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    Lokasi strategis di Tangerang
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                    Digital marketing dengan Meta Ads
                  </li>
                </ul>
              </div>
            </div>
            <div className="relative">
              <img src="/api/placeholder/600/400" alt="About Us" className="rounded-lg shadow-lg" />
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-blue-600 to-orange-500 text-white p-6 rounded-lg">
                <div className="text-3xl font-bold">5+</div>
                <div className="text-sm">Tahun Pengalaman</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontak" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Hubungi <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">Kami</span>
            </h2>
            <p className="text-slate-600">Siap membantu menemukan properti impian Anda</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Informasi Kontak</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <Building2 className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <div className="font-medium">CV WAHANA CAHAYA MAKMUR</div>
                      <div className="text-sm text-slate-600">Properti & Meta Ads Solutions</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-orange-600" />
                    </div>
                    <div>
                      <div className="font-medium">Alamat</div>
                      <div className="text-sm text-slate-600">
                        Jalan Raya Mauk, Desa/Kelurahan Jatiwaringin, 
                        Kec. Mauk, Kab. Tangerang, Prov. Banten
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <Phone className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <div className="font-medium">Telepon</div>
                      <div className="text-sm text-slate-600">0823-8246-6172</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                      <Mail className="w-5 h-5 text-orange-600" />
                    </div>
                    <div>
                      <div className="font-medium">Email</div>
                      <div className="text-sm text-slate-600">wahanacahayamakmur@outlook.co.id</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="mt-6">
                <h3 className="font-medium mb-3">Ikuti Kami</h3>
                <div className="flex space-x-3">
                  <Button variant="outline" size="sm">
                    <Facebook className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="sm">
                    <Instagram className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="sm">
                    <MessageCircle className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Kirim Pesan</CardTitle>
                <CardDescription>Tim kami akan segera menghubungi Anda</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4" onSubmit={handleContactSubmit}>
                  {submitStatus !== 'idle' && (
                    <div className={`p-4 rounded-lg flex items-center space-x-2 ${
                      submitStatus === 'success' 
                        ? 'bg-green-50 text-green-700 border border-green-200' 
                        : 'bg-red-50 text-red-700 border border-red-200'
                    }`}>
                      {submitStatus === 'success' ? (
                        <CheckCircle className="w-5 h-5 flex-shrink-0" />
                      ) : (
                        <AlertCircle className="w-5 h-5 flex-shrink-0" />
                      )}
                      <span className="text-sm">{submitMessage}</span>
                    </div>
                  )}
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">Nama Lengkap</label>
                      <input 
                        type="text" 
                        name="name"
                        value={contactForm.name}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Nama Anda"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Nomor Telepon</label>
                      <input 
                        type="tel" 
                        name="phone"
                        value={contactForm.phone}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="08xx-xxxx-xxxx"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Email</label>
                    <input 
                      type="email" 
                      name="email"
                      value={contactForm.email}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="email@example.com"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Pesan</label>
                    <textarea 
                      name="message"
                      value={contactForm.message}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      rows={4}
                      placeholder="Ceritakan kebutuhan properti Anda..."
                      required
                    ></textarea>
                  </div>
                  <Button 
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-orange-500 hover:from-blue-700 hover:to-orange-600"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Mengirim...' : 'Kirim Pesan'}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-orange-500 rounded-lg flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-bold">CV WAHANA CAHAYA MAKMUR</h3>
                  <p className="text-xs text-slate-400">Properti & Meta Ads</p>
                </div>
              </div>
              <p className="text-slate-400 text-sm">
                Solusi terpercaya untuk kebutuhan properti dan digital marketing Anda.
              </p>
            </div>
            
            <div>
              <h4 className="font-medium mb-4">Layanan</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><Link href="#" className="hover:text-white transition-colors">Penyewaan Properti</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Jual Beli Properti</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Meta Ads Marketing</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Konsultasi Properti</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium mb-4">Perusahaan</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><Link href="#" className="hover:text-white transition-colors">Tentang Kami</Link></li>
                <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Karir</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium mb-4">Newsletter</h4>
              <p className="text-slate-400 text-sm mb-4">
                Dapatkan info properti terbaru dan promo menarik
              </p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Email Anda"
                  className="flex-1 px-3 py-2 bg-slate-800 border border-slate-700 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                />
                <Button className="bg-gradient-to-r from-blue-600 to-orange-500 rounded-l-none">
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400 text-sm">
            <p>&copy; 2024 CV WAHANA CAHAYA MAKMUR. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}