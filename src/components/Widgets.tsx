import React from 'react';
import { Star, Users, Calendar, MapPin } from 'lucide-react';

export const Widgets = () => {
  const stats = [
    {
      icon: <Users className="size-8 text-primary" />,
      value: '100+',
      label: 'Talented People',
      description: 'We’re a team of 100+ developers, designers, and tech leads — ready to turn complex ideas into scalable digital solutions.'
    },
    {
      icon: <Star className="size-8 text-primary" />,
      value: '4.7/5',
      label: 'Rated on Clutch',
      description: 'Our clients give us a 4.7/5 on Clutch — praising our quality, communication, and proactive approach.'
    },
    {
      icon: <Calendar className="size-8 text-primary" />,
      value: '4.5',
      label: 'Avg Years of Partnership',
      description: 'Our clients choose to stay with us for years, building lasting partnerships founded on trust and shared success.'
    },
    {
      icon: <MapPin className="size-8 text-primary" />,
      value: '2005',
      label: 'Founded in Poland',
      description: 'Since 2005, we’ve been crafting custom software for clients around the globe — proudly headquartered in Poland.'
    }
  ];

  return (
    <section className="bg-white border-y border-gray-200">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-gray-200">
          {stats.map((stat, idx) => (
            <div key={idx} className="p-8 lg:p-12 space-y-6">
              <div className="flex items-center space-x-4">
                {stat.icon}
                <span className="text-2xl font-bold text-neutral-600">{stat.value}</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-neutral-600 mb-2">{stat.label}</h3>
                <p className="text-neutral-500 leading-relaxed">{stat.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
