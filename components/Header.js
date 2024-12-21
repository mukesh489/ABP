import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-10 w-full bg-white shadow-md">
      <nav className="flex items-center justify-between px-6 py-4 mx-auto max-w-7xl">
        <Link
          href="/"
          className="text-2xl font-bold text-gray-800 cursor-pointer hover:text-gray-500"
        >
          AlphaProfessional
        </Link>

        <ul className="flex space-x-6 text-gray-600">
          <li>
            <Link
              href="/"
              className="cursor-pointer hover:text-black"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/book-online"
              className="cursor-pointer hover:text-black"
            >
              Book Online
            </Link>
          </li>
          <li>
            <Link
              href="/shop"
              className="cursor-pointer hover:text-black"
            >
              Shop
            </Link>
          </li>
          <li>
            <Link
              href="/blog"
              className="cursor-pointer hover:text-black"
            >
              Blog
            </Link>
          </li>
        </ul>

        <div>
          <input
            type="text"
            placeholder="Search"
            className="px-4 py-1 border rounded-full focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
        </div>
      </nav>
    </header>
  );
}
