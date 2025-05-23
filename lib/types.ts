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
    title: "Beasiswa Pendidikan Ruang Edukasi",
    image: "/images/Mei/scholarship-6.jpg",
    requirements: ["Mahasiswa aktif D4/S1"],
    deadline: "2025-06-04",
    registrationLink: "https://www.kejarprestasi.id",
  },
  {
    id: "2",
    title: "Beasiswa Next Future Leaders",
    image: "/images/Mei/Scholarship-7.jpg",
    requirements: ["Mahasiswa S1/D4"],
    deadline: "2025-06-30",
    registrationLink: "http://ikutlomba.id/REGNFL2",
  },
  {
    id: "3",
    title: "Beasiswa BCA Finance Peduli 2025",
    image: "/images/Mei/beasiswa bca finance.jpeg",
    requirements: ["Semester 5-8", "Mahasiswa S1"],
    deadline: "2025-06-13",
    registrationLink: "https://bit.ly/Beasiswa-BCA-Finance",
  },
  {
    id: "4",
    title: "Beasiswa Amartha STEAM Fellowship",
    image: "/images/Mei/beasiswa amartha.jpeg",
    requirements: ["Semester 4", "Mahasiswa S1/D4"],
    deadline: "2025-06-15",
    registrationLink: "https://steam.beasiswa-amartha.org",
  },
  {
    id: "5",
    title: "Beasiswa YAPI (Yayasan Alumni Peduli IPB)",
    image: "/images/Mei/beasiswa-yapi.jpg",
    requirements: ["Mahasiswa Baru", "Mahasiswa S1/D4"],
    deadline: "2025-07-01",
    registrationLink: "https://ipb.link/formulir-beasiswa-yapi2025 ",
  },
  {
    id: "6",
    title: "Beasiswa Djarum Plus",
    image: "/images/Mei/beasiswa Djarum Plus.jpg",
    requirements: ["Semester 4", "Mahasiswa S1/D4"],
    deadline: "2025-07-11",
    registrationLink: "https://djarumbeasiswaplus.org",
  },
  {
    id: "7",
    title: "Beasiswa Cendikia Muda #3",
    image: "/images/Mei/Beasiswa Cendekia Muda.jpg",
    requirements: ["Mahasiswa D4/S1/S2"],
    deadline: "2025-07-31",
    registrationLink: "https://youthspaceinnovation.com/DAFTARBCM3",
  },
]
