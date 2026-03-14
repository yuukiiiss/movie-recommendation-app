"use client"

import { useFavorite } from "@/context/FavoriteContext"

type Movie = {
  id: number
  title: string
  poster_path?: string | null
  vote_average?: number
}

export default function FavoriteButton({
  movie,
}: {
  movie: Movie
}) {
  const { toggleFavorite, isFavorite } = useFavorite()

  const favorite = isFavorite(movie.id)

  function handleClick(e: React.MouseEvent) {
    e.preventDefault()

    if (favorite) {
      const ok = confirm(
        `Remove "${movie.title}" from favorites?`
      )

      if (!ok) return
    }

    toggleFavorite(movie)
  }

  return (
    <button
      onClick={handleClick}
      className="absolute top-2 right-2 text-xl"
    >
      {favorite ? "❤️" : "🤍"}
    </button>
  )
}