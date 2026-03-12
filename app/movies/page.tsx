import { discoverMovies, getGenres } from "@/lib/tmdb"
import MovieCard from "@/components/MovieCard"
import MovieFilter from "@/components/MovieFilter"
import GenreFilter from "@/components/GenreFilter"

export default async function MoviesPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string; genre?: string }>
}) {
  const { q, genre } = await searchParams

  const movies = await discoverMovies(genre, q)
  const genres = await getGenres()

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6">All Movies</h1>

      <MovieFilter />

      <GenreFilter genres={genres} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {movies.map((movie: any) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </main>
  )
}