import React, { useRef } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Home, ArrowRight, ArrowLeft, Play } from 'lucide-react';

const Breadcrumbs = () => (
  <div className="absolute left-0 top-20 z-40 w-full lg:top-28">
    <div className="container">
      <ol className="flex items-center gap-4 text-sm text-neutral-400">
        <li>
          <Link to="/" className="flex items-center gap-2 hover:text-neutral-600 transition-colors">
            <Home className="size-4" />
            <span>Home</span>
          </Link>
        </li>
        <li className="flex items-center gap-4 before:content-[''] before:w-px before:h-4 before:bg-neutral-300">
          <Link to="/about" className="hover:text-neutral-600 transition-colors">About us</Link>
        </li>
        <li className="flex items-center gap-4 before:content-[''] before:w-px before:h-4 before:bg-neutral-300">
          <span className="text-neutral-600 font-medium">Who We Are</span>
        </li>
      </ol>
    </div>
  </div>
);

const Hero = () => (
  <section className="relative h-[640px] md:h-[840px] lg:h-screen overflow-hidden bg-black flex items-center justify-center text-center px-6">
    <div className="container relative z-10 max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="space-y-8"
      >
        <h1 className="text-white text-4xl md:text-6xl lg:text-[84px] font-black leading-[0.9] tracking-tighter">
          Your trusted <span className="text-primary">BUSINESS PARTNER</span> <br className="hidden md:block" />
          not just a service provider
        </h1>
        <div className="space-y-4">
          <p className="text-white text-lg md:text-xl font-medium max-w-2xl mx-auto opacity-90">
            We are a community of digital experts with a passion for building impactful software solutions.
          </p>
          <p className="text-white text-lg md:text-xl font-medium opacity-90">
            Meet the team behind your success.
          </p>
        </div>
      </motion.div>
    </div>
    <img 
      src="https://a.storyblok.com/f/86602/1920x1080/2e0b18a8c4/who-we-are-hero.png" 
      alt="Hero background" 
      className="absolute inset-0 size-full object-cover opacity-30"
      referrerPolicy="no-referrer"
    />
    <div className="absolute bottom-12 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-4">
      <span className="text-white/40 text-[10px] font-black uppercase tracking-[0.3em] rotate-90 origin-left translate-x-2">Scroll</span>
      <div className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent" />
    </div>
  </section>
);

