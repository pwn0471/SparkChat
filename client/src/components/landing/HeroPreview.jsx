import { motion } from "framer-motion";
import BrowserFrame from "./BrowserFrame";

export default function HeroPreview() {
  return (
    <div className="relative hidden h-[650px] items-center justify-center lg:flex">

      {/* Background Glow */}
      <div className="absolute h-[500px] w-[500px] rounded-full bg-primary/20 blur-[120px]" />

      {/* Main Dashboard */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-20"
      >
        <BrowserFrame
          image="/screenshots/home.png"
          title="https://sparkchat.app"
          className="w-[540px]"
        />
      </motion.div>

      {/* Chat Preview */}
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-5 left-0 z-30"
      >
        <BrowserFrame
          image="/screenshots/chat.png"
          title="Live Chat"
          className="w-64"
        />
      </motion.div>

      {/* Calling Preview */}
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-0 top-20 z-30"
      >
        <BrowserFrame
          image="/screenshots/calling.png"
          title="HD Video Call"
          className="w-64"
        />
      </motion.div>

      {/* Floating Badge 1 */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
        className="absolute left-8 top-8 rounded-full border border-base-300 bg-base-100 px-4 py-2 shadow-xl"
      >
        <span className="text-sm font-medium">
          💬 Real-Time Messaging
        </span>
      </motion.div>

      {/* Floating Badge 2 */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
        className="absolute bottom-0 right-8 rounded-full border border-base-300 bg-base-100 px-4 py-2 shadow-xl"
      >
        <span className="text-sm font-medium">
          📹 Crystal Clear Video Calls
        </span>
      </motion.div>

      {/* Floating Badge 3 */}
      <motion.div
        animate={{ x: [0, 10, 0] }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
        className="absolute right-20 top-2 rounded-full border border-base-300 bg-base-100 px-4 py-2 shadow-xl"
      >
        <span className="text-sm font-medium">
          🔐 JWT Secure
        </span>
      </motion.div>

      {/* Floating Badge 4 */}
      <motion.div
        animate={{ x: [0, -10, 0] }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
        className="absolute bottom-32 left-4 rounded-full border border-base-300 bg-base-100 px-4 py-2 shadow-xl"
      >
        <span className="text-sm font-medium">
          🎨 30+ Themes
        </span>
      </motion.div>
    </div>
  );
}