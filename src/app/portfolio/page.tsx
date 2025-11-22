"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function PortfolioPage() {
  const portfolioProjects = [
    {
      title: "LAZIS Al-Hikmah - Sistem Informasi Zakat Terintegrasi",
      client: "LAZ Al-Hikmah",
      year: "2023",
      location: "Surabaya, Jawa Timur", 
      description: "Platform komprehensif untuk pengelolaan zakat dengan fitur lengkap dari penerimaan hingga distribusi",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/2cd60526-ec6d-472d-be74-c95adc3f5372.png",
      technologies: ["Next.js", "PostgreSQL", "Node.js", "React Native", "AWS"],
      features: [
        "Dashboard Executive Real-time",
        "Mobile App Muzakki & Mustahiq",
        "Sistem Pembayaran Multi-Channel",
        "Laporan Audit Otomatis",
        "Integrasi Payment Gateway",
        "Manajemen 500+ Muzakki Aktif"
      ],
      results: [
        "Peningkatan efisiensi operasional 60%",
        "Transparansi laporan meningkat 100%",
        "Pengumpulan zakat naik 45% dalam 6 bulan",
        "Waktu proses administrasi berkurang 70%"
      ],
      testimonial: "Sistem dari Mevitu Nusa Persada sangat membantu dalam digitalisasi pengelolaan zakat kami. Interface yang user-friendly dan fitur yang lengkap membuat pekerjaan tim menjadi lebih efisien."
    },
    {
      title: "Baitul Maal Hidayatullah - Mobile App Zakat",
      client: "BMH Cabang Gresik",
      year: "2022",
      location: "Gresik, Jawa Timur",
      description: "Aplikasi mobile untuk memudahkan muzakki dalam pembayaran zakat dan tracking distribusi",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/0db11bdd-5c4c-4346-a81d-34d61a442ee5.png",
      technologies: ["React Native", "Firebase", "Payment Gateway", "Node.js API"],
      features: [
        "Kalkulator Zakat Interaktif",
        "QR Code Payment",
        "Riwayat Pembayaran Digital",
        "Notifikasi Reminder Zakat",
        "Tracking Status Real-time",
        "Rating & Feedback System"
      ],
      results: [
        "Download 1000+ dalam 3 bulan pertama",
        "Pembayaran digital naik 80%",
        "User satisfaction rate 4.8/5",
        "Reduced call center inquiries 50%"
      ],
      testimonial: "Aplikasi mobile yang dikembangkan sangat memudahkan muzakki kami. Fitur kalkulator zakat dan pembayaran yang mudah membuat partisipasi masyarakat meningkat signifikan."
    },
    {
      title: "Masjid Agung Gresik - Dashboard Analytics",
      client: "Takmir Masjid Agung Gresik",
      year: "2023",
      location: "Gresik, Jawa Timur",
      description: "Business Intelligence dashboard untuk analisis data zakat dan optimalisasi distribusi",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/6de9dd74-2d6f-426a-9228-0b54b0c22825.png",
      technologies: ["Power BI", "SQL Server", "Python", "REST API"],
      features: [
        "Visualisasi Data Multi-Dimensi",
        "Predictive Analytics",
        "Geographic Distribution Map",
        "Automated Monthly Reports",
        "KPI Monitoring Dashboard",
        "Export Multi-Format"
      ],
      results: [
        "Data-driven decision making",
        "Identifikasi area prioritas distribusi",
        "Optimasi alokasi dana 30%",
        "Laporan bulanan otomatis"
      ],
      testimonial: "Dashboard analytics memberikan insight yang sangat berharga untuk pengambilan keputusan strategis dalam pengelolaan dana zakat."
    },
    {
      title: "LAZNAS Dompet Dhuafa - Integration Platform",
      client: "Dompet Dhuafa Regional Jatim",
      year: "2022",
      location: "Multi-Location",
      description: "Platform integrasi untuk menghubungkan berbagai sistem existing dan payment gateway",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/13b38c2a-022a-4cb7-9621-68f366a9f521.png",
      technologies: ["API Gateway", "Microservices", "Docker", "Kubernetes", "MongoDB"],
      features: [
        "API Gateway Centralized",
        "Multi-Payment Integration",
        "Real-time Synchronization",
        "Legacy System Integration",
        "Scalable Microservices",
        "Security & Compliance"
      ],
      results: [
        "Integration 5+ payment methods",
        "99.9% system uptime",
        "Transaction processing 10x faster",
        "Reduced development time 40%"
      ],
      testimonial: "Platform integrasi yang robust memungkinkan kami untuk menghubungkan semua sistem dengan efisien dan aman."
    }
  ];

  const capabilities = [
    {
      icon: "🏛️",
      title: "Lembaga Amil Zakat",
      description: "Sistem komprehensif untuk LAZ besar dengan ribuan muzakki dan distribusi multi-wilayah"
    },
    {
      icon: "🕌",
      title: "Masjid & DKM",
      description: "Solusi praktis untuk pengelolaan zakat masjid dengan fitur yang user-friendly"
    },
    {
      icon: "🏢",
      title: "Corporate Zakat",
      description: "Platform untuk perusahaan yang ingin mengelola program zakat karyawan secara digital"
    },
    {
      icon: "🎓",
      title: "Lembaga Pendidikan",
      description: "Sistem zakat khusus untuk sekolah, universitas, dan pondok pesantren"
    }
  ];

  const techStack = [
    { category: "Frontend", items: ["Next.js", "React", "TypeScript", "Tailwind CSS"] },
    { category: "Backend", items: ["Node.js", "Python", "PostgreSQL", "MongoDB"] },
    { category: "Mobile", items: ["React Native", "Flutter", "Firebase", "Expo"] },
    { category: "Cloud & DevOps", items: ["AWS", "Docker", "Kubernetes", "CI/CD"] },
    { category: "Analytics", items: ["Power BI", "Tableau", "Python Analytics", "R"] },
    { category: "Payment", items: ["Midtrans", "Xendit", "DANA", "OVO", "GoPay"] }
  ];

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-emerald-600 to-emerald-800 py-16 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Portfolio & Case Studies
            </h1>
            <p className="text-xl text-emerald-100 mb-8 leading-relaxed">
              Kumpulan proyek sistem informasi amil zakat yang telah kami kembangkan untuk berbagai klien. 
              Setiap proyek menunjukkan komitmen kami terhadap inovasi dan kualitas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-white text-emerald-600 hover:bg-gray-100">
                <Link href="/contact">Diskusi Proyek Anda</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-emerald-700">
                <Link href="/services">Lihat Layanan</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Projects */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Proyek Terbaru Kami
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Studi kasus implementasi sistem informasi zakat yang sukses di berbagai lembaga
            </p>
          </div>
          <div className="space-y-16">
            {portfolioProjects.map((project, index) => (
              <div key={index} className={`grid lg:grid-cols-2 gap-12 items-start ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                {/* Project Image */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="relative group">
                    <img
                      src={project.image}
                      alt={`${project.title} - Screenshot aplikasi sistem informasi zakat`}
                      className="w-full rounded-2xl shadow-2xl group-hover:shadow-3xl transition-shadow duration-300"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.background = "linear-gradient(135deg, #10b981 0%, #059669 100%)";
                        target.style.display = "flex";
                        target.style.alignItems = "center";
                        target.style.justifyContent = "center";
                        target.style.color = "white";
                        target.style.fontSize = "18px";
                        target.style.fontWeight = "600";
                        target.innerHTML = project.client;
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>

                {/* Project Details */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="secondary">{project.year}</Badge>
                    <Badge variant="outline">{project.location}</Badge>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-lg text-gray-700 mb-6">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Teknologi:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Fitur Utama:</h4>
                    <div className="grid md:grid-cols-2 gap-2">
                      {project.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Results */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Hasil & Impact:</h4>
                    <ul className="space-y-2">
                      {project.results.map((result, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm text-gray-700 font-medium">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Testimonial */}
                  <div className="bg-emerald-50 border-l-4 border-emerald-500 p-4 rounded-r-lg">
                    <p className="text-gray-700 italic">"{project.testimonial}"</p>
                    <p className="text-sm font-semibold text-emerald-700 mt-2">- {project.client}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Jenis Klien Yang Kami Layani
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Pengalaman melayani berbagai jenis lembaga dengan kebutuhan sistem zakat yang beragam
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((capability, index) => (
              <Card key={index} className="border-0 shadow-lg text-center hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="text-4xl mb-4">{capability.icon}</div>
                  <CardTitle className="text-xl text-emerald-700">{capability.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">{capability.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Teknologi Yang Kami Gunakan
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Stack teknologi modern dan terpercaya untuk memastikan performa dan skalabilitas optimal
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {techStack.map((stack, index) => (
              <div key={index} className="text-center">
                <h3 className="text-xl font-semibold text-emerald-700 mb-4">{stack.category}</h3>
                <div className="flex flex-wrap justify-center gap-2">
                  {stack.items.map((item, idx) => (
                    <Badge key={idx} variant="secondary" className="text-sm">
                      {item}
                    </Badge>
                  ))}
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
            Siap Menjadi Klien Selanjutnya?
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            Bergabunglah dengan lembaga-lembaga yang telah merasakan manfaat digitalisasi zakat. 
            Konsultasikan proyek Anda dengan tim expert kami.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-3">
              <Link href="/contact">Mulai Proyek Anda</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-emerald-700 px-8 py-3">
              <a href={`https://wa.me/6285179979952?text=Halo, saya tertarik dengan portfolio sistem zakat Mevitu Nusa Persada. Bisa diskusi lebih lanjut?`}>
                Konsultasi via WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}