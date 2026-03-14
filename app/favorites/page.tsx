"use client"

import { useFavorite } from "@/context/FavoriteContext"
import MovieCard from "@/components/MovieCard"

export default function FavoritesPage() {
  const { favorites } = useFavorite()

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6">
        Favorite Movies
      </h1>

      {favorites.length === 0 ? (
        <p className="text-gray-500">
          You have no favorite movies yet.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {favorites.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </main>
  )
}