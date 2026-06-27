import { ArrowRight, PlayCircle } from "lucide-react";
import { Link } from "react-router";

export default function HeroContent() {
  return (
    <div className="max-w-2xl">

      {/* Badge */}
      <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
        🚀 Real-Time Chat & HD Video Calling
      </div>

      {/* Heading */}
      <h1 className="mt-8 text-5xl font-extrabold leading-tight md:text-6xl xl:text-7xl">

        Connect.

        <br />

        Chat.

        <br />

        <span className="text-primary">
          Meet.
        </span>

      </h1>

      {/* Description */}
      <p className="mt-8 text-lg leading-8 text-base-content/70">

        SparkChat is a modern communication platform where you can
        discover new people, chat instantly, send friend requests,
        and enjoy crystal-clear HD video calls—all in one beautiful
        application.

      </p>

      {/* Buttons */}
      <div className="mt-10 flex flex-wrap gap-4">

        <Link
          to="/signup"
          className="btn btn-primary btn-lg rounded-xl"
        >
          Get Started

          <ArrowRight size={18} />
        </Link>

        <button className="btn btn-outline btn-lg rounded-xl">

          <PlayCircle size={18} />

          View Demo

        </button>

      </div>

      {/* Stats */}
      <div className="mt-12 flex flex-wrap gap-8">

        <div>
          <h3 className="text-3xl font-bold text-primary">100%</h3>
          <p className="text-sm text-base-content/60">
            Responsive
          </p>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-primary">HD</h3>
          <p className="text-sm text-base-content/60">
            Video Calling
          </p>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-primary">Real-Time</h3>
          <p className="text-sm text-base-content/60">
            Messaging
          </p>
        </div>

      </div>

    </div>
  );
}