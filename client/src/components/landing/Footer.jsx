import { Link } from "react-router";

export default function Footer() {
  return (
    <footer className="border-t border-base-300 py-8">

      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row">

        {/* Logo */}

        <div className="flex items-center gap-3">

          <img
            src="/logo1.png"
            alt="SparkChat"
            className="h-10 w-10"
          />

          <h2 className="text-xl font-bold">
            <span className="text-primary">Spark</span>Chat
          </h2>

        </div>

        {/* Links */}

        <div className="flex gap-6 text-sm">

          <a href="#features" className="hover:text-primary">
            Features
          </a>

          <a href="#showcase" className="hover:text-primary">
            Showcase
          </a>

          <Link to="/login" className="hover:text-primary">
            Login
          </Link>

          <Link to="/signup" className="hover:text-primary">
            Sign Up
          </Link>

        </div>

        {/* Copyright */}

        <p className="text-sm text-base-content/60">
          © {new Date().getFullYear()} SparkChat. All rights reserved.
        </p>

      </div>

    </footer>
  );
}