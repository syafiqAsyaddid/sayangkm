import { FaInstagram, FaWhatsapp, FaPhone, FaXTwitter } from 'react-icons/fa6'
import Link from 'next/link'
import Image from "next/image"

export function Footer() {
  return (
    <footer className="relative text-black py-12">
      <Image
        src="/images/footer-bg.jpg"
        alt="Footer Background"
        fill
        className="object-cover absolute inset-0 z-0"
      />
      <div className="relative z-10">
        <div className="container max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-4 max-w-xs">
            <h3 className="font-bold text-xl">BEM KM IPB</h3>
            <p className="text-sm">
              Portal informasi beasiswa dari Kesmah BEM KM IPB. Dapatkan informasi terbaru seputar peluang beasiswa yang
              sedang dibuka.
            </p>
          </div>

          <div className="max-w-xs">
            <h4 className="font-bold mb-4">Tautan</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/">Beranda</Link>
              </li>
              <li>
                <Link href="/tentang-kesmah">Tentang Kesmah</Link>
              </li>
            </ul>
          </div>

          <div className="max-w-xs">
            <h4 className="font-bold mb-4">Kontak</h4>
            <ul className="space-y-2">
              <li>Bogor, Indonesia</li>
              <li>+62 856-9395-2813</li>
            </ul>
          </div>

          <div className="max-w-xs">
            <h4 className="font-bold mb-4">Media Sosial</h4>
            <div className="flex gap-6">
              <Link href="https://instagram.com/sayangkmipb"className="hover:opacity-80" target="_blank">
                <FaInstagram className="w-6 h-6" />
              </Link>
              <Link href="https://wa.me/6285693952813" className="hover:opacity-80" target="_blank">
                <FaWhatsapp className="w-6 h-6" />
              </Link>
              <Link href="tel:+6285693952813" className="hover:opacity-80">
                <FaPhone className="w-6 h-6" />
              </Link>
              <Link href="https://x.com/sayangkmipb" className="hover:opacity-80" target="_blank">
                <FaXTwitter className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
