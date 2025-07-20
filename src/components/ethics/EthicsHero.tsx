import React from 'react';

const EthicsHero = () => {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center text-white">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&q=80&auto=format&fit=crop)',
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Ethics Committee
          </h1>
          <p className="text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto">
            Ensuring research integrity and ethical standards at Solomon Islands National University
          </p>
        </div>
      </div>
    </section>
  );
};

export default EthicsHero;