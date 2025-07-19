import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/common/BackToTop";
import { InternationalEventsHero } from "@/components/international-events/InternationalEventsHero";
import { EventsOverview } from "@/components/international-events/EventsOverview";
import { UpcomingEvents } from "@/components/international-events/UpcomingEvents";
import { EventsCategories } from "@/components/international-events/EventsCategories";
import { GlobalEventLocations } from "@/components/international-events/GlobalEventLocations";
import { VirtualEvents } from "@/components/international-events/VirtualEvents";
import { EventsSupport } from "@/components/international-events/EventsSupport";

const InternationalEvents = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <InternationalEventsHero />
        <EventsOverview />
        <UpcomingEvents />
        <EventsCategories />
        <GlobalEventLocations />
        <VirtualEvents />
        <EventsSupport />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default InternationalEvents;