import { useState } from "react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-purple-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-white text-lg font-bold">
          CuidaPet
        </a>
        <button
          className="text-white md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
        <ul
          className={`flex-col md:flex md:flex-row md:space-x-4 ${
            isOpen ? "flex" : "hidden"
          }`}
        >
          <li>
            <a href="/" className="text-gray-300 hover:text-white">
              Home
            </a>
          </li>
          <li>
            <a href="/about" className="text-gray-300 hover:text-white">
              About
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
