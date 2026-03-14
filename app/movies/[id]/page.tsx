import Image from "next/image"
import { notFound } from "next/navigation"
import { getMovieDetail } from "@/lib/tmdb"
import FavoriteButton from "@/components/FavoriteButton"

export default async function MovieDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params

  const movie = await getMovieDetail(id)

  if (!movie || movie.success === false || movie.status_code) {
    notFound()
  }

  const imagePath = movie.poster_path || movie.backdrop_path

  return (
    <main className="p-8">
      <div className="flex flex-col md:flex-row gap-8">

        <div className="relative">
          {imagePath && (
            <Image
              src={`https://image.tmdb.org/t/p/w500${imagePath}`}
              alt={movie.title || "Movie image"}
              width={500}
              height={750}
              className="rounded"
            />
          )}

          {/* ⭐ Favorite Button */}
          <FavoriteButton movie={movie} />
        </div>

        <div>
          <h1 className="text-4xl font-bold mb-4">
            {movie.title}
          </h1>

          <p className="mb-2 text-lg">
            ⭐ {movie.vote_average?.toFixed(1) ?? "N/A"}
          </p>

          <p className="text-gray-600 max-w-xl">
            {movie.overview}
          </p>
        </div>

      </div>
    </main>
  )
}