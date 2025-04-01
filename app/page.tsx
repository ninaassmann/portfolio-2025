import Link from "next/link";

export default function Home() {
  return (
    <main className="container">
      <h1 className="text-3xl">Hello World</h1>
      <nav>
        <Link href="/projects">Projekte</Link>
      </nav>
    </main>
  );
}
