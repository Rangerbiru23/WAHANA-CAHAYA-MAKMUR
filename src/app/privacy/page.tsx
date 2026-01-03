'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Shield, Eye, Database, Lock, UserCheck, Globe } from 'lucide-react'
import Link from 'next/link'

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-orange-500 rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">
                  CV WAHANA CAHAYA MAKMUR
                </h1>
                <p className="text-xs text-slate-500">Privacy Policy</p>
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
          <Shield className="w-16 h-16 mx-auto mb-6 text-white/80" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Kebijakan Privasi
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Perlindungan data dan privasi Anda adalah prioritas utama kami di CV WAHANA CAHAYA MAKMUR
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
                  <Eye className="w-6 h-6 mr-3 text-blue-600" />
                  Pendahuluan
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-slate-600">
                <p>
                  Selamat datang di Kebijakan Privasi <strong>CV WAHANA CAHAYA MAKMUR</strong>. 
                  Dokumen ini menjelaskan bagaimana kami mengumpulkan, menggunakan, melindungi, 
                  dan membagikan informasi pribadi Anda saat menggunakan layanan properti dan Meta Ads kami.
                </p>
                <p>
                  Dengan menggunakan layanan kami, Anda setuju dengan praktik-praktik yang dijelaskan 
                  dalam kebijakan privasi ini. Kami berkomitmen untuk melindungi privasi dan keamanan 
                  data pribadi Anda sesuai dengan peraturan perundang-undangan yang berlaku di Indonesia.
                </p>
              </CardContent>
            </Card>

            {/* Data Collection */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Database className="w-6 h-6 mr-3 text-orange-500" />
                  Informasi yang Kami Kumpulkan
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-3">Informasi Pribadi</h4>
                    <ul className="space-y-2 text-slate-600 text-sm">
                      <li>• Nama lengkap dan identitas diri</li>
                      <li>• Nomor telepon dan WhatsApp</li>
                      <li>• Alamat email yang valid</li>
                      <li>• Alamat tempat tinggal/kantor</li>
                      <li>• Nomor KTP/identitas resmi</li>
                      <li>• Informasi pekerjaan dan penghasilan</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-3">Informasi Properti</h4>
                    <ul className="space-y-2 text-slate-600 text-sm">
                      <li>• Preferensi lokasi properti</li>
                      <li>• Budget dan kemampuan finansial</li>
                      <li>• Riwayat pencarian properti</li>
                      <li>• Data interaksi dengan iklan Meta Ads</li>
                      <li>• Informasi kontak pemilik/pencari properti</li>
                      <li>• Dokumen transaksi properti</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Data Usage */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Globe className="w-6 h-6 mr-3 text-blue-600" />
                  Penggunaan Informasi
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-slate-600">
                <p>
                  Kami menggunakan informasi yang dikumpulkan untuk tujuan-tujuan berikut:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-blue-800 mb-2">Layanan Properti</h5>
                    <ul className="text-sm space-y-1">
                      <li>✓ Memfasilitasi pencarian properti</li>
                      <li>✓ Menghubungkan pemilik & penyewa</li>
                      <li>✓ Proses verifikasi dan validasi</li>
                      <li>✓ Manajemen transaksi properti</li>
                    </ul>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-orange-800 mb-2">Meta Ads Marketing</h5>
                    <ul className="text-sm space-y-1">
                      <li>✓ Targeting iklan yang relevan</li>
                      <li>✓ Analisis perilaku pengguna</li>
                      <li>✓ Optimasi kampanye iklan</li>
                      <li>✓ Pelaporan dan analitik</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Data Protection */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Lock className="w-6 h-6 mr-3 text-orange-500" />
                  Keamanan Data
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-slate-600">
                <p>
                  <strong>CV WAHANA CAHAYA MAKMUR</strong> mengimplementasikan berbagai langkah 
                  keamanan untuk melindungi informasi pribadi Anda:
                </p>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-green-600 text-xs font-bold">✓</span>
                    </div>
                    <div>
                      <strong>Enkripsi Data:</strong> Semua data pribadi dienkripsi menggunakan 
                      teknologi SSL/TLS selama transmisi dan penyimpanan.
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-green-600 text-xs font-bold">✓</span>
                    </div>
                    <div>
                      <strong>Akses Terbatas:</strong> Hanya personel yang berwenang yang dapat 
                      mengakses data pribadi Anda.
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-green-600 text-xs font-bold">✓</span>
                    </div>
                    <div>
                      <strong>Backup Rutin:</strong> Data di-backup secara rutin untuk mencegah 
                      kehilangan informasi.
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-green-600 text-xs font-bold">✓</span>
                    </div>
                    <div>
                      <strong>Update Keamanan:</strong> Sistem kami selalu diperbarui dengan 
                      patch keamanan terbaru.
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* User Rights */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <UserCheck className="w-6 h-6 mr-3 text-blue-600" />
                  Hak Anda sebagai Pengguna
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-slate-600">
                <p>
                  Sebagai pengguna layanan <strong>CV WAHANA CAHAYA MAKMUR</strong>, Anda memiliki 
                  hak-hak berikut terkait data pribadi Anda:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h5 className="font-semibold mb-2">Akses & Koreksi</h5>
                    <p className="text-sm">
                      Hak untuk mengakses, memperbarui, atau mengoreksi data pribadi Anda 
                      yang tersimpan dalam sistem kami.
                    </p>
                  </div>
                  <div className="border-l-4 border-orange-500 pl-4">
                    <h5 className="font-semibold mb-2">Penghapusan Data</h5>
                    <p className="text-sm">
                      Hak untuk meminta penghapusan data pribadi Anda ketika tidak lagi 
                      diperlukan untuk tujuan layanan.
                    </p>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h5 className="font-semibold mb-2">Penolakan Pemasaran</h5>
                    <p className="text-sm">
                      Hak untuk menolak menerima komunikasi pemasaran dari kami.
                    </p>
                  </div>
                  <div className="border-l-4 border-orange-500 pl-4">
                    <h5 className="font-semibold mb-2">Keluhan & Pelaporan</h5>
                    <p className="text-sm">
                      Hak untuk mengajukan keluhan tentang penanganan data pribadi Anda.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="bg-gradient-to-r from-blue-50 to-orange-50">
              <CardHeader>
                <CardTitle className="text-center">Hubungi Kami untuk Privasi</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center space-y-4">
                  <p className="text-slate-600">
                    Jika Anda memiliki pertanyaan atau kekhawatiran tentang kebijakan privasi kami, 
                    silakan hubungi tim privasi kami:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div className="bg-white p-4 rounded-lg">
                      <strong>Email Privasi:</strong><br />
                      privacy@wahanacahayamakmur.co.id
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <strong>Telepon:</strong><br />
                      0823-8246-6172
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded-lg text-sm">
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
                Kebijakan Privasi ini terakhir diperbarui pada: {new Date().toLocaleDateString('id-ID', { 
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