import React from 'react';
import { Mail, Phone, MapPin, Clock, Calendar, MessageCircle, FileText, Users } from 'lucide-react';

const EthicsContact = () => {
  const contactInfo = [
    {
      title: "Research Ethics Office",
      email: "ethics@sinu.edu.sb",
      phone: "+677 30145",
      office: "Research Building, Level 2, Room 205",
      hours: "Monday - Friday: 8:00 AM - 5:00 PM"
    }
  ];

  const committeContacts = [
    {
      committee: "Human Research Ethics Committee (HREC)",
      chair: "Prof. Dr. Mary Taukila",
      email: "hrec@sinu.edu.sb",
      secretary: "Ms. Jane Maeluta",
      meetingDay: "Second Tuesday of each month"
    },
    {
      committee: "Animal Ethics Committee (AEC)",
      chair: "Dr. James Waigani",
      email: "aec@sinu.edu.sb",
      secretary: "Mr. David Qalo",
      meetingDay: "First Thursday of each month"
    },
    {
      committee: "Biosafety Committee",
      chair: "Dr. Sarah Kere",
      email: "biosafety@sinu.edu.sb",
      secretary: "Ms. Ruth Maetala",
      meetingDay: "Third Wednesday of each month"
    },
    {
      committee: "Research Integrity Committee",
      chair: "Prof. Dr. Peter Qalo",
      email: "integrity@sinu.edu.sb",
      secretary: "Dr. Grace Pollard",
      meetingDay: "As required"
    }
  ];

  const quickActions = [
    {
      title: "Submit Ethics Application",
      description: "Access the online portal to submit your ethics application",
      action: "Go to Portal",
      icon: FileText,
      color: '#ffb703'
    },
    {
      title: "Schedule Consultation",
      description: "Book a meeting with our ethics team for guidance",
      action: "Book Meeting",
      icon: Calendar,
      color: '#8ecae6'
    },
    {
      title: "Join Ethics Training",
      description: "Register for upcoming ethics training sessions",
      action: "Register Now",
      icon: Users,
      color: '#219ebc'
    },
    {
      title: "Report Concern",
      description: "Confidentially report any ethics-related concerns",
      action: "Submit Report",
      icon: MessageCircle,
      color: '#d7a12c'
    }
  ];

  return (
    <section className="py-16" style={{ backgroundColor: '#ffffff' }}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#082952' }}>
            Contact Ethics Committee
          </h2>
          <p className="text-lg leading-relaxed" style={{ color: '#082952' }}>
            Get in touch with our ethics team for support, guidance, and information
          </p>
        </div>

        {/* Main Contact Information */}
        <div 
          className="rounded-lg p-8 mb-12 text-center"
          style={{ backgroundColor: '#edf4ff', border: '1px solid #8ecae6' }}
        >
          <h3 className="text-2xl font-bold mb-6" style={{ color: '#082952' }}>
            Research Ethics Office
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex flex-col items-center">
              <div 
                className="w-12 h-12 rounded-full flex items-center justify-center mb-3"
                style={{ backgroundColor: '#ffb703' }}
              >
                <Mail className="w-6 h-6" style={{ color: '#082952' }} />
              </div>
              <h4 className="font-semibold mb-1" style={{ color: '#082952' }}>Email</h4>
              <p className="text-sm" style={{ color: '#082952' }}>ethics@sinu.edu.sb</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div 
                className="w-12 h-12 rounded-full flex items-center justify-center mb-3"
                style={{ backgroundColor: '#8ecae6' }}
              >
                <Phone className="w-6 h-6" style={{ color: '#082952' }} />
              </div>
              <h4 className="font-semibold mb-1" style={{ color: '#082952' }}>Phone</h4>
              <p className="text-sm" style={{ color: '#082952' }}>+677 30145</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div 
                className="w-12 h-12 rounded-full flex items-center justify-center mb-3"
                style={{ backgroundColor: '#219ebc' }}
              >
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold mb-1" style={{ color: '#082952' }}>Location</h4>
              <p className="text-sm text-center" style={{ color: '#082952' }}>Research Building<br />Level 2, Room 205</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div 
                className="w-12 h-12 rounded-full flex items-center justify-center mb-3"
                style={{ backgroundColor: '#d7a12c' }}
              >
                <Clock className="w-6 h-6" style={{ color: '#082952' }} />
              </div>
              <h4 className="font-semibold mb-1" style={{ color: '#082952' }}>Office Hours</h4>
              <p className="text-sm text-center" style={{ color: '#082952' }}>Mon-Fri<br />8:00 AM - 5:00 PM</p>
            </div>
          </div>
        </div>

        {/* Committee Contacts */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-center mb-8" style={{ color: '#082952' }}>
            Committee Contacts
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {committeContacts.map((committee, index) => (
              <div 
                key={index}
                className="rounded-lg p-6 shadow-lg"
                style={{ 
                  backgroundColor: '#edf4ff',
                  border: '1px solid #8ecae6'
                }}
              >
                <h4 className="text-lg font-bold mb-3" style={{ color: '#082952' }}>
                  {committee.committee}
                </h4>
                
                <div className="space-y-2 text-sm">
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-2" style={{ color: '#219ebc' }} />
                    <span style={{ color: '#082952' }}>
                      <strong>Chair:</strong> {committee.chair}
                    </span>
                  </div>
                  
                  <div className="flex items-center">
                    <Mail className="w-4 h-4 mr-2" style={{ color: '#219ebc' }} />
                    <span style={{ color: '#082952' }}>
                      <strong>Email:</strong> {committee.email}
                    </span>
                  </div>
                  
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-2" style={{ color: '#219ebc' }} />
                    <span style={{ color: '#082952' }}>
                      <strong>Secretary:</strong> {committee.secretary}
                    </span>
                  </div>
                  
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" style={{ color: '#219ebc' }} />
                    <span style={{ color: '#082952' }}>
                      <strong>Meetings:</strong> {committee.meetingDay}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-8" style={{ color: '#082952' }}>
            Quick Actions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickActions.map((action, index) => (
              <div 
                key={index}
                className="rounded-lg p-6 shadow-lg text-center hover:shadow-xl transition-all duration-300 cursor-pointer"
                style={{ 
                  backgroundColor: '#ffffff',
                  border: '1px solid #8ecae6'
                }}
              >
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: action.color }}
                >
                  <action.icon className="w-8 h-8" style={{ color: '#082952' }} />
                </div>
                
                <h4 className="text-lg font-bold mb-2" style={{ color: '#082952' }}>
                  {action.title}
                </h4>
                
                <p className="text-sm mb-4" style={{ color: '#082952' }}>
                  {action.description}
                </p>
                
                <button 
                  className="px-4 py-2 rounded-lg font-medium transition-all duration-200 hover:shadow-md text-sm"
                  style={{ backgroundColor: '#219ebc', color: '#ffffff' }}
                >
                  {action.action}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Emergency Contact */}
        <div 
          className="rounded-lg p-6 mt-12 text-center"
          style={{ backgroundColor: '#ffffff', border: '2px solid #d7a12c' }}
        >
          <h3 className="text-xl font-bold mb-3" style={{ color: '#082952' }}>
            Ethics Emergency Contact
          </h3>
          <p className="mb-4" style={{ color: '#082952' }}>
            For urgent ethics-related concerns or emergencies outside office hours
          </p>
          <div className="flex items-center justify-center space-x-4">
            <div className="flex items-center">
              <Phone className="w-4 h-4 mr-2" style={{ color: '#d7a12c' }} />
              <span style={{ color: '#082952' }}>Emergency: +677 30199</span>
            </div>
            <div className="flex items-center">
              <Mail className="w-4 h-4 mr-2" style={{ color: '#d7a12c' }} />
              <span style={{ color: '#082952' }}>urgent.ethics@sinu.edu.sb</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EthicsContact;