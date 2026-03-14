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

  return (
    <button
      onClick={(e) => {
        e.preventDefault() // supaya tidak trigger link navigation
        toggleFavorite(movie)
      }}
      className="absolute top-2 right-2 text-xl"
    >
      {favorite ? "❤️" : "🤍"}
    </button>
  )
}