const DNASection = () => (
  <section id="dna" className="py-24 lg:py-48 overflow-hidden scroll-mt-20 lg:scroll-mt-28">
    <div className="container">
      <div className="flex flex-col lg:flex-row gap-16 lg:gap-32 items-center">
        <div className="flex-1 space-y-10">
          <div className="space-y-6">
            <span className="text-xs font-black uppercase tracking-[0.2em] text-neutral-400">Our DNA</span>
            <h2 className="text-text-dark !text-4xl lg:!text-[64px] font-black leading-[1.1] tracking-tight">
              Delivering <span className="text-primary">great digital products</span> and <span className="text-primary">building culture</span> people want to belong
            </h2>
          </div>
          <p className="text-xl text-neutral-500 leading-relaxed font-medium">
            Selleo mindset focuses on a self-driven growth towards ingenious mastery and knowledge-sharing culture combined with a participative approach to decision making and empowerment based on <span className="text-text-dark font-black">Management 3.0.</span>
          </p>
          
          <div className="relative pt-12 border-t border-neutral-100">
            <svg width="48" height="48" viewBox="0 0 60 60" fill="none" className="absolute -top-6 -left-4 text-primary/10">
              <path d="M54.9995 14.0133C53.3624 15.3065 51.7935 16.6442 50.2928 18.0266C48.8376 19.409 47.4961 20.8137 46.2683 22.2407C45.0859 23.6677 44.0627 25.1392 43.1987 26.6554C42.3801 28.127 41.789 29.6208 41.4252 31.137C43.2896 32.3856 44.8813 33.4335 46.2001 34.2808C47.5643 35.1281 48.6557 35.9531 49.4743 36.7557C50.3383 37.5584 50.9522 38.428 51.316 39.3644C51.7253 40.2563 51.9299 41.3934 51.9299 42.7758C51.9299 43.4893 51.748 44.2697 51.3842 45.1169C51.0204 45.9642 50.4747 46.7446 49.7471 47.4581C49.065 48.1716 48.201 48.7736 47.155 49.2641C46.1546 49.7546 45.0177 49.9999 43.7444 49.9999C41.6525 49.9999 39.879 49.6654 38.4238 48.9965C37.0141 48.283 35.8544 47.302 34.9449 46.0534C34.0809 44.8048 33.4443 43.3109 33.035 41.5718C32.6712 39.7881 32.4893 37.8483 32.4893 35.7524C32.4893 32.5863 33.1487 29.71 34.4675 27.1236C35.8317 24.4926 37.4916 22.1069 39.447 19.9664C41.4479 17.826 43.5398 15.9308 45.7226 14.2808C47.9054 12.6309 49.8381 11.2039 51.5207 9.99988L54.9995 14.0133ZM27.578 14.0133C25.8954 15.3065 24.3037 16.6442 22.8031 18.0266C21.3024 19.409 19.9609 20.8137 18.7785 22.2407C17.6416 23.6677 16.6639 25.1392 15.8454 26.6554C15.0268 28.127 14.4356 29.6208 14.0718 31.137C15.9363 32.3856 17.5052 33.4558 18.7785 34.3477C20.0973 35.195 21.1887 36.0199 22.0527 36.8226C22.9167 37.5807 23.5307 38.428 23.8945 39.3644C24.3037 40.2563 24.5084 41.3934 24.5084 42.7758C24.5084 43.4893 24.3037 44.2697 23.8945 45.1169C23.5307 45.9642 22.985 46.7446 22.2574 47.4581C21.5752 48.1716 20.7112 48.7736 19.6653 49.2641C18.6648 49.7546 17.5279 49.9999 16.2546 49.9999C14.2082 49.9999 12.4574 49.6654 11.0022 48.9965C9.59251 48.283 8.43289 47.302 7.52339 46.0534C6.65936 44.8048 6.0227 43.3109 5.61343 41.5718C5.20415 39.7881 4.99951 37.8483 4.99951 35.7524C4.99951 33.6565 5.31784 31.6721 5.95449 29.7992C6.59114 27.9263 7.4097 26.1872 8.41015 24.5818C9.45608 22.9319 10.6384 21.3934 11.9572 19.9664C13.3215 18.5395 14.7085 17.224 16.1182 16.0199C17.5279 14.8159 18.9149 13.7234 20.2792 12.7424C21.6434 11.7167 22.894 10.8026 24.0309 9.99988L27.578 14.0133Z" fill="currentColor" />
            </svg>
            <p className="text-lg italic text-neutral-600 leading-relaxed">
              They take full ownership of their work and always use the best tools available while maintaining high security and scalability. The entire project is based on mutual trust and openness.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <img 
                src="https://a.storyblok.com/f/86602/115x115/f843f30b49/15533-kristofferp-91.jpg" 
                alt="Kristoffer Persson" 
                className="size-12 rounded-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div>
                <p className="text-sm font-black text-text-dark">Kristoffer Persson</p>
                <p className="text-xs font-bold text-neutral-400 uppercase tracking-widest">Founder, Humly SE</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="rounded-[2rem] overflow-hidden shadow-2xl"
          >
            <img 
              src="https://a.storyblok.com/f/86602/1280x720/ced3d85c2c/who-we-are-dna.png" 
              alt="Our DNA" 
              className="w-full h-auto"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </div>
    </div>
  </section>
);

