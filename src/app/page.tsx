"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function HomePage() {
  const services = [
    {
      title: "Sistem Informasi Amil Zakat",
      description: "Platform komprehensif untuk mengelola muzakki, mustahiq, dan perhitungan zakat secara otomatis",
      features: ["Manajemen Muzakki", "Database Mustahiq", "Perhitungan Otomatis", "Laporan Real-time"]
    },
    {
      title: "Dashboard Analytics",
      description: "Analisis data zakat dengan visualisasi interaktif untuk pengambilan keputusan yang tepat",
      features: ["Grafik Penerimaan", "Distribusi Zakat", "Trend Analysis", "Custom Reports"]
    },
    {
      title: "Mobile Integration",
      description: "Aplikasi mobile untuk memudahkan muzakki dalam pembayaran dan monitoring zakat",
      features: ["Payment Gateway", "Digital Receipt", "Notification", "History Tracking"]
    }
  ];

  const benefits = [
    {
      title: "Transparan & Akuntabel",
      description: "Sistem pelaporan yang transparan dengan audit trail lengkap untuk membangun kepercayaan muzakki"
    },
    {
      title: "Otomatis & Efisien", 
      description: "Perhitungan zakat otomatis sesuai nisab dan haul, mengurangi kesalahan manual"
    },
    {
      title: "Compliance Syariah",
      description: "Dikembangkan sesuai kaidah syariah dengan validasi dari ahli fiqh zakat"
    },
    {
      title: "Scalable Technology",
      description: "Infrastruktur cloud yang dapat berkembang seiring pertumbuhan lembaga zakat"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-50 to-emerald-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Sistem Informasi{" "}
                <span className="text-emerald-600">Amil Zakat</span>{" "}
                Terpercaya
              </h1>
              <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
                Solusi teknologi komprehensif untuk lembaga amil zakat di Indonesia. 
                Kelola muzakki, mustahiq, dan distribusi zakat dengan sistem yang 
                transparan, akuntabel, dan sesuai syariah.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button 
                  asChild
                  size="lg"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3"
                >
                  <Link href="/contact">Konsultasi Gratis</Link>
                </Button>
                <Button 
                  asChild
                  variant="outline" 
                  size="lg"
                  className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-8 py-3"
                >
                  <Link href="/portfolio">Lihat Portfolio</Link>
                </Button>
              </div>
              <div className="flex items-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  <span>100% Compliance Syariah</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  <span>Support 24/7</span>
                </div>
              </div>
            </div>
            <div className="lg:text-center">
              <div className="relative">
                <img
                  src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/c8524f9c-02e3-4f9d-95b6-0460e7305faf.png"
                  alt="Dashboard sistem informasi amil zakat yang modern dengan interface manajemen zakat terintegrasi"
                  className="rounded-2xl shadow-2xl"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.background = "linear-gradient(135deg, #10b981 0%, #059669 100%)";
                    target.style.display = "flex";
                    target.style.alignItems = "center";
                    target.style.justifyContent = "center";
                    target.style.color = "white";
                    target.style.fontSize = "18px";
                    target.style.fontWeight = "600";
                    target.innerHTML = "Sistem Informasi Zakat";
                  }}
                />
                <div className="absolute -bottom-4 -right-4 bg-white rounded-xl p-4 shadow-xl border">
                  <div className="text-2xl font-bold text-emerald-600">5+</div>
                  <div className="text-sm text-gray-600">Tahun Pengalaman</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Tentang Mevitu Nusa Persada
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-12">
            Sebagai perusahaan software development yang berlokasi di Gresik, Jawa Timur, 
            kami fokus pada pengembangan sistem informasi untuk lembaga amil zakat. 
            Dengan pengalaman bertahun-tahun, kami memahami kebutuhan unik pengelolaan zakat di Indonesia.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-emerald-600 rounded-full"></div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Lokasi Strategis</h3>
              <p className="text-gray-600">Berlokasi di Gresik, Jawa Timur, dekat dengan pusat kegiatan ekonomi dan keagamaan</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-emerald-600 rounded-full"></div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Expertise Syariah</h3>
              <p className="text-gray-600">Tim developer yang memahami fiqh zakat dan kebutuhan lembaga amil zakat</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-emerald-600 rounded-full"></div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Kontak Mudah</h3>
              <p className="text-gray-600">Hubungi kami di 085179979952 untuk konsultasi dan layanan terbaik</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Layanan Utama Kami
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Solusi teknologi lengkap untuk digitalisasi dan modernisasi pengelolaan zakat
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-xl text-emerald-700">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                        <span className="text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white">
              <Link href="/services">Lihat Semua Layanan</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Mengapa Memilih Kami?
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Keunggulan yang membuat sistem kami menjadi pilihan terbaik untuk lembaga amil zakat
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <div className="w-6 h-6 bg-emerald-600 rounded"></div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-emerald-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Siap Modernisasi Lembaga Zakat Anda?
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            Konsultasikan kebutuhan sistem informasi amil zakat Anda dengan tim expert kami. 
            Gratis konsultasi dan analisis kebutuhan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild
              size="lg" 
              className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-3"
            >
              <Link href="/contact">Hubungi Kami Sekarang</Link>
            </Button>
            <Button 
              asChild
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-emerald-700 px-8 py-3"
            >
              <a href={`https://wa.me/6285179979952?text=Halo, saya tertarik dengan sistem informasi zakat dari Mevitu Nusa Persada`}>
                WhatsApp: 085179979952
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}