import Link from "next/link";
import React from "react";

export default function Projects() {
  return (
    <main className="container">
      <h1 className="text-3xl">Projekte</h1>
      <Link href="/projects/qr-code">QR Code</Link>
    </main>
  );
}
