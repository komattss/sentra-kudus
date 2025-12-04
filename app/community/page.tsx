import { communityServices } from "@/data/communityServices";
import Rating from "@/components/Rating";
import Badge from "@/components/Badge";
import { Users, MapPin, Phone, Mail, Search, CheckCircle } from "lucide-react";

export default function CommunityPage() {
  const categories = [
    ...new Set(communityServices.map((service) => service.category)),
  ];

  return (
    <main className="min-h-screen pt-20 pb-12">
      {/* Hero */}
      <section className="bg-linear-to-br from-[#8b9e7d] to-[#6b7a5e] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold">
              Services & Community
            </h1>
          </div>
          <p className="text-lg text-white/90 max-w-2xl">
            Akses berbagai layanan publik untuk kesehatan, pendidikan, olahraga,
            dan kemasyarakatan di wilayah Sentrakudus
          </p>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="bg-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-lg font-bold mb-4 text-gray-800">
            Kategori Layanan
          </h2>
          <div className="flex flex-wrap gap-3">
            <Badge text="Semua" color="blue" size="md" />
            {categories.map((category) => (
              <Badge key={category} text={category} color="blue" size="md" />
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {communityServices.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all overflow-hidden border border-gray-100 hover:border-[#8b9e7d]"
              >
                {/* Header */}
                <div className="bg-linear-to-br from-[#8b9e7d] to-[#6b7a5e] p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">{service.name}</h3>
                  <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm">
                    {service.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {service.description}
                  </p>

                  {/* Location */}
                  <div className="mb-4 pb-4 border-b border-gray-100">
                    <div className="flex items-start gap-2 text-sm text-gray-600">
                      <MapPin className="w-5 h-5 text-[#8b9e7d] mt-0.5 shrink-0" />
                      <span>{service.location}</span>
                    </div>
                  </div>

                  {/* Contact */}
                  <div className="space-y-2 mb-4 text-sm">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Phone className="w-4 h-4 text-[#8b9e7d]" />
                      <span>{service.phone}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Mail className="w-4 h-4 text-[#8b9e7d]" />
                      <span>{service.email}</span>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="pt-4 border-t border-gray-100">
                    <Rating rating={service.rating} reviews={service.reviews} />
                  </div>

                  {/* CTA */}
                  <button className="w-full mt-4 bg-[#8b9e7d] hover:bg-[#6b7a5e] text-white font-medium py-2.5 px-4 rounded-lg transition-colors">
                    Selengkapnya →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="bg-white py-16 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#8b9e7d]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-[#8b9e7d]" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-gray-800">
                Mudah Diakses
              </h3>
              <p className="text-gray-600">
                Cari dan temukan layanan yang Anda butuhkan dengan mudah
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#8b9e7d]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-[#8b9e7d]" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-gray-800">
                Terverifikasi
              </h3>
              <p className="text-gray-600">
                Semua layanan telah diverifikasi oleh pemerintah lokal
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">⭐</div>
              <h3 className="text-lg font-bold mb-2 text-gray-800 dark:text-white">
                Berdasarkan Review
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Rating dari pengguna nyata yang telah mencoba layanan
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
