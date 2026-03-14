import { getTrendingMovies } from "@/lib/tmdb"
import MovieCard from "@/components/MovieCard"

export default async function Home() {
  const movies = await getTrendingMovies()

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6">
        Trending Movies
      </h1>

      {movies.length === 0 ? (
        <div className="mt-10 text-center">
          <p className="text-gray-500 text-lg">
            No movies available.
          </p>

          <p className="text-gray-400 mt-2">
            Please check your connection or try again later.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {movies.map((movie: any) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </main>
  )
}