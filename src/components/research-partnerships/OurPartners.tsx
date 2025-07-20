import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const OurPartners = () => {
  const partnerCategories = [
    {
      category: "International Universities",
      partners: [
        "University of the South Pacific",
        "Australian National University",
        "University of Queensland",
        "Victoria University of Wellington",
        "University of Hawaii"
      ],
      color: "#219ebc"
    },
    {
      category: "Government Agencies",
      partners: [
        "Ministry of Education",
        "Ministry of Health",
        "Ministry of Environment",
        "Solomon Islands Government",
        "Pacific Islands Forum"
      ],
      color: "#d7a12c"
    },
    {
      category: "Industry Partners",
      partners: [
        "Pacific Mining Company",
        "Solomon Islands Electricity Authority",
        "Solomon Telekom",
        "Tourism Solomons",
        "Solomon Islands Chamber of Commerce"
      ],
      color: "#ffb703"
    },
    {
      category: "International Organizations",
      partners: [
        "World Bank",
        "Asian Development Bank",
        "United Nations",
        "Pacific Community (SPC)",
        "UNESCO"
      ],
      color: "#8ecae6"
    }
  ];

  return (
    <section className="py-16" style={{ backgroundColor: '#ffffff' }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#082952' }}>
            Our Valued Partners
          </h2>
          <p className="text-lg max-w-3xl mx-auto" style={{ color: '#082952' }}>
            SINU collaborates with leading institutions, organizations, and agencies across the Pacific 
            and beyond to advance research, education, and community development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {partnerCategories.map((category, index) => (
            <Card 
              key={index}
              className="border-2 hover:shadow-lg transition-all duration-300"
              style={{ 
                borderColor: category.color,
                backgroundColor: '#edf4ff'
              }}
            >
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4" style={{ color: '#082952' }}>
                  {category.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.partners.map((partner, partnerIndex) => (
                    <Badge 
                      key={partnerIndex}
                      variant="secondary"
                      className="text-sm"
                      style={{ 
                        backgroundColor: category.color,
                        color: '#ffffff'
                      }}
                    >
                      {partner}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};