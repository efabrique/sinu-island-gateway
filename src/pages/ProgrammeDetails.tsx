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
import { AlertTriangle } from "lucide-react";
import ProgrammeStructure from "@/components/programmes/ProgrammeStructure";


const ProgrammeDetails = () => {
  const { state } = useLocation();
  const { code } = useParams();
  const [scrolled, setScrolled] = useState(0);
  const { programme_entry_requirement, programme_english_requirement, programme_year, programme_department, programme_faculty, programme_code, programme_units } = state || {};

  useEffect(() => {
        window.scrollTo(0, 0);

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

  const parseLines = (text?: string): string[] => {
    return text
      ? text
        .split(/\r?\n/)   // handle \n and \r\n
        .map(line => line.trim())
        .filter(Boolean)  // remove empty lines
      : [];
  };

  const admissionRequirements = parseLines(programme_entry_requirement);
  const englishRequirements = parseLines(programme_english_requirement);


  return (
    <div className="min-h-screen flex flex-col">
      <ErrorBoundary>
        <ScrolledDesktopHeader />
      </ErrorBoundary>

      {/* Hero */}
      <ProgrammeHero />

      {/* Content with Left Nav */}
      <div className="flex w-full max-w-8xl mx-auto gap-6 ">

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
        <main className="flex-1/2 py-6 px-4 md:px-8 ">
          <section id="description ">
            <ProgrammeOverview />
          </section>

          <section id="admission_requirement">
            <div className="min-h-[300px] md:py-20">
              <Card className="w-full mb-8 shadow-lg border border-gray-200 bg-black/10 duration-300 ease-in-out hover:scale-105">
                <CardContent>

                  <div className="max-w-5xl mx-auto px-4 py-8">
                    <h2 className="text-2xl font-bold mb-4">
                      Admission Requirements
                    </h2>

                    {admissionRequirements.length > 0 ? (
                      <ul className="list-disc pl-6 space-y-2 text-[#082952]">
                        {admissionRequirements.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-[#082952]">
                        Admission requirements will be advised upon application.
                      </p>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
          <section id="english_requirement">
            <div className="min-h-[300px]">
              <Card className="w-full mb-8 shadow-lg border border-gray-200 bg-black/10 duration-300 ease-in-out hover:scale-105">
                <CardContent>

                  <div className="max-w-5xl mx-auto px-4 py-8">
                    <h2 className="text-2xl font-bold mb-4">
                      English Language Requirement
                    </h2>
                    {englishRequirements.length > 0 ? (
                      <ul className="list-disc pl-6 space-y-2 text-[#082952]">
                        {englishRequirements.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-[#082952]">
                        English language requirements will be advised upon application.
                      </p>
                    )}

                  </div>
                </CardContent>
              </Card>

            </div>
          </section>
          <section id="program_requirement">
            <div className="min-h-[300px] md:py-20">
              <Card className="w-full mb-8 shadow-lg border border-gray-200 bg-black/10 duration-300 ease-in-out hover:scale-105">
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
            <ProgrammeStructure />
          </section>

          <section id="availabilty">
            <div className="min-h-[300px]">
              <Card className="w-full shadow-lg border border-gray-200 bg-black/10 duration-300 ease-in-out hover:scale-105">
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
              <Card className="w-full mb-8 shadow-lg border border-gray-200 bg-black/10 transition-transform duration-300 ease-in-out hover:scale-105">
                <CardContent>

                  <div className="max-w-5xl mx-auto px-4 py-8">
                    <h2 className="text-2xl font-bold mb-4">
                      SIQF Level</h2>

                    <p className="text-[#082952] mb-4">
                      <AlertTriangle className="w-6 h-6 text-black mt-1" />
                      <span>
                        <strong> Note: </strong> SINU is currently reviewing all programmes to comply with the Solomon Islands Qualifications Framework (SIQF). Programme SIQF levels may be updated soon.
                      </span>
                    </p>
                  </div>
                </CardContent>
              </Card>

            </div>
          </section>
          <section id="apply_now">
            <div className="min-h-[300px]">
              <Card className="w-full mb-8 shadow-lg border border-gray-200 bg-black/10 duration-300 ease-in-out hover:scale-105">
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
              <Card className="w-full mb-8 shadow-lg border border-gray-200 bg-black/10 duration-300 ease-in-out hover:scale-105">
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
function useLayoutEffect(arg0: () => void, arg1: undefined[]) {
  throw new Error("Function not implemented.");
}

