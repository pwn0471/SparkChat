import Container from "./Container";
import HeroContent from "./HeroContent";
import HeroPreview from "./HeroPreview";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-36 pb-24">
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <HeroContent />
          <HeroPreview />
        </div>
      </Container>
    </section>
  );
}