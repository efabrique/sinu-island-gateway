import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, Filter } from 'lucide-react';

const SearchPartnersSection = () => {
  return (
    <section className="py-16" style={{ backgroundColor: '#edf4ff' }}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#082952' }}>
              Find Your Perfect Partner University
            </h2>
            <p className="text-lg" style={{ color: '#082952' }}>
              Search and filter through our extensive database of partner institutions
            </p>
          </div>

          <Card className="border-none shadow-lg" style={{ backgroundColor: '#ffffff' }}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2" style={{ color: '#082952' }}>
                <Search className="w-5 h-5" style={{ color: '#219ebc' }} />
                Partner University Search
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: '#082952' }}>
                    Search by University Name
                  </label>
                  <Input 
                    placeholder="Enter university name..." 
                    className="border-gray-300 focus:border-[#219ebc]"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: '#082952' }}>
                    Country/Region
                  </label>
                  <Select>
                    <SelectTrigger className="border-gray-300 focus:border-[#219ebc]">
                      <SelectValue placeholder="Select country" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="australia">Australia</SelectItem>
                      <SelectItem value="japan">Japan</SelectItem>
                      <SelectItem value="singapore">Singapore</SelectItem>
                      <SelectItem value="uk">United Kingdom</SelectItem>
                      <SelectItem value="usa">United States</SelectItem>
                      <SelectItem value="canada">Canada</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: '#082952' }}>
                    Study Area
                  </label>
                  <Select>
                    <SelectTrigger className="border-gray-300 focus:border-[#219ebc]">
                      <SelectValue placeholder="Select field" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="business">Business</SelectItem>
                      <SelectItem value="engineering">Engineering</SelectItem>
                      <SelectItem value="sciences">Sciences</SelectItem>
                      <SelectItem value="arts">Arts & Humanities</SelectItem>
                      <SelectItem value="medicine">Medicine</SelectItem>
                      <SelectItem value="law">Law</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-4">
                <Button 
                  className="flex-1"
                  style={{ 
                    backgroundColor: '#219ebc', 
                    color: '#ffffff'
                  }}
                >
                  <Search className="w-4 h-4 mr-2" />
                  Search Partners
                </Button>
                <Button 
                  variant="outline"
                  style={{ 
                    borderColor: '#ffb703', 
                    color: '#ffb703',
                    backgroundColor: 'transparent'
                  }}
                >
                  <Filter className="w-4 h-4 mr-2" />
                  Advanced Filters
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="mt-8 border-none shadow-lg" style={{ backgroundColor: '#8ecae6' }}>
            <CardContent className="p-8 text-center">
              <h3 className="text-xl font-bold mb-4" style={{ color: '#082952' }}>
                Access the Global Programs System
              </h3>
              <p className="mb-6" style={{ color: '#082952' }}>
                For detailed information about each partner university, application procedures, 
                and available programs, visit our comprehensive Global Programs System.
              </p>
              <Button 
                size="lg"
                style={{ 
                  backgroundColor: '#ffb703', 
                  color: '#082952',
                  fontWeight: '600'
                }}
              >
                Access Global Programs System
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SearchPartnersSection;