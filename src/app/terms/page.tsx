'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowLeft, FileText, Building2, Users, Gavel, AlertCircle, CheckCircle, Scale } from 'lucide-react'
import Link from 'next/link'

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-orange-500 rounded-lg flex items-center justify-center">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">
                  CV WAHANA CAHAYA MAKMUR
                </h1>
                <p className="text-xs text-slate-500">Syarat & Ketentuan</p>
              </div>
            </div>
            
            <Link href="/">
              <Button variant="outline" className="border-slate-300">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Kembali ke Beranda
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-orange-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <Gavel className="w-16 h-16 mx-auto mb-6 text-white/80" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Syarat & Ketentuan
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Ketentuan penggunaan layanan properti dan Meta Ads di CV WAHANA CAHAYA MAKMUR
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-8">
            {/* Introduction */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="w-6 h-6 mr-3 text-blue-600" />
                  Pendahuluan & Penerimaan
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-slate-600">
                <p>
                  Selamat datang di <strong>CV WAHANA CAHAYA MAKMUR</strong>. 
                  Dokumen Syarat & Ketentuan ini mengatur penggunaan layanan 
                  penyewaan, penjualan properti, dan jasa Meta Ads yang kami sediakan.
                </p>
                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                  <p className="text-sm">
                    <strong>Dengan mengakses atau menggunakan layanan kami, Anda secara tegas 
                    menyetujui dan terikat oleh Perjanjian ini.</strong> Jika Anda tidak setuju 
                    dengan bagian manapun dari Perjanjian ini, Anda tidak boleh menggunakan layanan kami.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Company Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Building2 className="w-6 h-6 mr-3 text-orange-500" />
                  Informasi Perusahaan
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-slate-600">
                <div className="bg-slate-50 p-4 rounded-lg">
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <strong>Nama Perusahaan:</strong><br />
                      CV WAHANA CAHAYA MAKMUR
                    </div>
                    <div>
                      <strong>Bidang Usaha:</strong><br />
                      Penyewaan dan Penjualan Properti
                    </div>
                    <div>
                      <strong>Alamat:</strong><br />
                      Jalan Raya Mauk, Desa/Kelurahan Jatiwaringin, 
                      Kec. Mauk, Kab. Tangerang, Prov. Banten
                    </div>
                    <div>
                      <strong>Kontak:</strong><br />
                      Telepon: 0823-8246-6172<br />
                      Email: wahanacahayamakmur@outlook.co.id
                    </div>
                  </div>
                </div>
                <p>
                  Perusahaan beroperasi secara sah sesuai dengan peraturan perundang-undangan 
                  yang berlaku di Republik Indonesia dan memiliki izin usaha yang lengkap.
                </p>
              </CardContent>
            </Card>

            {/* Services */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="w-6 h-6 mr-3 text-blue-600" />
                  Layanan yang Kami Sediakan
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-3">Layanan Properti</h4>
                    <ul className="space-y-2 text-slate-600 text-sm">
                      <li>• Penyewaan properti (rumah, ruko, tanah, dll)</li>
                      <li>• Penjualan properti dengan harga kompetitif</li>
                      <li>• Konsultasi dan advisory properti</li>
                      <li>• Manajemen properti dan pemeliharaan</li>
                      <li>• Legal documentation dan perizinan</li>
                      <li>• Survei lokasi dan due diligence</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-3">Layanan Meta Ads</h4>
                    <ul className="space-y-2 text-slate-600 text-sm">
                      <li>• Pembuatan dan pengelolaan iklan properti</li>
                      <li>• Targeting audience yang tepat sasaran</li>
                      <li>• Analisis dan optimasi kampanye</li>
                      <li>• Pelaporan performa iklan</li>
                      <li>• Budget management dan ROI optimization</li>
                      <li>• Content creation untuk marketing properti</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* User Responsibilities */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="w-6 h-6 mr-3 text-orange-500" />
                  Kewajiban Pengguna
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-slate-600">
                <p>
                  Sebagai pengguna layanan <strong>CV WAHANA CAHAYA MAKMUR</strong>, Anda setuju untuk:
                </p>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong>Informasi Akurat:</strong> Memberikan informasi yang benar, 
                      lengkap, dan terkini tentang identitas dan kebutuhan properti Anda.
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong>Kepatuhan Hukum:</strong> Mematuhi semua peraturan perundang-undangan 
                      yang berlaku terkait transaksi properti di Indonesia.
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong>Pembayaran Tepat Waktu:</strong> Melakukan pembayaran biaya layanan, 
                      sewa, atau pembelian properti sesuai dengan kesepakatan.
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong>Respect Property:</strong> Merawat dan menjaga properti yang disewa 
                      dengan baik dan bertanggung jawab.
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong>Kerjasama:</strong> Bekerja sama dengan tim kami dalam proses 
                      verifikasi, survei, dan dokumentasi.
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card>
              <CardHeader>
                <CardTitle className="text-center">Hubungi Kami</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center space-y-4">
                  <p className="text-slate-600">
                    Untuk pertanyaan atau klarifikasi mengenai Syarat & Ketentuan ini, 
                    silakan hubungi tim legal kami:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div className="bg-slate-50 p-4 rounded-lg">
                      <strong>Email Legal:</strong><br />
                      legal@wahanacahayamakmur.co.id
                    </div>
                    <div className="bg-slate-50 p-4 rounded-lg">
                      <strong>Telepon:</strong><br />
                      0823-8246-6172
                    </div>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-lg text-sm">
                    <strong>Alamat Kantor:</strong><br />
                    Jalan Raya Mauk, Desa/Kelurahan Jatiwaringin, 
                    Kec. Mauk, Kab. Tangerang, Prov. Banten
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Last Updated */}
            <div className="text-center py-8 border-t">
              <p className="text-slate-500 text-sm">
                Syarat & Ketentuan ini terakhir diperbarui pada: {new Date().toLocaleDateString('id-ID', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </p>
              <p className="text-slate-400 text-xs mt-2">
                © 2024 CV WAHANA CAHAYA MAKMUR. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}