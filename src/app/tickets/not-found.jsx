import Link from "next/link";

export default function notFound() {
  return (
    <main className="text-center">
      <h2 className="text-3xl">We Hit A Brick Wall....</h2>
      <p>We could not found the page were you looking for</p>
      <p>
        Go back to the <Link href="/tickets">Dashboard</Link>
      </p>
    </main>
  );
}
