import React from 'react';

export const Awards = () => {
  const awards = [
    {
      title: 'Business Excellence',
      description: 'Awarded Forbes Diamonds 2025 for consistent growth and business excellence.',
      images: [
        'https://selleo.com/.netlify/images?url=https%3A%2F%2Fa.storyblok.com%2Ff%2F86602%2F288x288%2Fb325b425d1%2Fforbes-2025-2x.png&w=144&h=144',
        'https://selleo.com/.netlify/images?url=https%3A%2F%2Fa.storyblok.com%2Ff%2F86602%2F288x288%2F11d511e9c3%2Ftuv-nord-iso-27001.png&w=144&h=144'
      ]
    },
    {
      title: 'Client Trust & Recognition',
      description: 'Clutch awards highlight our proven track record in delivering value and building strong client partnerships.',
      images: [
        'https://selleo.com/.netlify/images?url=https%3A%2F%2Fa.storyblok.com%2Ff%2F86602%2F288x240%2F53f8a9a25a%2Ftop-clutch-companies-2x.png&w=144&h=120',
        'https://selleo.com/.netlify/images?url=https%3A%2F%2Fa.storyblok.com%2Ff%2F86602%2F235x316%2F01b23744b2%2Ftop-clutch-company-2x.png&w=117&h=158'
      ]
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="container grid grid-cols-1 lg:grid-cols-3 gap-16">
        <div className="space-y-6">
          <span className="text-sm font-black uppercase tracking-widest text-primary block">RECOGNITION & EXPERTISE</span>
          <h2 className="text-black">Validated by Industry.<br /> <strong>Trusted by Clients</strong>.</h2>
          <p className="text-lg text-neutral-500 leading-relaxed">
            We pair coding craftsmanship with agile expertise and client trust — backed by real certifications and awards.
          </p>
        </div>

        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
          {awards.map((award, idx) => (
            <div key={idx} className="bg-neutral-50 p-10 rounded-2xl flex flex-col justify-between space-y-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-black">{award.title}</h3>
                <p className="text-neutral-500 leading-relaxed">{award.description}</p>
              </div>
              <div className="flex items-center gap-6">
                {award.images.map((img, i) => (
                  <img key={i} src={img} alt="Award" className="h-16 object-contain" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
