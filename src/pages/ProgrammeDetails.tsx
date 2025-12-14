import { useLocation, useParams } from "react-router-dom";
import ErrorBoundary from "@/components/common/ErrorBoundary";
import Header from "@/components/layout/Header";
import React, { useState, useEffect } from "react";
import Footer from "@/components/layout/Footer";
import ScrolledDesktopHeader from "@/components/layout/ScrolledDesktopHeader";
import ProgrammeHero from "@/components/programmes/ProgrammeHero";
import ProgrammeTab from "@/components/programmes/ProgrammeTab";
import ProgrammeOverview from "@/components/programmes/ProgrammeOverview";
import { Card, CardContent } from "../components/ui/card";


const ProgrammeDetails = () => {
  const { state } = useLocation();
  const { code } = useParams();
  const [scrolled, setScrolled] = useState(0);
  const { programme_entry_requirement, programme_english_requirement, programme_year, programme_department, programme_faculty, programme_code } = state || {};

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <ErrorBoundary>
        <ScrolledDesktopHeader />
      </ErrorBoundary>

      {/* Hero */}
      <ProgrammeHero />

      {/* Content with Left Nav */}
      <div className="flex w-full max-w-7xl mx-auto px-4 gap-6">

        {/* Left Navigation */}
        <aside className="hidden md:block w-64 sticky top-28 h-[calc(100vh-7rem)] overflow-y-auto border-r">
          <nav className="space-y-2 py-6">
            {[
              { id: "description", label: "Description" },
              { id: "admission_requirement", label: "Admission Requirement" },
              { id: "english_requirement", label: "English Language Requirement" },
              { id: "program_requirement", label: "Program Requirement" },
              { id: "program_structure", label: "Program Structure" },
              { id: "availabilty", label: "Availabilty" },
              { id: "siqf_level", label: "SIQF Level" },
              { id: "apply_now", label: "How to Apply" },
              { id: "contacts", label: "Program Contacts" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="w-full text-left px-4 py-5 text-m font-medium rounded-lg hover:bg-blue-100 hover:text-blue-600 transition"
              >
                {item.label}
              </button>
            ))}
          </nav>
        </aside>

        {/* Right Content */}
        <main className="flex-1 py-6 space-y-20">
          <section id="description">
            <ProgrammeOverview />
          </section>

          <section id="admission_requirement">
            <div className="min-h-[300px]">
              <Card className="w-full mb-8 shadow-lg border border-gray-200">
                <CardContent>

                  <div className="max-w-5xl mx-auto px-4 py-8">
                    <h2 className="text-2xl font-bold mb-4">
                      Admission Requirements
                    </h2>

                    <p className="text-[#082952] mb-4">
                      {programme_entry_requirement}
                    </p>
                    <p className="text-[#082952] mb-4">
                      Our programmes are designed to provide students with a comprehensive education that combines theoretical knowledge with practical skills. Each programme is carefully crafted to meet industry standards and prepare students for successful careers in their chosen fields.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
          <section id="english_requirement">
            <div className="min-h-[300px]">
              <Card className="w-full mb-8 shadow-lg border border-gray-200">
                <CardContent>

                  <div className="max-w-5xl mx-auto px-4 py-8">
                    <h2 className="text-2xl font-bold mb-4">
                      English Language Requirement
                    </h2>

                    <p className="text-[#082952] mb-4">
                      {programme_english_requirement}
                    </p>
                  </div>
                </CardContent>
              </Card>

            </div>
          </section>
          <section id="program_requirement">
            <div className="min-h-[300px]">
              <Card className="w-full mb-8 shadow-lg border border-gray-200">
                <CardContent>

                  <div className="max-w-5xl mx-auto px-4 py-8">
                    <h2 className="text-2xl font-bold mb-4">
                      Program Requirement
                    </h2>

                    <p className="text-[#082952] mb-4">
                      Program Code: {programme_code}
                    </p>
                    <p className="text-[#082952] mb-4">
                      Program Duration:  {programme_year}
                    </p>
                  </div>
                </CardContent>
              </Card>

            </div>
          </section>
          <section id="program_structure">
            <div className="min-h-[300px]">
              <Card className="w-full mb-8 shadow-lg border border-gray-200">
                <CardContent>

                  <div className="max-w-5xl mx-auto px-4 py-8">
                    <h2 className="text-2xl font-bold mb-4">
                      Program Structure
                    </h2>

                    <p className="text-[#082952] mb-4">
                      Program Duration:  {programme_year}
                    </p>
                  </div>
                </CardContent>
              </Card>

            </div>
          </section>
          <section id="availabilty">
            <div className="min-h-[300px]">
              <Card className="w-full mb-8 shadow-lg border border-gray-200">
                <CardContent>

                  <div className="max-w-5xl mx-auto px-4 py-8">
                    <h2 className="text-2xl font-bold mb-4">
                      Availability</h2>

                    <p className="text-[#082952] mb-4">
                      Program Duration:  {programme_year}
                    </p>
                  </div>
                </CardContent>
              </Card>

            </div>
          </section>
          <section id="siqf_level">
            <div className="min-h-[300px]">
              <Card className="w-full mb-8 shadow-lg border border-gray-200">
                <CardContent>

                  <div className="max-w-5xl mx-auto px-4 py-8">
                    <h2 className="text-2xl font-bold mb-4">
                      SIQF Level</h2>

                    <p className="text-[#082952] mb-4">
                      Program Duration:  {programme_year}
                    </p>
                  </div>
                </CardContent>
              </Card>

            </div>
          </section>
          <section id="apply_now">
            <div className="min-h-[300px]">
              <Card className="w-full mb-8 shadow-lg border border-gray-200">
                <CardContent>

                  <div className="max-w-5xl mx-auto px-4 py-8">
                    <h2 className="text-2xl font-bold mb-4">
                      How to Apply</h2>

                    <p className="text-[#082952] mb-4">
                      Program Duration:  {programme_year}
                    </p>
                  </div>
                </CardContent>
              </Card>

            </div>
          </section>
          <section id="contacts">
            <div className="min-h-[300px]">
              <Card className="w-full mb-8 shadow-lg border border-gray-200">
                <CardContent>

                  <div className="max-w-5xl mx-auto px-4 py-8">
                    <h2 className="text-2xl font-bold mb-4">
                      Program Contacts
                    </h2>

                    <p className="text-[#082952] mb-4">
                      Program Faculty:  {programme_faculty}
                    </p>

                    <p className="text-[#082952] mb-4">
                      Program Department:  {programme_department}
                    </p>
                  </div>
                </CardContent>
              </Card>

            </div>
          </section>
        </main>
      </div>

      <ErrorBoundary>
        <Footer />
      </ErrorBoundary>
    </div>
  );
};

export default ProgrammeDetails;
