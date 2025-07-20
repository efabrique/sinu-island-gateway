import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import BackToTop from '@/components/common/BackToTop';
import ErrorBoundary from '@/components/common/ErrorBoundary';
import { CampusEventsHero } from '@/components/campus-events/CampusEventsHero';
import { EventsOverview } from '@/components/campus-events/EventsOverview';
import { UpcomingEvents } from '@/components/campus-events/UpcomingEvents';
import { EventCategories } from '@/components/campus-events/EventCategories';
import { FeaturedEvents } from '@/components/campus-events/FeaturedEvents';
import { EventCalendar } from '@/components/campus-events/EventCalendar';
import { StudentOrganizations } from '@/components/campus-events/StudentOrganizations';
import { EventSubmission } from '@/components/campus-events/EventSubmission';
import { ContactEvents } from '@/components/campus-events/ContactEvents';

const CampusEvents = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <ErrorBoundary>
        <Header />
      </ErrorBoundary>
      <main className="flex-grow">
        <ErrorBoundary>
          <CampusEventsHero />
        </ErrorBoundary>
        <ErrorBoundary>
          <EventsOverview />
        </ErrorBoundary>
        <ErrorBoundary>
          <UpcomingEvents />
        </ErrorBoundary>
        <ErrorBoundary>
          <EventCategories />
        </ErrorBoundary>
        <ErrorBoundary>
          <FeaturedEvents />
        </ErrorBoundary>
        <ErrorBoundary>
          <EventCalendar />
        </ErrorBoundary>
        <ErrorBoundary>
          <StudentOrganizations />
        </ErrorBoundary>
        <ErrorBoundary>
          <EventSubmission />
        </ErrorBoundary>
        <ErrorBoundary>
          <ContactEvents />
        </ErrorBoundary>
      </main>
      <ErrorBoundary>
        <Footer />
      </ErrorBoundary>
      <BackToTop />
    </div>
  );
};

export default CampusEvents;