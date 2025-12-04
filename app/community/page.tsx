import { communityServices } from "@/data/communityServices";
import Rating from "@/components/Rating";
import Badge from "@/components/Badge";

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
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
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
                      <svg
                        className="w-5 h-5 text-[#8b9e7d] mt-0.5 shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      <span>{service.location}</span>
                    </div>
                  </div>

                  {/* Contact */}
                  <div className="space-y-2 mb-4 text-sm">
                    <div className="flex items-center gap-2 text-gray-600">
                      <svg
                        className="w-4 h-4 text-[#8b9e7d]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                      <span>{service.phone}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <svg
                        className="w-4 h-4 text-[#8b9e7d]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
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
                <svg
                  className="w-8 h-8 text-[#8b9e7d]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
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
                <svg
                  className="w-8 h-8 text-[#8b9e7d]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
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
