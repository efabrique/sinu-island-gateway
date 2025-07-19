import studyAbroadHero from "@/assets/study-abroad-hero.jpg";

export function StudyAbroadHero() {
  return (
    <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${studyAbroadHero})` }}
      />
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-shadow-lg">
          Study Abroad Program
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-shadow font-medium">
          Experience world-class education at Solomon Islands National University and broaden your global perspective
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 bg-white text-[#082952] font-semibold rounded-lg hover:bg-gray-100 transition-colors text-lg">
            Apply Now
          </button>
          <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#082952] transition-colors text-lg">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}