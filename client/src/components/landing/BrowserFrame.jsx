import { motion } from "framer-motion";

export default function BrowserFrame({
  image,
  title = "SparkChat",
  className = "",
}) {
  return (
    <motion.div
      whileHover={{
        y: -6,
        scale: 1.02,
      }}
      transition={{ duration: 0.25 }}
      className={`overflow-hidden rounded-3xl border border-base-300 bg-base-100 shadow-xl ${className}`}
    >
      {/* Browser Header */}
      <div className="flex items-center justify-between border-b border-base-300 bg-base-200 px-4 py-3">

        <div className="flex gap-2">
          <div className="h-3 w-3 rounded-full bg-red-400" />
          <div className="h-3 w-3 rounded-full bg-yellow-400" />
          <div className="h-3 w-3 rounded-full bg-green-400" />
        </div>

        <span className="text-xs text-base-content/60">
          {title}
        </span>

        <div className="w-8" />

      </div>

      <img
        src={image}
        alt={title}
        className="w-full object-cover"
      />
    </motion.div>
  );
}