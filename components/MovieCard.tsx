import Link from "next/link"
import Image from "next/image"

type Movie = {
  id: number
  title: string
  vote_average: number
  poster_path: string
}

export default function MovieCard({ movie }: { movie: Movie }) {
  const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`

  return (
    <Link href={`/movies/${movie.id}`}>
      <div className="border rounded overflow-hidden hover:scale-[1.02] transition-transform duration-200 cursor-pointer">
        <Image
          src={imageUrl}
          alt={movie.title}
          width={500}
          height={750}
        />

        <div className="p-4">
          <h2 className="font-semibold">{movie.title}</h2>
          <p>⭐ {movie.vote_average.toFixed(1)}</p>
        </div>
      </div>
    </Link>
  )
}