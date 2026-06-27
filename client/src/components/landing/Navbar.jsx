import { useState } from "react";
import { Link } from "react-router";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Features", href: "#features" },
    { name: "Showcase", href: "#showcase" },
    { name: "Tech Stack", href: "#tech" },
  ];

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-base-300/50 bg-base-100/80 backdrop-blur-lg">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="SparkChat Logo"
            className="h-10 w-10 object-contain"
          />

          <h1 className="text-2xl font-bold tracking-tight">
            <span className="text-primary">Spark</span>Chat
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-base-content/70 transition-all duration-300 hover:text-primary"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden items-center gap-3 lg:flex">
          <Link to="/login" className="btn btn-ghost">
            Login
          </Link>

          <Link to="/signup" className="btn btn-primary rounded-xl px-6">
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="btn btn-ghost lg:hidden"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t border-base-300 bg-base-100 lg:hidden">
          <div className="flex flex-col p-6">

            {navLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="py-3 text-base-content/80 transition hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}

            <div className="mt-4 flex flex-col gap-3">
              <Link to="/login" className="btn btn-outline">
                Login
              </Link>

              <Link to="/signup" className="btn btn-primary">
                Get Started
              </Link>
            </div>

          </div>
        </div>
      )}
    </header>
  );
}