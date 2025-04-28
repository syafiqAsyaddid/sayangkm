import { ScholarshipCard } from "@/components/scholarship-card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import Image from "next/image"
import { scholarships } from "@/lib/types"
import ClientOnly from "@/components/ui/ClientOnly"

export default function Home() {
  return (
    <>
      <section className="relative pt-20 pb-32">
        <Image src="/images/home-bg.jpg" alt="Background" fill className="object-cover absolute inset-0 z-0" priority />
        <div className="relative z-10 container max-w-7xl mx-auto px-8">
          <div className="flex items-center justify-between">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Kementerian Kesejahteraan Mahasiswa</h1>
              <p className="text-lg opacity-90">
                Badan Eksekutif Mahasiswa – Keluarga Mahasiswa Kementerian Kesejahteraan Mahasiswa.
              </p>
            </div>
            <div className="hidden md:block">
              <Image
                src="/images/logo-kesmah.png"
                alt="Sayang KM Logo"
                width={300}
                height={300}
                className="w-[300px] h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#2F3675] text-white">
        <div className="container max-w-7xl mx-auto px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Informasi Beasiswa</h2>
          <div className="max-w-5xl mx-auto px-4">
            <ClientOnly>
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                className="relative px-4"
              >
                <CarouselContent>
                  {scholarships.map((scholarship) => (
                    <CarouselItem key={scholarship.id} className="md:basis-1/2 lg:basis-1/3">
                      <ScholarshipCard scholarship={scholarship} />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </ClientOnly>
          </div>
        </div>
      </section>
    </>
  )
}
