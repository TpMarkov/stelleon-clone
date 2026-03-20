import React from 'react';

const Services = () => {
  return (
    <div className="pt-32 pb-20 container">
      <h1 className="mb-12">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {['Custom Software', 'SaaS Development', 'UX/UI Design', 'AI Solutions', 'DevOps', 'Quality Assurance'].map((service) => (
          <div key={service} className="p-10 bg-neutral-50 rounded-2xl border border-gray-100 hover:shadow-xl transition-all">
            <h3 className="text-2xl font-bold mb-4">{service}</h3>
            <p className="text-neutral-500 leading-relaxed">
              We provide end-to-end {service.toLowerCase()} services tailored to your business needs, ensuring scalability and performance.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
