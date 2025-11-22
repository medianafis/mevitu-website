"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Ahmad Rizki Pratama",
      position: "Founder & Lead Developer",
      expertise: "Full-stack Development, System Architecture",
      experience: "7+ tahun",
      education: "S1 Teknik Informatika",
      description: "Berpengalaman dalam pengembangan sistem enterprise dengan fokus pada aplikasi berbasis web dan mobile"
    },
    {
      name: "Siti Fatimah Azzahra",
      position: "Business Analyst & UI/UX Designer", 
      expertise: "Requirements Analysis, User Experience Design",
      experience: "5+ tahun",
      education: "S1 Sistem Informasi",
      description: "Spesialis dalam analisis kebutuhan bisnis dan desain antarmuka yang user-friendly"
    },
    {
      name: "Muhammad Hakim Al-Rashid",
      position: "Backend Developer & Database Administrator",
      expertise: "API Development, Database Design, Cloud Infrastructure",
      experience: "6+ tahun", 
      education: "S1 Teknik Komputer",
      description: "Expert dalam pengembangan API scalable dan manajemen database untuk aplikasi enterprise"
    },
    {
      name: "Dr. H. Abdullah Mahmud, M.Ag",
      position: "Consultant Syariah",
      expertise: "Fiqh Zakat, Islamic Finance, Syariah Compliance",
      experience: "15+ tahun",
      education: "S3 Ekonomi Syariah",
      description: "Ahli fiqh zakat yang memastikan semua sistem comply dengan kaidah syariah Islam"
    }
  ];

  const companyValues = [
    {
      title: "Amanah & Transparansi",
      icon: "🤝",
      description: "Kami berkomitmen untuk membangun sistem yang transparan dan dapat dipercaya, sesuai dengan nilai-nilai Islam dalam pengelolaan zakat"
    },
    {
      title: "Inovasi Berkelanjutan", 
      icon: "💡",
      description: "Terus mengembangkan teknologi terdepan untuk memberikan solusi terbaik bagi lembaga amil zakat di Indonesia"
    },
    {
      title: "Excellence & Quality",
      icon: "⭐",
      description: "Mengutamakan kualitas dalam setiap aspek pengembangan, dari design hingga implementasi dan maintenance"
    },
    {
      title: "Partnership & Collaboration",
      icon: "🤝",
      description: "Membangun kemitraan jangka panjang dengan klien untuk memastikan kesuksesan digitalisasi zakat"
    }
  ];

  const milestones = [
    {
      year: "2019",
      title: "Berdiri & Fokus Zakat",
      description: "Mevitu Nusa Persada didirikan dengan fokus khusus pada pengembangan sistem informasi untuk lembaga amil zakat"
    },
    {
      year: "2020",
      title: "Proyek Pertama",
      description: "Berhasil menyelesaikan sistem informasi zakat pertama untuk Masjid Al-Hidayah dengan 200+ muzakki aktif"
    },
    {
      year: "2021",
      title: "Ekspansi Regional",
      description: "Melayani klien di seluruh Jawa Timur dan mulai mengembangkan solusi mobile application"
    },
    {
      year: "2022",
      title: "Technology Advancement",
      description: "Mengadopsi cloud infrastructure dan AI/ML untuk analytics, melayani 5+ LAZ dengan total 1000+ muzakki"
    },
    {
      year: "2023",
      title: "Digital Transformation Leader",
      description: "Menjadi pioneer digital transformation untuk lembaga zakat di Indonesia dengan 10+ proyek sukses"
    },
    {
      year: "2024",
      title: "Innovation & Scale",
      description: "Meluncurkan platform SaaS dan AI-powered analytics untuk memberikan solusi yang lebih scalable"
    }
  ];

  const certifications = [
    "ISO 27001 Information Security",
    "Certified Syariah IT Consultant",
    "AWS Certified Solutions Architect",
    "Google Cloud Professional Developer",
    "Scrum Master Certification"
  ];

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-emerald-600 to-emerald-800 py-16 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Tentang Mevitu Nusa Persada
            </h1>
            <p className="text-xl text-emerald-100 mb-8 leading-relaxed">
              Perusahaan software development yang berdedikasi untuk kemajuan teknologi 
              pengelolaan zakat di Indonesia. Berlokasi di Gresik, Jawa Timur, kami melayani 
              lembaga amil zakat di seluruh nusantara.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-white text-emerald-600 hover:bg-gray-100">
                <Link href="/contact">Hubungi Kami</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-emerald-700">
                <Link href="/portfolio">Lihat Karya Kami</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Visi & Misi Perusahaan
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-emerald-700 mb-3">Visi</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Menjadi perusahaan teknologi terdepan dalam digitalisasi pengelolaan zakat di Indonesia, 
                    membantu lembaga amil zakat mencapai transparansi, efisiensi, dan akuntabilitas optimal 
                    sesuai dengan prinsip-prinsip syariah Islam.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-emerald-700 mb-3">Misi</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Mengembangkan solusi teknologi yang sesuai syariah untuk pengelolaan zakat</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Memberikan layanan berkualitas tinggi dengan dukungan teknis terbaik</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Membangun kemitraan jangka panjang dengan lembaga amil zakat</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Berkontribusi dalam peningkatan kesadaran dan partisipasi zakat di masyarakat</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/0106cc93-f60a-4646-a2ee-753678476454.png"
                alt="Kantor Mevitu Nusa Persada di Gresik, Jawa Timur dengan suasana profesional dan modern"
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
                  target.innerHTML = "Kantor Mevitu Nusa Persada";
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nilai-Nilai Perusahaan
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Prinsip-prinsip yang menjadi foundation dalam setiap aspek pekerjaan kami
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyValues.map((value, index) => (
              <Card key={index} className="border-0 shadow-lg text-center hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <CardTitle className="text-lg text-emerald-700">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">{value.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Tim Expert Kami
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Tim profesional dengan expertise mendalam dalam teknologi dan pemahaman syariah
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="border-2 border-gray-100 hover:border-emerald-200 transition-colors">
                <CardHeader>
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-emerald-700 font-bold text-lg">
                        {member.name.split(' ').map(n => n[0]).join('').substring(0, 2)}
                      </span>
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl text-gray-900">{member.name}</CardTitle>
                      <CardDescription className="text-emerald-600 font-medium">{member.position}</CardDescription>
                      <div className="mt-2 text-sm text-gray-600">
                        <p><span className="font-medium">Expertise:</span> {member.expertise}</p>
                        <p><span className="font-medium">Experience:</span> {member.experience}</p>
                        <p><span className="font-medium">Education:</span> {member.education}</p>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Perjalanan Perusahaan
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Milestone penting dalam perjalanan Mevitu Nusa Persada
            </p>
          </div>
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex flex-col lg:flex-row gap-6 items-start">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-emerald-600 text-white rounded-full flex items-center justify-center text-lg font-bold">
                    {milestone.year}
                  </div>
                </div>
                <div className="flex-1 lg:pt-2">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{milestone.title}</h3>
                  <p className="text-gray-700">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Credentials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Sertifikasi & Kredensial
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                Tim kami memiliki sertifikasi professional yang memastikan kualitas dan 
                standar internasional dalam pengembangan software.
              </p>
              <ul className="space-y-3">
                {certifications.map((cert, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                    </div>
                    <span className="text-gray-700 font-medium">{cert}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-6">
              <Card className="border-2 border-emerald-200 bg-emerald-50">
                <CardContent className="p-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-emerald-700">5+</div>
                    <div className="text-emerald-600">Tahun Pengalaman</div>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-2 border-emerald-200 bg-emerald-50">
                <CardContent className="p-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-emerald-700">10+</div>
                    <div className="text-emerald-600">Proyek Sukses</div>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-2 border-emerald-200 bg-emerald-50">
                <CardContent className="p-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-emerald-700">1000+</div>
                    <div className="text-emerald-600">Muzakki Terlayani</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Contact Info */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Lokasi & Kontak
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Berlokasi strategis di Gresik, Jawa Timur untuk melayani klien di seluruh Indonesia
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl text-emerald-700">Informasi Kontak</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Alamat</div>
                    <div className="text-gray-600">Gresik, Jawa Timur, Indonesia</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Telepon</div>
                    <a href="tel:085179979952" className="text-emerald-600 hover:text-emerald-700">
                      085179979952
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Email</div>
                    <div className="text-emerald-600">info@mevitunp.com</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.736 6.979C9.208 6.193 9.696 6 10 6c.304 0 .792.193 1.264.979a1 1 0 001.715-1.029C12.279 4.784 11.232 4 10 4s-2.279.784-2.979 1.95c-.285.475-.507 1-.67 1.55H6a1 1 0 000 2h.013a9.358 9.358 0 000 1H6a1 1 0 100 2h.351c.163.55.385 1.075.67 1.55C7.721 15.216 8.768 16 10 16s2.279-.784 2.979-1.95a1 1 0 10-1.715-1.029C10.792 13.807 10.304 14 10 14c-.304 0-.792-.193-1.264-.979a1 1 0 00-1.715 1.029z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Jam Operasional</div>
                    <div className="text-gray-600">Senin - Jumat: 08:00 - 17:00 WIB</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl text-emerald-700">Mengapa Memilih Kami?</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2"></div>
                      <span className="text-gray-700">Lokasi strategis di Jawa Timur</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2"></div>
                      <span className="text-gray-700">Tim berpengalaman dengan sertifikasi internasional</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2"></div>
                      <span className="text-gray-700">Pemahaman mendalam tentang fiqh zakat</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2"></div>
                      <span className="text-gray-700">Support 24/7 dan maintenance berkala</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2"></div>
                      <span className="text-gray-700">Track record proyek sukses di berbagai LAZ</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-emerald-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Mari Berkolaborasi
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            Siap untuk memulai digitalisasi lembaga zakat Anda? Tim expert kami siap membantu 
            mewujudkan sistem informasi yang sesuai dengan kebutuhan dan budget Anda.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-3">
              <Link href="/contact">Konsultasi Sekarang</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-emerald-700 px-8 py-3">
              <a href={`https://wa.me/6285179979952?text=Halo, saya tertarik untuk mengetahui lebih lanjut tentang Mevitu Nusa Persada dan layanan sistem zakat yang ditawarkan`}>
                WhatsApp: 085179979952
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}