"use client"

import Link from "next/link"
import { useFavorite } from "@/context/FavoriteContext"
import MovieCard from "@/components/MovieCard"

export default function FavoritesPage() {
  const { favorites } = useFavorite()

  if (favorites.length === 0) {
    return (
      <main className="p-8 text-center">
        <h1 className="text-3xl font-bold mb-4">
          Favorite Movies
        </h1>

        <p className="text-gray-600 mb-6">
          No favorite movies yet. Browse movies and add some to your favorites.
        </p>

        <Link
          href="/movies"
          className="inline-block border px-4 py-2 rounded hover:bg-gray-100 transition"
        >
          Browse Movies
        </Link>
      </main>
    )
  }

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6">
        Favorite Movies
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {favorites.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </main>
  )
}