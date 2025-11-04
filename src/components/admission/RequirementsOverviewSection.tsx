
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Clock, Users, FileText, ArrowRight } from 'lucide-react';
import { Button } from '../ui/button';

const RequirementsOverviewSection = () => {
  return (
    <section className="py-16 bg-[#edf4ff] relative">
      {/* Background Image */}
      <div 
        className="absolute inset-0 opacity-100"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1200&q=80&auto=format&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      <div className="container mx-auto px-4 relative z-10 flex justify-start py-8 ">
        <div className="max-w-lg w-full ">
          <div className="bg-gray-800  bg-opacity-90 rounded-lg p-8 shadow-lg">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
              International Excellence Scholarship
                        <span className="block h-1 w-20 bg-blue-600 mx-auto mt-2 rounded-sm"></span>

            </h2>
            <p className="text-lg text-white mb-8">
              SINU welcomes international students from around the world. Our admission process is designed to identify students who will thrive in our academic environment.
            </p>
            <div className="text-center mt-8 md:mt-8">
            <Button className="bg-[#035ac5ff] text-white hover:bg-[#082952]/90">
              Learn More
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RequirementsOverviewSection;
