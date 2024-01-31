import Link from "next/link"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <h1>CPRG 306: Web Development 2 - Assignments</h1>

        <Link href="/week-2">Week-2 page</Link>
        <Link href="/week-3">Week-3 page</Link>

      </div>
    </main>
  )
}
