"use client"

export default function MoviesError({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-4">
        Something went wrong.
      </h1>

      <button
        onClick={() => reset()}
        className="border px-4 py-2 rounded"
      >
        Try again
      </button>
    </main>
  )
}