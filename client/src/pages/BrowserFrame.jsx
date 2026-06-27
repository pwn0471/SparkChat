
import { motion } from "framer-motion";

export default function BrowserFrame({
  image,
  title = "sparkchat.app",
  className = "",
}) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      transition={{
        duration: 0.3,
      }}
      className={`overflow-hidden rounded-3xl border border-base-300 bg-base-200 shadow-2xl ${className}`}
    >
      {/* Browser Header */}

      <div className="flex items-center justify-between border-b border-base-300 bg-base-300/30 px-5 py-3">

        <div className="flex gap-2">
          <div className="h-3 w-3 rounded-full bg-red-400" />
          <div className="h-3 w-3 rounded-full bg-yellow-400" />
          <div className="h-3 w-3 rounded-full bg-green-400" />
        </div>

        <div className="rounded-full bg-base-100 px-4 py-1 text-xs text-base-content/60">
          {title}
        </div>

        <div className="w-10" />

      </div>

      {/* Screenshot */}

      <img
        src={image}
        alt={title}
        className="w-full object-cover"
      />

    </motion.div>
  );
}