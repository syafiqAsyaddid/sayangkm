import Link from "next/link"
import Image from "next/image"

export function Navbar({ transparent = false }: { transparent?: boolean }) {
  return (
    <nav className={`w-full z-50 ${transparent ? "absolute top-0 text-white" : "bg-white"}`}>
      <div className="container max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/images/logo-kesmah.png" alt="Sayang KM Logo" width={40} height={40} className="w-10 h-10" />
          <span className="font-bold text-lg">Sayang KM</span>
        </Link>
        <div className="flex gap-8">
          <Link href="/" className="hover:opacity-80">
            Beranda
          </Link>
          <Link href="/tentang-kesmah" className="hover:opacity-80">
            Tentang Kesmah
          </Link>
        </div>
      </div>
    </nav>
  )
}
