import React from 'react';

const FramingWorkshop: React.FC = () => {
  const images = [
    {
      src: "/GalerieMNC_Framing1.jpeg",
      alt: "Artisan encadreur découpant avec précision"
    },
    {
      src: "/GalerieMNC_Framing2.jpeg",
      alt: "Travail minutieux sur un cadre"
    },
    {
      src: "/GalerieMNC_Framing3.jpeg",
      alt: "Détail du travail d'encadrement"
    },
    {
      src: "/GalerieMNC_Framing4.jpeg",
      alt: "Finition d'un encadrement"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div key={index} className="aspect-square overflow-hidden">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FramingWorkshop;