"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function ServicesPage() {
  const mainServices = [
    {
      title: "Sistem Informasi Amil Zakat Komprehensif",
      description: "Platform end-to-end untuk pengelolaan zakat yang mencakup seluruh aspek operasional lembaga amil zakat",
      price: "Custom Quote",
      features: [
        "Manajemen Database Muzakki",
        "Registrasi & Profiling Mustahiq",
        "Perhitungan Zakat Otomatis (Mal, Fitrah, Profesi)",
        "Sistem Penerimaan Multi-Channel",
        "Distribusi & Penyaluran Zakat",
        "Laporan Keuangan Real-time",
        "Audit Trail Lengkap",
        "Dashboard Executive",
        "Mobile App Integration",
        "API Integration"
      ],
      technologies: ["Next.js", "PostgreSQL", "Node.js", "React Native", "Cloud Infrastructure"],
      deliverables: "Web App + Mobile App + Admin Dashboard + Training"
    },
    {
      title: "Dashboard Analytics & Business Intelligence",
      description: "Sistem analisis data zakat dengan visualisasi interaktif untuk insight dan pengambilan keputusan strategis",
      price: "Mulai 15jt",
      features: [
        "Grafik Penerimaan Zakat Multi-Periode",
        "Analisis Distribusi per Kategori Mustahiq",
        "Trend Analysis & Forecasting",
        "Geographic Distribution Mapping",
        "Performance Metrics KPI",
        "Custom Report Builder",
        "Export Multi-Format",
        "Automated Reporting",
        "Data Warehouse Integration"
      ],
      technologies: ["Power BI", "Tableau", "Python", "R", "SQL Server"],
      deliverables: "Dashboard Web + Mobile View + Report Templates"
    },
    {
      title: "Mobile App Muzakki & Mustahiq",
      description: "Aplikasi mobile untuk memudahkan muzakki dalam pembayaran zakat dan mustahiq dalam tracking bantuan",
      price: "Mulai 25jt",
      features: [
        "Kalkulator Zakat Interactive",
        "Payment Gateway Integration",
        "Digital Receipt & History",
        "Push Notification",
        "QR Code Payment",
        "Jadwal Reminder Zakat",
        "Tracking Status Penyaluran",
        "Feedback & Rating System",
        "Offline Mode Support"
      ],
      technologies: ["React Native", "Flutter", "Firebase", "Payment Gateway API"],
      deliverables: "iOS App + Android App + Backend API"
    }
  ];

  const additionalServices = [
    {
      title: "Custom Software Development",
      description: "Pengembangan software khusus sesuai kebutuhan unik lembaga Anda",
      features: ["Requirements Analysis", "Custom Development", "System Integration", "Testing & QA"]
    },
    {
      title: "Konsultasi IT & Digital Transformation",
      description: "Konsultasi strategis untuk digitalisasi dan modernisasi lembaga amil zakat",
      features: ["IT Strategy Planning", "System Architecture", "Technology Roadmap", "Change Management"]
    },
    {
      title: "Training & Capacity Building",
      description: "Pelatihan penggunaan sistem dan capacity building untuk tim IT internal",
      features: ["User Training", "Admin Training", "Technical Training", "Documentation"]
    },
    {
      title: "Maintenance & Support",
      description: "Layanan maintenance berkala dan technical support 24/7",
      features: ["Bug Fixing", "Performance Monitoring", "Security Updates", "24/7 Support"]
    }
  ];

  const processSteps = [
    {
      step: "1",
      title: "Konsultasi & Analisis Kebutuhan",
      description: "Diskusi mendalam tentang kebutuhan spesifik lembaga Anda, analisis proses bisnis existing, dan identifikasi pain points"
    },
    {
      step: "2", 
      title: "Proposal & Planning",
      description: "Penyusunan proposal teknis, timeline project, dan perencanaan arsitektur sistem yang sesuai dengan budget dan requirement"
    },
    {
      step: "3",
      title: "Development & Testing",
      description: "Pengembangan sistem dengan metodologi agile, testing berkelanjutan, dan review berkala dengan stakeholder"
    },
    {
      step: "4",
      title: "Deployment & Training", 
      description: "Implementasi sistem di environment production, training user, dan knowledge transfer untuk tim internal"
    },
    {
      step: "5",
      title: "Maintenance & Support",
      description: "Layanan support berkelanjutan, maintenance rutin, dan pengembangan fitur tambahan sesuai kebutuhan"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-emerald-600 to-emerald-800 py-16 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Layanan Sistem Informasi Amil Zakat
            </h1>
            <p className="text-xl text-emerald-100 mb-8 leading-relaxed">
              Solusi teknologi komprehensif untuk digitalisasi dan modernisasi pengelolaan zakat. 
              Dari sistem informasi terintegrasi hingga aplikasi mobile, kami menyediakan semua yang Anda butuhkan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-white text-emerald-600 hover:bg-gray-100">
                <Link href="/contact">Konsultasi Gratis</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-emerald-700">
                <Link href="/portfolio">Lihat Portfolio</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Layanan Utama Kami
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Paket layanan lengkap untuk kebutuhan sistem informasi amil zakat modern
            </p>
          </div>
          <div className="space-y-8">
            {mainServices.map((service, index) => (
              <Card key={index} className="border-2 border-gray-100 hover:border-emerald-200 transition-colors">
                <CardHeader>
                  <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-4">
                    <div className="flex-1">
                      <CardTitle className="text-2xl text-emerald-700 mb-2">{service.title}</CardTitle>
                      <CardDescription className="text-gray-600 text-base">{service.description}</CardDescription>
                    </div>
                    <div className="text-right">
                      <Badge variant="secondary" className="text-lg px-4 py-2">
                        {service.price}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid lg:grid-cols-3 gap-8">
                    {/* Features */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Fitur Utama:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Teknologi:</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.map((tech, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Deliverables */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Deliverables:</h4>
                      <p className="text-sm text-gray-700">{service.deliverables}</p>
                      <Button asChild className="w-full mt-4 bg-emerald-600 hover:bg-emerald-700">
                        <Link href="/contact">Dapatkan Quote</Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Layanan Tambahan
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Layanan pendukung untuk memastikan kesuksesan implementasi dan operasional sistem Anda
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            {additionalServices.map((service, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl text-emerald-700">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
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
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Proses Pengembangan
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Metodologi pengembangan yang terbukti untuk memastikan hasil yang optimal
            </p>
          </div>
          <div className="space-y-8">
            {processSteps.map((process, index) => (
              <div key={index} className="flex flex-col lg:flex-row gap-6 items-start">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center text-lg font-bold">
                    {process.step}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{process.title}</h3>
                  <p className="text-gray-700">{process.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-emerald-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Mulai Proyek Anda Sekarang
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            Konsultasikan kebutuhan sistem informasi amil zakat Anda dengan tim ahli kami. 
            Dapatkan analisis gratis dan proposal yang sesuai dengan budget Anda.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-3">
              <Link href="/contact">Konsultasi Gratis</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-emerald-700 px-8 py-3">
              <a href={`https://wa.me/6285179979952?text=Halo, saya ingin konsultasi tentang layanan sistem informasi zakat dari Mevitu Nusa Persada`}>
                WhatsApp: 085179979952
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}