
import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer = () => {
  return (
    <footer className="bg-[#023047] text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* University Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Solomon Islands National University</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 shrink-0 mt-0.5" />
                <span>Kukum Highway, Honiara, Solomon Islands</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 shrink-0" />
                <span>+677 12345678</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 shrink-0" />
                <span>info@sinu.edu.sb</span>
              </li>
            </ul>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="hover:text-[#ffb703]">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-[#ffb703]">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-[#ffb703]">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-[#ffb703]">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-[#ffb703] hover:underline">Academic Calendar</a></li>
              <li><a href="#" className="hover:text-[#ffb703] hover:underline">Library Resources</a></li>
              <li><a href="#" className="hover:text-[#ffb703] hover:underline">Career Services</a></li>
              <li><a href="#" className="hover:text-[#ffb703] hover:underline">Campus Map</a></li>
              <li><a href="#" className="hover:text-[#ffb703] hover:underline">Faculty Directory</a></li>
              <li><a href="#" className="hover:text-[#ffb703] hover:underline">Student Handbook</a></li>
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h3 className="text-xl font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-[#ffb703] hover:underline">Admissions</a></li>
              <li><a href="#" className="hover:text-[#ffb703] hover:underline">Financial Aid</a></li>
              <li><a href="#" className="hover:text-[#ffb703] hover:underline">International Students</a></li>
              <li><a href="#" className="hover:text-[#ffb703] hover:underline">Research Publications</a></li>
              <li><a href="#" className="hover:text-[#ffb703] hover:underline">News & Events</a></li>
              <li><a href="#" className="hover:text-[#ffb703] hover:underline">COVID-19 Updates</a></li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-4">Subscribe to Newsletter</h3>
            <p className="mb-4">Stay updated with the latest news, events, and announcements.</p>
            <div className="space-y-3">
              <Input 
                type="email" 
                placeholder="Your email address" 
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
              />
              <Button className="w-full bg-[#ffb703] text-[#023047] hover:bg-[#ffb703]/90">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Footer */}
      <div className="border-t border-white/20 py-6">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <p>Designed by Dean Foy. &copy; {new Date().getFullYear()} Solomon Islands National University. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <ul className="flex flex-wrap space-x-4 justify-center">
              <li><a href="#" className="hover:text-[#ffb703] hover:underline text-sm">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-[#ffb703] hover:underline text-sm">Terms of Use</a></li>
              <li><a href="#" className="hover:text-[#ffb703] hover:underline text-sm">Sitemap</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
