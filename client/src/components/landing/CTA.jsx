import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
import Container from "./Container";

export default function CTA() {
  return (
    <section className="py-24">
      <Container>

        <div className="rounded-3xl bg-primary text-primary-content px-8 py-16 text-center">

          <h2 className="text-4xl font-bold">
            Ready to Start Connecting?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-primary-content/80">
            Join SparkChat today and experience real-time messaging,
            HD video calling, and meaningful connections—all in one place.
          </p>

          <Link
            to="/signup"
            className="btn btn-neutral mt-8 rounded-xl"
          >
            Get Started

            <ArrowRight size={18} />
          </Link>

        </div>

      </Container>
    </section>
  );
}