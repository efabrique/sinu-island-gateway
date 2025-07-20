import React from 'react';
import { Check, Star, Users, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const MembershipSection = () => {
  const membershipPlans = [
    {
      name: "Student Basic",
      price: "$25",
      period: "/month",
      description: "Perfect for students on a budget",
      features: [
        "Gym access during peak hours",
        "Group fitness classes",
        "Locker room access",
        "Student discount rates",
        "Social sports participation"
      ],
      popular: false,
      icon: Users
    },
    {
      name: "Student Premium",
      price: "$40",
      period: "/month",
      description: "Most popular choice for active students",
      features: [
        "24/7 gym access",
        "All group fitness classes",
        "Pool & aquatic centre",
        "Personal training discount",
        "Equipment hire included",
        "Guest passes (2/month)"
      ],
      popular: true,
      icon: Star
    },
    {
      name: "Staff & Alumni",
      price: "$55",
      period: "/month",
      description: "Comprehensive access for staff and alumni",
      features: [
        "24/7 facility access",
        "All programs included",
        "Priority booking",
        "Family member discounts",
        "Free personal training session",
        "Unlimited guest passes"
      ],
      popular: false,
      icon: Clock
    }
  ];

  const additionalBenefits = [
    "Free initial fitness assessment",
    "Access to sports equipment",
    "Discounted massage therapy",
    "Nutrition consultation available",
    "Campus-wide reciprocal access",
    "Student wellness workshops"
  ];

  return (
    <section className="py-16 px-4" style={{ backgroundColor: '#ffffff' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#082952' }}>
            Membership Plans
          </h2>
          <p className="text-lg max-w-3xl mx-auto leading-relaxed" style={{ color: '#082952' }}>
            Choose the membership plan that best fits your lifestyle and budget. 
            All plans include access to our core facilities and programs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {membershipPlans.map((plan, index) => (
            <Card 
              key={index}
              className={`relative transition-all duration-300 hover:shadow-xl border-2 ${
                plan.popular ? 'transform scale-105' : ''
              }`}
              style={{ 
                backgroundColor: plan.popular ? '#edf4ff' : '#ffffff',
                borderColor: plan.popular ? '#219ebc' : '#8ecae6'
              }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge 
                    className="px-4 py-1"
                    style={{ 
                      backgroundColor: '#ffb703',
                      color: '#082952'
                    }}
                  >
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <div 
                  className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: plan.popular ? '#219ebc' : '#d7a12c' }}
                >
                  <plan.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl" style={{ color: '#082952' }}>
                  {plan.name}
                </CardTitle>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-3xl font-bold" style={{ color: '#d7a12c' }}>
                    {plan.price}
                  </span>
                  <span className="text-sm" style={{ color: '#082952' }}>
                    {plan.period}
                  </span>
                </div>
                <p className="text-sm" style={{ color: '#082952' }}>
                  {plan.description}
                </p>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check 
                        className="h-5 w-5 flex-shrink-0 mt-0.5" 
                        style={{ color: '#219ebc' }} 
                      />
                      <span className="text-sm" style={{ color: '#082952' }}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className="w-full"
                  variant={plan.popular ? "default" : "outline"}
                  style={plan.popular ? { 
                    backgroundColor: '#219ebc',
                    borderColor: '#219ebc',
                    color: '#ffffff'
                  } : {
                    borderColor: '#219ebc',
                    color: '#219ebc'
                  }}
                >
                  Choose Plan
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Benefits */}
        <div 
          className="max-w-4xl mx-auto p-8 rounded-2xl text-center"
          style={{ backgroundColor: '#edf4ff', border: '2px solid #8ecae6' }}
        >
          <h3 className="text-2xl font-bold mb-6" style={{ color: '#082952' }}>
            All Memberships Include
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {additionalBenefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-2">
                <Check className="h-4 w-4 flex-shrink-0" style={{ color: '#219ebc' }} />
                <span className="text-sm" style={{ color: '#082952' }}>
                  {benefit}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MembershipSection;