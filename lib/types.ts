export interface Scholarship {
  id: string
  title: string
  image: string
  requirements: string[]
  deadline: string // Format: "YYYY-MM-DD" or "YYYY-MM"
  registrationLink: string
}

export const scholarships: Scholarship[] = [
  {
    id: "1",
    title: "Beasiswa Amartha STEAM",
    image: "/images/scholarship-8.jpeg",
    requirements: ["Semester 4", "Mahasiswi S1/D4"],
    deadline: "2025-06-15",
    registrationLink: "https://steam.beasiswa-amartha.org/",
  },
  {
    id: "2",
    title: "Beasiswa Nama Fund",
    image: "/images/scholarship-2.jpg",
    requirements: ["Mahasiswa Baru S1/D4"],
    deadline: "2025-04-20",
    registrationLink: "https://bit.ly/DaftarNAMAFundBatch7",
  },
  {
    id: "3",
    title: "Beasiswa Astra1st",
    image: "/images/scholarship-3.jpg",
    requirements: ["Semester 4-6", "Mahasiswa S1/D4"],
    deadline: "2025-04-30",
    registrationLink: "https://bit.ly/Astra1st2025",
  },
  {
    id: "4",
    title: "Beasiswa PT. Adora 2025",
    image: "/images/scholarship-4.jpg",
    requirements: ["Semester 3-8", "Mahasiswa S1/D4"],
    deadline: "2025-05-05",
    registrationLink: "https://ipb.link/beasiswa-adora-2025",
  },
  {
    id: "5",
    title: "Beasiswa Glow & Lovely",
    image: "/images/scholarship-5.jpg",
    requirements: ["Semester 2-6", "Mahasiswa S1/D4"],
    deadline: "2025-05-08",
    registrationLink: "https://bit.ly/GALBintangBeasiswa2025",
  },
  {
    id: "6",
    title: "Beasiswa Pendidikan Ruang Edukasi",
    image: "/images/scholarship-6.jpg",
    requirements: ["Mahasiswa S1/D4"],
    deadline: "2025-06-04",
    registrationLink: "https://www.kejarprestasi.id",
  },
  {
    id: "7",
    title: "Beasiswa Next Future Leaders",
    image: "/images/scholarship-7.jpg",
    requirements: ["Mahasiswa S1/D4"],
    deadline: "2025-06-30",
    registrationLink: "https://ikutlomba.id/REGNFL2",
  },
]
