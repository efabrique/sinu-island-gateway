import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import BackToTop from '@/components/common/BackToTop';
import TransportationHero from '@/components/transportation/TransportationHero';
import TransportOverview from '@/components/transportation/TransportOverview';
import TransportServices from '@/components/transportation/TransportServices';
import StudentTicketInfo from '@/components/transportation/StudentTicketInfo';
import CampusTransport from '@/components/transportation/CampusTransport';
import TransportTips from '@/components/transportation/TransportTips';
import ContactTransport from '@/components/transportation/ContactTransport';

const Transportation = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <TransportationHero />
        <TransportOverview />
        <TransportServices />
        <StudentTicketInfo />
        <CampusTransport />
        <TransportTips />
        <ContactTransport />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Transportation;