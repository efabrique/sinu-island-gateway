import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import React from "react";

// Example images, replace with actual URLs or imports
const trainingImage = "public/lovable-uploads/49aaf3f8-456b-4260-8aa7-3110587fb521.png";
const instructorsImage = "public/lovable-uploads/49aaf3f8-456b-4260-8aa7-3110587fb521.png";

const TafeEnrollment: React.FC = () => {
  const benefits = [
    "Learn new and practical skills",
    "Update and improve existing knowledge",
    "Build toward formal qualifications such as Certificate II, III, and IV",
    "Obtain formal recognition for skills gained through work experience",
  ];

  const reasonsToEnroll = [
    "1. Develop work-ready skills tailored to the needs of local industries.",
    "2. Enhance your career prospects with recognized qualifications.",
    "3. Flexible training designed for busy professionals and learners.",
    "4. Training facilitated by experienced instructors using practical methods.",
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Header />
      <section className="relative bg-gradient-to-r from-blue-900 to-indigo-600 text-white py-20 px-6 text-center md:text-left md:px-16">
        <div className="md:flex md:items-center md:justify-between">
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              SINU TAFE
            </h1>
            <h1 className="text-4xl md:text-5xl font-bold mb-8">
              Skillset Trainings – Semester 2, 2025
            </h1>
            <a
              href="#enroll"
              className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-gray-100 transition"
            >
              Enroll Now
            </a>
          </div>
          <div className="md:w-1/2 mt-10 md:mt-0">
            <img
              src={trainingImage}
              alt="SINU TAFE Training"
              className="rounded-xl shadow-xl hover:scale-105 transition-transform duration-300 w-full"
            />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6 md:px-16 bg-white">
                    <p className="text-lg md:text-xl mb-6">
              Solomon Islands National University – Technical and Further Education (SINU TAFE) is excited to offer a range of Skillset Trainings designed for industries, organizations, and individuals.
            </p>
        <h2 className="text-3xl font-bold text-center mb-5 py-8">What You Will Learn</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-xl p-6 text-center hover:shadow-lg transition-shadow cursor-pointer"
            >
              <div className="text-4xl mb-4">🎓</div>
              <h3 className="font-semibold text-lg">{benefit}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Why Enroll Section */}
      <section className="py-2 px-6 md:px-16 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-2">Why Enrol?</h2>
        <div className="md:flex md:items-center md:justify-between gap-10">
          <div className="md:w-1/2 grid gap-6">
            {reasonsToEnroll.map((reason, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-shadow"
              >
                <h4 className="font-semibold">{reason}</h4>
              </div>
            ))}
          </div>
          <div className="md:w-1/2 mt-10 md:mt-0">
            <img
              src={instructorsImage}
              alt="Instructors"
              className="rounded-xl shadow-xl hover:scale-105 transition-transform duration-300 w-full py-20"
            />
          </div>
        </div>
      </section>

      {/* Enrollment Section */}
      <section id="enroll" className="py-20 px-6 md:px-16 bg-gradient-to-r from-indigo-600 to-blue-600 text-white text-center rounded-t-3xl">
        <h2 className="text-3xl font-bold mb-6">Ready to Join SINU TAFE?</h2>
        <p className="mb-8 max-w-2xl mx-auto">
          Whether you’re seeking employment, aiming to improve your work performance, or planning to progress your education, SINU TAFE’s skillsets provide flexible and industry-relevant training opportunities.
        </p>
        <a
          href="/enrollment-form"
          className="inline-block bg-white text-blue-600 font-semibold px-8 py-4 rounded-lg shadow-lg hover:bg-gray-100 transition"
        >
          Start Enrollment
        </a>
      </section>
      <Footer/>
    </div>
  );
};

export default TafeEnrollment;
