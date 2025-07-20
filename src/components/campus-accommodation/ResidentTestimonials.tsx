import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

export const ResidentTestimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      program: "Bachelor of Business Administration",
      residence: "Pacific Hall",
      quote: "Living on campus has been the best decision I made. The community here is amazing, and having everything I need within walking distance makes focusing on my studies so much easier.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&q=80&auto=format&fit=crop"
    },
    {
      name: "Michael Chen",
      program: "Bachelor of Marine Science",
      residence: "Coral Gardens Apartments",
      quote: "The independent apartment style gives me the perfect balance of privacy and community. I love being able to cook my own meals while still being part of the campus life.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80&auto=format&fit=crop"
    },
    {
      name: "Grace Manu",
      program: "Bachelor of Education",
      residence: "Hibiscus College",
      quote: "The support I receive here is incredible. From academic tutoring to wellbeing services, SINU accommodation has helped me succeed both personally and academically.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80&auto=format&fit=crop"
    }
  ];

  return (
    <section className="py-16" style={{ backgroundColor: '#ffffff' }}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#082952' }}>
              Meet Our Residents
            </h2>
            <p className="text-lg max-w-3xl mx-auto" style={{ color: '#082952' }}>
              Hear from our residents about their SINU accommodation experience and how it supports their academic journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300" style={{ borderColor: '#8ecae6' }}>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Quote className="h-8 w-8 mr-3" style={{ color: '#ffb703' }} />
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current" style={{ color: '#ffb703' }} />
                      ))}
                    </div>
                  </div>
                  
                  <p className="mb-6 italic" style={{ color: '#082952' }}>
                    "{testimonial.quote}"
                  </p>
                  
                  <div className="flex items-center">
                    <img 
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h4 className="font-semibold" style={{ color: '#082952' }}>{testimonial.name}</h4>
                      <p className="text-sm" style={{ color: '#219ebc' }}>{testimonial.program}</p>
                      <p className="text-xs" style={{ color: '#8ecae6' }}>{testimonial.residence}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Card 
              className="p-8 max-w-2xl mx-auto"
              style={{ backgroundColor: 'rgba(142, 202, 230, 0.1)', borderColor: '#8ecae6' }}
            >
              <h3 className="text-xl font-bold mb-4" style={{ color: '#082952' }}>
                Join Our Community
              </h3>
              <p style={{ color: '#082952' }}>
                Become part of a vibrant community of students from around the Pacific region. 
                Experience the perfect blend of academic focus, cultural diversity, and lifelong friendships.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};