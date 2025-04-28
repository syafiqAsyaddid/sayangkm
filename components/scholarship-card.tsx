import Image from "next/image"
import Link from "next/link"
import type { Scholarship } from "@/lib/types"

export function ScholarshipCard({ scholarship }: { scholarship: Scholarship }) {
  const { title, image, requirements, deadline, registrationLink } = scholarship

  // These operations are safe now because the component only renders on the client
  const deadlineDate = new Date(deadline)
  const isDeadlinePassed = deadlineDate < new Date()

  const formatDeadline = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: deadline.length > 7 ? "numeric" : undefined,
    }
    return date.toLocaleDateString("id-ID", options)
  }

  return (
    <div className="bg-white rounded-lg overflow-hidden text-black h-full flex flex-col">
      <Image
        src={image || "/placeholder.svg?height=300&width=400"}
        alt={title}
        width={400}
        height={300}
        className="w-full h-48 object-cover"
      />
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="font-bold text-xl mb-4">{title}</h3>
        <ul className="space-y-2 mb-4 flex-grow">
          {requirements.map((req, index) => (
            <li key={index}>{req}</li>
          ))}
        </ul>
        <p className="text-sm mb-4">Deadline: {formatDeadline(deadlineDate)}</p>
        {isDeadlinePassed ? (
          <span className="inline-block bg-gray-400 text-white px-6 py-2 rounded-full text-center">
            Pendaftaran Ditutup
          </span>
        ) : (
          <Link
            href={registrationLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#2F3675] text-white px-6 py-2 rounded-full text-center"
          >
            👉 link pendaftaran 👈
          </Link>
        )}
      </div>
    </div>
  )
}
