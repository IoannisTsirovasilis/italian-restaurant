import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow p-4 mb-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          La Bella Italia
        </Link>
        <div className="flex space-x-4">
          <Link href="/menu">Menu</Link>
          <Link href="/order">Order Now</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
