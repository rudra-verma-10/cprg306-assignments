import Link from "next/link"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg">
      <div className="z-10 max-w-5xl w-full font-mono text-lg flex flex-col ">
        
        <div className="text-2xl font-bold">
          <h1>CPRG 306: Web Development 2 - Assignments</h1>
        </div>

        <div className="flex flex-col mt-4">
          <Link href="/week-2" className=" hover:text-blue-200 hover:underline mb-2">
            Week-2 page
          </Link>
          <Link href="/week-3" className=" hover:text-blue-200 hover:underline mb-2">
            Week-3 page
          </Link>
          <Link href="/week-4" className=" hover:text-blue-200 hover:underline mb-2">
            Week-4 page
          </Link>
          <Link href="/week-5" className=" hover:text-blue-200 hover:underline mb-2">
            Week-5 page
          </Link>
          <Link href="/week-6" className=" hover:text-blue-200 hover:underline mb-2">
            Week-6 page
          </Link>
          <Link href="/week-7" className=" hover:text-blue-200 hover:underline mb-2">
            Week-7 page
          </Link>
        </div>


      </div>
    </main>
  )
}
