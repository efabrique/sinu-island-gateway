import React from 'react';
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
    <div className="min-h-screen">
      <CampusEventsHero />
      <EventsOverview />
      <UpcomingEvents />
      <EventCategories />
      <FeaturedEvents />
      <EventCalendar />
      <StudentOrganizations />
      <EventSubmission />
      <ContactEvents />
    </div>
  );
};

export default CampusEvents;