const SelleoWay = () => {
  const pillars = [
    {
      title: 'Ownership',
      desc: 'We hold ourselves accountable for results and people can trust us to rely on our word.',
      icon: 'https://a.storyblok.com/f/86602/48x48/8636179a43/fireworks-star.png'
    },
    {
      title: 'Proactiveness',
      desc: 'We constantly look for ways to improve our knowledge and work’s performance.',
      icon: 'https://a.storyblok.com/f/86602/48x48/1728ab6a08/proactiveness-icon.png'
    },
    {
      title: 'Respect',
      desc: 'We value constructive feedback and encourage a healthy debate.',
      icon: 'https://a.storyblok.com/f/86602/40x40/d26f0460aa/essential-plus-icon.png'
    },
    {
      title: 'Teamwork',
      desc: 'We help each other and strive together to achieve our goals.',
      icon: 'https://a.storyblok.com/f/86602/48x48/8b7a0fdb13/teamwork-icon.png'
    }
  ];

  return (
    <section id="values" className="py-24 lg:py-48 bg-neutral-100 scroll-mt-20 lg:scroll-mt-28">
      <div className="container text-center max-w-4xl mx-auto space-y-16">
        <div className="space-y-6">
          <span className="text-xs font-black uppercase tracking-[0.2em] text-neutral-400">Selleo Way</span>
          <h2 className="text-text-dark !text-4xl lg:!text-[64px] font-black leading-[1.1] tracking-tight">
            Why we <span className="text-primary">exist</span>
          </h2>
          <p className="text-xl text-neutral-500 leading-relaxed font-medium">
            We provide a challenging and beneficial place for <span className="text-text-dark font-black">the community of engaged coworkers</span> committed to personal and professional growth.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-left">
          {pillars.map((pillar, idx) => (
            <motion.div 
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="space-y-6"
            >
              <img src={pillar.icon} alt={pillar.title} className="h-12 w-auto" referrerPolicy="no-referrer" />
              <div className="space-y-3">
                <h3 className="text-xl font-black text-text-dark">{pillar.title}</h3>
                <p className="text-base text-neutral-500 leading-relaxed">{pillar.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Timeline = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth / 2 : scrollLeft + clientWidth / 2;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  const events = [
    { id: '01', title: 'Starting the journey', desc: 'with the birth of Ruby on Rails we have started our journey in software development' },
    { id: '02', title: 'Conquering Europe', desc: 'we established a long term collaboration with a few Norway-based companies' },
    { id: '03', title: 'Growing company', desc: 'more projects mean more developers on board and a bigger office' },
    { id: '04', title: 'Starting SRUG', desc: 'we share our RoR knowledge with other devs and set up a Silesia Ruby Users Group' },
    { id: '05', title: 'Blogging about Tech', desc: 'we are brave enough to build stronger brand share our insights on a company blog' },
    { id: '06', title: 'Learning DNA', desc: 'we run internal unconference called Haxorz and host a series of IT community events' },
    { id: '07', title: 'Empowering people', desc: 'innovative management starts with Jurgen Appelo, Daniel Pink and Steve Denning' },
    { id: '08', title: 'Going mobile', desc: 'we add new teams focused on mobile development and facilitate feedback-driven culture' }
  ];

  return (
    <section id="timeline" className="py-24 lg:py-48 bg-[#2F3033] text-white overflow-hidden scroll-mt-20 lg:scroll-mt-28">
      <div className="container">
        <h2 className="text-4xl lg:text-5xl font-black mb-24">
          Selleo <span className="text-primary">timeline</span>
        </h2>
        
        <div className="relative">
          {/* Continuous Line */}
          <div className="absolute top-0 left-0 w-full h-px bg-white/20" />
          
          <div 
            ref={scrollRef}
            className="flex gap-16 overflow-x-auto pb-12 scrollbar-hide pt-0 snap-x snap-mandatory"
          >
            {events.map((event) => (
              <div key={event.id} className="min-w-[320px] flex-shrink-0 relative pt-12 snap-start">
                {/* Dot on the line */}
                <div className="absolute top-0 left-0 size-2 rounded-full bg-white/60 -translate-y-1/2" />
                
                <div className="relative">
                  {/* Large background number */}
                  <span className="absolute -top-6 left-0 text-[140px] font-black text-white/[0.04] leading-none select-none pointer-events-none tracking-tighter">
                    {event.id}
                  </span>
                  
                  <div className="relative z-10 space-y-16">
                    <h3 className="text-3xl font-black leading-tight">
                      {event.title.split(' ').map((word, i) => (
                        <React.Fragment key={i}>
                          {word} {i === 0 && <br />}
                        </React.Fragment>
                      ))}
                    </h3>
                    <p className="text-sm text-white/70 leading-relaxed font-medium max-w-[280px]">
                      {event.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Navigation Arrows */}
          <div className="absolute top-0 left-0 -translate-y-1/2 z-20">
            <button 
              onClick={() => scroll('left')}
              className="size-10 rounded-full bg-primary flex items-center justify-center shadow-lg cursor-pointer hover:scale-110 transition-transform active:scale-95"
            >
              <ArrowLeft className="size-5 text-white" />
            </button>
          </div>
          
          <div className="absolute top-0 right-0 -translate-y-1/2 z-20">
            <button 
              onClick={() => scroll('right')}
              className="size-10 rounded-full bg-primary flex items-center justify-center shadow-lg cursor-pointer hover:scale-110 transition-transform active:scale-95"
            >
              <ArrowRight className="size-5 text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const CommunitySection = ({ id, title, highlight, desc, videoUrl, events, mirrored = false }: any) => (
  <section id={id} className={`py-24 lg:py-48 ${mirrored ? 'bg-neutral-100' : 'bg-white'} scroll-mt-20 lg:scroll-mt-28`}>
    <div className="container">
      <div className={`flex flex-col lg:flex-row gap-20 items-center ${mirrored ? 'lg:flex-row-reverse' : ''}`}>
        <div className="flex-1 space-y-10">
          <h2 className="text-4xl lg:text-[56px] font-black leading-[1.1] tracking-tight text-text-dark">
            {title} <span className="text-primary">{highlight}</span>
          </h2>
          <p className="text-xl text-neutral-500 leading-relaxed font-medium">
            {desc}
          </p>
          <div className="relative aspect-video rounded-[2rem] overflow-hidden shadow-2xl group cursor-pointer">
            <video 
              src={videoUrl} 
              autoPlay 
              muted 
              loop 
              playsInline 
              className="size-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-all">
              <div className="size-20 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Play className="size-8 text-white fill-white ml-1" />
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex-1 grid grid-cols-1 gap-12">
          {events.map((event: any) => (
            <div key={event.name} className="space-y-3">
              <h4 className="text-xl font-black text-primary">{event.name}</h4>
              <p className="text-lg text-neutral-500 leading-relaxed">{event.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const Numbers = () => {
  const stats = [
    { label: 'Talented people', value: '100+', icon: 'https://a.storyblok.com/f/86602/96x56/dd5ead76a7/people-icon.png' },
    { label: 'Software projects', value: '155+', icon: 'https://a.storyblok.com/f/86602/62x57/231495ffed/software-icon.png' },
    { label: 'Members of our meetups', value: '2400+', icon: 'https://a.storyblok.com/f/86602/56x56/37d0c7792f/isolation-icon.png' }
  ];

  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-32">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center text-center space-y-6">
              <img src={stat.icon} alt={stat.label} className="h-12 w-auto" referrerPolicy="no-referrer" />
              <div className="space-y-2">
                <p className="text-5xl lg:text-7xl font-black text-text-dark">{stat.value}</p>
                <p className="text-sm font-black text-neutral-400 uppercase tracking-widest">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhoWeAre = () => {
  return (
    <div className="min-h-screen bg-white">
      <Breadcrumbs />
      <Hero />
      <DNASection />
      <SelleoWay />
      <Timeline />
      
      <CommunitySection 
        id="community"
        title="How we involve in"
        highlight="IT community"
        desc="We have engaged in events and initiatives to share knowledge and foster the well-being of the IT community in Poland. In doing so, we host and support."
        videoUrl="https://cdn.selleo.com/videos/who_we_are_it_community_preview.mp4"
        events={[
          { name: 'Coder Dojo', desc: 'Events that offer free software development training for young people.' },
          { name: 'Meet.js', desc: 'Meetups as a part of the biggest front-end community in Poland.' },
          { name: 'BBdays4.IT', desc: 'The longest IT festival in Poland with meetups, conferences, hackathons and more.' },
          { name: 'RailsGirls BB', desc: 'A community for women to understand technology and to build their ideas.' }
        ]}
      />

      <CommunitySection 
        mirrored
        title="How we build an"
        highlight="internal community"
        desc="We invite each and every co-worker to organize and/or participate in the events which foster community integration and a sense of belonging."
        videoUrl="https://cdn.selleo.com/videos/who_we_are_internal_preview.mp4"
        events={[
          { name: 'Haxorz Unconference', desc: 'Since 2012 we spent one day each month on growing our tech and business skills during internal workshops and unconferences.' },
          { name: 'Team Retreats', desc: 'From go kart races and sailing to mountain trips and movie nights, we explore hundreds of ways to create bonds and build relationships.' },
          { name: 'BoardGame Days', desc: 'Bringing friends and family together we compete, collaborate and have fun with tons of board games on our special gaming Saturdays.' }
        ]}
      />

      <Numbers />

      <section id="location" className="py-24 lg:py-48 border-t border-neutral-100 scroll-mt-20 lg:scroll-mt-28">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="flex-1">
              <img 
                src="https://a.storyblok.com/f/86602/1280x720/ec4f268ce6/our-location.png" 
                alt="Our location" 
                className="w-full h-auto rounded-[2rem] shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex-1 space-y-10">
              <div className="space-y-6">
                <span className="text-xs font-black uppercase tracking-[0.2em] text-neutral-400">Our location</span>
                <h2 className="text-text-dark !text-4xl lg:!text-[64px] font-black leading-[1.1] tracking-tight">
                  <span className="text-primary">Let’s meet</span> in person
                </h2>
              </div>
              <p className="text-xl text-neutral-500 leading-relaxed font-medium">
                We are located within 2-3 hours flight range from major Europe airports. For an efficient kick-start we can visit you or you can join the team at our office.
              </p>
              <Link to="/contact" className="btn-primary !px-12 !py-5">
                Let's get in touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-48 bg-neutral-100">
        <div className="container text-center max-w-4xl mx-auto space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl font-black text-text-dark">
              <span className="text-primary">Office Odyssey</span> Where Ideas Take Flight
            </h2>
            <p className="text-lg text-neutral-500 font-medium">
              Step inside our creative hub! Discover where ideas come to life in our vibrant company office.
            </p>
          </div>
          <div className="aspect-video rounded-[2rem] overflow-hidden shadow-2xl">
            <iframe 
              className="size-full"
              src="https://www.youtube.com/embed/ScsXGbV65lY" 
              title="Office Odyssey" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhoWeAre;
