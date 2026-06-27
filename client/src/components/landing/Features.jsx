import {
  MessageCircle,
  Video,
  Users,
  Shield,
  Bell,
  Palette,
} from "lucide-react";
import Container from "./Container";

const features = [
  {
    icon: MessageCircle,
    title: "Real-Time Chat",
    description: "Instant messaging powered by Stream Chat SDK.",
  },
  {
    icon: Video,
    title: "HD Video Calls",
    description: "Crystal-clear video and audio calling experience.",
  },
  {
    icon: Users,
    title: "Friend System",
    description: "Send, receive and manage friend requests easily.",
  },
  {
    icon: Shield,
    title: "Secure Authentication",
    description: "JWT authentication with encrypted passwords.",
  },
  {
    icon: Bell,
    title: "Notifications",
    description: "Receive instant updates for friend requests.",
  },
  {
    icon: Palette,
    title: "30+ Themes",
    description: "Personalize the app with beautiful DaisyUI themes.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24">
      <Container>

        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold">
            Everything You Need
          </h2>

          <p className="mt-4 text-base-content/70">
            SparkChat brings messaging, video calling and social
            networking together in one modern application.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="rounded-2xl border border-base-300 bg-base-100 p-6 transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon size={24} />
                </div>

                <h3 className="mt-5 text-xl font-semibold">
                  {feature.title}
                </h3>

                <p className="mt-3 text-base-content/70">
                  {feature.description}
                </p>
              </div>
            );
          })}

        </div>

      </Container>
    </section>
  );
}