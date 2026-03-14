import Link from "next/link"
import Image from "next/image"
import FavoriteButton from "./FavoriteButton"

type Movie = {
  id: number
  title: string
  vote_average?: number
  poster_path?: string | null
}

export default function MovieCard({ movie }: { movie: Movie }) {
  const imageUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : null

  return (
    <Link href={`/movies/${movie.id}`}>
      <div className="relative border rounded overflow-hidden hover:scale-[1.02] hover:shadow-xl transition-all duration-200 cursor-pointer">

        <FavoriteButton movie={movie} />

        <div className="w-full aspect-[2/3] bg-gray-100 flex items-center justify-center">
          {imageUrl && (
            <Image
              src={imageUrl}
              alt={movie.title}
              width={500}
              height={750}
              className="object-cover w-full h-full"
            />
          )}
        </div>

        <div className="p-4">
          <h2 className="font-semibold">{movie.title}</h2>

          <p>
            ⭐ {movie.vote_average?.toFixed(1) ?? "N/A"}
          </p>
        </div>

      </div>
    </Link>
  )
}