import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-emerald-600 to-emerald-800 py-16 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Konsultasi & Kontak
            </h1>
            <p className="text-xl text-emerald-100 mb-8 leading-relaxed">
              Siap untuk digitalisasi lembaga zakat Anda? Tim expert kami siap membantu 
              mewujudkan sistem informasi yang sesuai dengan kebutuhan dan budget. 
              Konsultasi gratis tanpa komitmen.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-white text-emerald-600 hover:bg-gray-100">
                <a href="https://wa.me/6285179979952?text=Halo,%20saya%20ingin%20konsultasi%20gratis%20tentang%20sistem%20informasi%20zakat">
                  WhatsApp: 085179979952
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-emerald-700">
                <Link href="/services">Lihat Layanan</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Hubungi Kami</h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="text-2xl">📱</div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900">Telepon / WhatsApp</h3>
                  <p className="text-emerald-600 font-medium">085179979952</p>
                  <p className="text-sm text-gray-600">Hubungi kami langsung untuk konsultasi cepat</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="text-2xl">📧</div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900">Email</h3>
                  <p className="text-emerald-600 font-medium">info@mevitunp.com</p>
                  <p className="text-sm text-gray-600">Kirim inquiry detail via email</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="text-2xl">📍</div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900">Lokasi</h3>
                  <p className="text-emerald-600 font-medium">Gresik, Jawa Timur</p>
                  <p className="text-sm text-gray-600">Kunjungi kantor kami untuk meeting langsung</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="text-2xl">🕒</div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900">Jam Operasional</h3>
                  <p className="text-emerald-600 font-medium">Senin - Jumat, 08:00 - 17:00 WIB</p>
                  <p className="text-sm text-gray-600">Waktu terbaik untuk menghubungi kami</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Konsultasi Sekarang</h2>
            <div className="space-y-6">
              <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-emerald-700 mb-4">WhatsApp Consultation</h3>
                <p className="text-gray-700 mb-4">Dapatkan konsultasi gratis langsung dengan tim expert kami</p>
                <Button asChild className="w-full bg-emerald-600 hover:bg-emerald-700 text-white">
                  <a href="https://wa.me/6285179979952?text=Halo,%20saya%20ingin%20konsultasi%20tentang%20sistem%20informasi%20zakat%20untuk%20lembaga%20kami">
                    💬 Mulai Chat WhatsApp
                  </a>
                </Button>
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Layanan Kami</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Sistem Informasi Amil Zakat</li>
                  <li>• Mobile App Muzakki & Mustahiq</li>
                  <li>• Dashboard Analytics</li>
                  <li>• Custom Software Development</li>
                  <li>• Training & Support</li>
                </ul>
                <Button asChild variant="outline" className="w-full mt-4">
                  <Link href="/services">Lihat Detail Layanan</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="py-16 bg-emerald-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Siap Memulai Proyek Anda?
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            Konsultasikan kebutuhan sistem informasi amil zakat Anda dengan tim ahli kami.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-3">
              <a href="https://wa.me/6285179979952?text=Halo,%20saya%20ingin%20memulai%20proyek%20sistem%20zakat%20dengan%20Mevitu%20Nusa%20Persada">
                Konsultasi Sekarang
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-emerald-700 px-8 py-3">
              <Link href="/portfolio">Lihat Portfolio</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}