import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Favorite Movies",
  description: "Your saved favorite movies",
}

export default function FavoritesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}