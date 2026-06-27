import { motion } from "framer-motion";
import Container from "./Container";
import BrowserFrame from "./BrowserFrame";

export default function Showcase() {
  return (
    <section
      id="showcase"
      className="relative overflow-hidden py-28"
    >
      {/* Background Glow */}
      <div className="absolute left-1/2 top-0 -z-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" />

      <Container>

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="badge badge-primary badge-outline px-5 py-4">
            Product Showcase
          </span>

          <h2 className="mt-6 text-4xl font-bold md:text-5xl">
            See SparkChat in Action
          </h2>

          <p className="mt-6 text-lg leading-8 text-base-content/70">
            Explore the actual SparkChat application. Built with the MERN
            stack and powered by Stream Chat & Video SDK, it delivers a fast,
            modern, and seamless communication experience.
          </p>
        </motion.div>

        {/* Showcase */}

        <div className="mt-20 space-y-10">

          {/* Home Dashboard */}

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <BrowserFrame
              image="/screenshots/home.png"
              title="https://sparkchat.app/home"
            />
          </motion.div>

          {/* Bottom Grid */}

          <div className="grid gap-8 lg:grid-cols-2">

            {/* Chat */}

            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <BrowserFrame
                image="/screenshots/chat.png"
                title="Real-Time Chat"
              />
            </motion.div>

            {/* Calling */}

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <BrowserFrame
                image="/screenshots/calling.png"
                title="HD Video Calling"
              />
            </motion.div>

          </div>

        </div>

      </Container>
    </section>
  );
}