import React from 'react';
import { Search, Filter, MapPin, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FindClubsSection: React.FC = () => {
  return (
    <section className="py-16 bg-[#8ecae6]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#082952] mb-6">
            Find Your Perfect Club
          </h2>
          <p className="text-lg text-[#082952] max-w-2xl mx-auto">
            New friends could be just a click away. Explore our complete directory of student groups and organizations.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-[#ffffff] rounded-lg p-8 shadow-lg border border-[#219ebc]">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#ffb703] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-[#082952]" />
                </div>
                <h3 className="font-semibold text-[#082952] mb-2">Search by Interest</h3>
                <p className="text-sm text-[#082952]">Find clubs based on your hobbies and passions</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-[#d7a12c] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Filter className="w-8 h-8 text-[#082952]" />
                </div>
                <h3 className="font-semibold text-[#082952] mb-2">Filter by Category</h3>
                <p className="text-sm text-[#082952]">Browse academic, cultural, sports, and special interest groups</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-[#219ebc] rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-[#ffffff]" />
                </div>
                <h3 className="font-semibold text-[#082952] mb-2">Location Based</h3>
                <p className="text-sm text-[#082952]">Find clubs that meet near you on campus</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-[#8ecae6] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-8 h-8 text-[#082952]" />
                </div>
                <h3 className="font-semibold text-[#082952] mb-2">Event Schedule</h3>
                <p className="text-sm text-[#082952]">Check upcoming meetings and activities</p>
              </div>
            </div>

            <div className="text-center">
              <Button className="bg-[#082952] hover:bg-[#219ebc] text-[#ffffff] px-8 py-3 text-lg">
                Browse All Clubs
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FindClubsSection;