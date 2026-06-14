import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { StatsBar } from "./components/StatsBar";
import { Services } from "./components/Services";
import { Coverage } from "./components/coverage";
import { Ports } from "./components/Ports";
import { MissionVision } from "./components/MissionVision";
import { ContactSection } from "./components/ContactSection";
import { EventsGallery } from "./components/EventsGallery";
import { ClientsCarousel } from "./components/ClientsCarousel";
import { Footer } from "./components/Footer";
import { WhatsAppButton } from "./components/WhatsappButton";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <StatsBar />
      <Services />
      <Coverage />
      <Ports />
      <MissionVision />
      <EventsGallery />
      <ClientsCarousel />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
