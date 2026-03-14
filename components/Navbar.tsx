import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="flex items-center gap-6 p-4 border-b">
      <Link href="/" className="font-bold text-xl">
        MovieApp
      </Link>

      <Link href="/">Home</Link>

      <Link href="/movies">Movies</Link>

      <Link href="/favorites">Favorites</Link>
    </nav>
  )
}