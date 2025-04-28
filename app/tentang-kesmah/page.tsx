import Image from "next/image"

export default function TentangKesmah() {
  return (
    <>
      <section className="relative min-h-screen">
        <Image src="/images/tentang-kesmah-bg.png" alt="Background" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-[#2F3675]/80" />
        <div className="relative pt-32 pb-16 text-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-center">Kementrian Kesejahteraan Mahasiswa</h1>
              <div className="max-w-3xl mb-12 text-center">
                <p className="text-lg">
                  Kementrian Kesejahteraan Mahasiswa menjalankan fungsi pelayanan bagi KM IPB dan jembatan komunikasi
                  dengan pemangku kebijakan. Kesmah juga memiliki peran dalam advokasi terkait permasalahan yang
                  dihadapi KM IPB untuk meningkatkan kesejahteraan mahasiswa IPB.
                </p>
              </div>
            </div>

            {/* Visi dan Misi */}
            <div className="bg-white/10 backdrop-blur rounded-lg p-8 max-w-6xl mx-auto mt-12">
              <h2 className="text-2xl font-bold mb-6 text-center">Visi dan Misi</h2>
              <div className="flex flex-col md:flex-row gap-12 justify-between">
                {/* Visi */}
                <div className="flex-1 bg-white/20 backdrop-blur p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 text-center">Visi</h3>
                  <p className="text-sm text-center">
                    Terwujudnya Kementerian yang dapat mengadopsi konsep menjadi sahabat dekat bagi KM IPB perihal
                    kesejahteraan guna terciptanya KM IPB yang lebih sejahtera
                  </p>
                </div>

                {/* Misi */}
                <div className="flex-1 bg-white/20 backdrop-blur p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 text-center">Misi</h3>
                  <ul className="text-sm text-center space-y-2">
                    <li>- Menjalankan fungsi pelayanan kesejahteraan yang responsif.</li>
                    <li>- Meningkatkan penyampaian informasi yang cepat dan efektif.</li>
                    <li>- Mengoptimalkan fungsi advokasi kesejahteraan kepada stakeholder terkait.</li>
                    <li>- Memfasilitasi dan memperjuangkan segala bentuk permasalahan KM IPB.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Program Kerja */}
            <div className="bg-white/10 backdrop-blur rounded-lg p-8 max-w-6xl mx-auto mt-12">
              <h2 className="text-2xl font-bold mb-4 text-center">Program Kerja</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                {[
                  {
                    title: "Hotline Sayang KM dan Podcast",
                    desc: "Ruang bagi KM IPB untuk bertanya dan bercerita perihal kehidupan kampus melalui media sosial (Instagram, Twitter, dan WhatsApp).",
                  },
                  {
                    title: "Kabar Kesmah dan Schoter (Scholarship Center)",
                    desc: "Informasi terkait kesejahteraan mahasiswa seperti akademik, fasilitas, update terbaru serta beasiswa bagi KM IPB.",
                  },
                  {
                    title: "Safe Space (Amunisi, Art Therapy, Seminar Mental Health)",
                    desc: "Program yang mengulik seputar kesehatan mental dan fisik KM IPB selama menjalani aktivitas perkuliahan.",
                  },
                  {
                    title: "Donor Darah",
                    desc: "Program yang dapat memberikan kesempatan bagi KM IPB untuk mendonorkan darahnya secara sukarela.",
                  },
                  {
                    title: "PELUK KM (Peduli UKT) dan Beasiswa KM",
                    desc: "Portal Peduli UKT bagi KM IPB yang merasa kurang mampu dalam membayar UKT.",
                  },
                  {
                    title: "Kesmah Visit dan Forkesmah",
                    desc: "Program yang melibatkan seluruh pimpinan dan staf Departemen Kesejahteraan Mahasiswa wilayah se-IPB University dalam melayani KM IPB, melakukan koordinasi, monitoring, serta tracking.",
                  },
                ].map((proker, index) => (
                  <div key={index} className="bg-white text-black rounded-lg p-6 flex flex-col gap-3 text-center">
                    <h3 className="font-bold mb-2">{proker.title}</h3>
                    <p className="text-sm">{proker.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tim Kesmah - Separate section with blue background */}
      <section className="py-10 bg-[#2F3675] text-white">
        <div className="container mx-auto px-5">
          <h2 className="text-3xl font-bold text-center">Tim Hebat di Balik Kesejahteraan Mahasiswa</h2>
          <div className="flex flex-col items-center">
            <div className="relative w-full max-w-3xl h-[500px] md:h-[600px]">
              <Image
                src="/images/kesmah-team.JPG"
                alt="Tim Kementerian Kesejahteraan Mahasiswa IPB"
                fill
                className="object-contain rounded-lg"
              />
            </div>
            <p className="text-center text-lg italic">
              Pengurus Kementerian Kesejahteraan Mahasiswa BEM KM IPB University 2024/2025
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
