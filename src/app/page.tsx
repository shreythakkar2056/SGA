'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  Home as HomeIcon,
  History, 
  Users, 
  Calendar, 
  Heart, 
  Phone, 
  Menu, 
  Globe, 
  ArrowRight,
  Sun,
  BookOpen,
  Sparkles,
  ChevronRight
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled ? 'bg-[#2C0D03]/90 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#FF9933] rounded-full flex items-center justify-center text-[#2C0D03] font-bold shadow-inner">SW</div>
          <span className="text-white font-bold text-lg tracking-tight">
            Swaminarayan <span className="text-[#FF9933]">Gurukul Anand</span>
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-white/90 font-medium text-sm">
          <a href="#" className="hover:text-[#FF9933] transition-colors">Darshan</a>
          <a href="#" className="hover:text-[#FF9933] transition-colors">History</a>
          <a href="#" className="hover:text-[#FF9933] transition-colors">Saints</a>
          <a href="#" className="hover:text-[#FF9933] transition-colors">Festivals</a>
          <a href="#" className="hover:text-[#FF9933] transition-colors">Contact</a>
        </div>

        {/* Right Actions - Donate Removed */}
        <div className="hidden md:flex items-center gap-4">
          <button className="text-xs font-semibold text-white/80 border border-white/20 px-4 py-1.5 rounded-full hover:bg-white/10 transition-all">
            EN / ગુજરાતી
          </button>
        </div>
        
        {/* Mobile Menu Icon */}
        <button className="md:hidden text-white p-2">
          <Menu />
        </button>
      </div>
    </nav>
  );
};

const FloatingDock = () => {
  const navItems = [
    { icon: HomeIcon, label: 'Dham' },
    { icon: Users, label: 'Saints' },
    { icon: Calendar, label: 'Utsav' },
    { icon: Heart, label: 'Seva' },
    { icon: Phone, label: 'Contact' },
  ];

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
      <div className="bg-[#2C0D03] text-white px-8 py-3 rounded-full shadow-2xl shadow-black/50 flex items-center gap-8 border border-white/10">
        {navItems.map((item, idx) => (
          <button key={idx} className="group flex flex-col items-center gap-1 transition-all">
            <item.icon size={20} className="group-hover:text-[#FF9933] group-hover:scale-110 transition-all" />
            <span className="text-[10px] opacity-60 group-hover:opacity-100 group-hover:text-[#FF9933] font-semibold tracking-tighter uppercase">{item.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};


const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-[#2C0D03] overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <Image 
          src="https://images.unsplash.com/photo-1707151022217-094cc3880436?q=80&w=2070" 
          alt="Temple Background" 
          fill
          priority
          className="object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#2C0D03] via-[#2C0D03]/40 to-transparent" />
      </div>

      <motion.div 
        animate={{ y: [0, -30, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#FF9933]/10 rounded-full blur-[100px]"
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center mt-10">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-5xl md:text-8xl font-extrabold text-white tracking-tight leading-[1.1]"
        >
          Swaminarayan Gurukul <span className="bg-gradient-to-r from-[#FF9933] to-[#FFD700] bg-clip-text text-transparent">Anand</span>
          <br /><span className="text-2xl md:text-5xl font-light mt-4 block opacity-90 italic">A Sanctuary of Devotion & Learning</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-8 text-[#FFF9E3]/80 text-lg md:text-xl font-medium tracking-wide"
        >
          Preserving our heritage, inspiring every soul.
        </motion.p>
      </div>

      {/* Floating Info Cards */}
      <motion.div 
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-48 left-8 md:left-32 hidden lg:block"
      >
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-5 rounded-3xl w-64 shadow-2xl">
          <div className="flex items-center gap-3 mb-2">
            <div className="bg-[#FF9933]/20 p-2 rounded-full text-[#FF9933]"><Sparkles size={20} /></div>
            <span className="text-[10px] font-black text-white uppercase tracking-[0.2em]">Daily Darshan</span>
          </div>
          <p className="text-white text-sm font-bold">Aarti & Kirtan<br/><span className="text-[#FFD700] text-xs font-medium">6:00 AM & 7:00 PM</span></p>
        </div>
      </motion.div>

      <motion.div 
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-48 right-8 md:right-32 hidden lg:block"
      >
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-5 rounded-3xl w-64 shadow-2xl">
          <div className="flex items-center gap-3 mb-2">
            <div className="bg-[#9ABF43]/20 p-2 rounded-full text-[#9ABF43]"><Calendar size={20} /></div>
            <span className="text-[10px] font-black text-white uppercase tracking-[0.2em]">Upcoming</span>
          </div>
          <p className="text-white text-sm font-bold">Janmashtami 2024<br/><span className="text-[#FF9933] text-xs font-medium">Aug 26th • Mahotsav</span></p>
        </div>
      </motion.div>
    </section>
  );
};

// --- NEW SECTION FROM IMAGE_CC7509.PNG ---
const FestivalGrid = () => {
  const utsavs = [
    { name: "Janmashtami", date: "AUG 26", img: "https://images.unsplash.com/photo-1621360241103-ee8494294063?q=80&w=2070" },
    { name: "Annakut Utsav", date: "NOV 02", img: "https://images.unsplash.com/photo-1604928151523-d65293444498?q=80&w=2072" },
    { name: "Fuldol Utsav", date: "MAR 25", img: "https://images.unsplash.com/photo-1590059393352-78a9c2999f8d?q=80&w=2070" },
  ];

  return (
    <section className="bg-white py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-5xl md:text-7xl font-black text-[#2C0D03] mb-6">Upcoming <br/><span className="text-[#FF9933]">Utsavs</span></h2>
            <p className="text-gray-500 text-lg leading-relaxed font-medium">Experience the divine joy of festivals at Anand Dham, celebrating the glory of Lord Swaminarayan.</p>
          </div>
          <button className="flex items-center gap-2 text-[#2C0D03] font-black uppercase tracking-widest border-b-4 border-[#FF9933] pb-2 hover:text-[#FF9933] transition-all">
            ALL FESTIVALS <ChevronRight size={20} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {utsavs.map((u, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -15 }}
              className="relative aspect-[4/5] rounded-[3.5rem] overflow-hidden group shadow-2xl"
            >
              <Image src={u.img} alt={u.name} fill className="object-cover group-hover:scale-110 transition-transform duration-1000" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2C0D03] via-transparent to-transparent opacity-90" />
              <div className="absolute bottom-12 left-10">
                <p className="text-[#FF9933] font-black text-sm uppercase mb-3 tracking-[0.2em]">{u.date}</p>
                <h3 className="text-white text-4xl font-black tracking-tight">{u.name}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const MissionStats = () => {
  const stats = [
    { num: "300+", label: "Years of Tradition", icon: BookOpen },
    { num: "50+", label: "Annual Festivals", icon: Sun },
    { num: "25K+", label: "Devotees Connected", icon: Users },
    { num: "Sacred", label: "Vadtal Gadi Heritage", icon: Globe },
  ];

  return (
    <section className="bg-white py-28 px-6 relative z-20 border-b border-gray-100">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            We preserve our <span className="text-[#800000]">sacred Swaminarayan heritage</span> and spread devotion throughout every home.
          </h2>
          <div className="w-20 h-1.5 bg-[#FF9933] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16">
          {stats.map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="text-center group"
            >
              <stat.icon className="text-[#FF9933] mb-6 mx-auto group-hover:scale-125 transition-transform" size={40} />
              <h3 className="text-5xl font-black text-black mb-3">{stat.num}</h3>
              <p className="text-gray-500 font-bold text-xs uppercase tracking-widest leading-relaxed px-4">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FeaturesScroll = () => {
  const features = [
    { title: "Daily Aarti & Kirtan", desc: "Experience spiritual upliftment through our traditional morning and evening ceremonies.", img: "https://images.unsplash.com/photo-1621360241103-ee8494294063?q=80&w=2070" },
    { title: "Divine Satsang", desc: "Weekly gatherings to discuss spiritual wisdom and strengthen our bond with Maharaj.", img: "https://images.unsplash.com/photo-1524178232363-1fb28f74b671?q=80&w=2070" },
    { title: "Village Service", desc: "Regular charitable activities and Annakut events to serve the needy and the village.", img: "https://images.unsplash.com/photo-1590059393352-78a9c2999f8d?q=80&w=2070" },
    { title: "Spiritual Guidance", desc: "Receive divine wisdom and guidance from our four revered spiritual leaders.", img: "https://images.unsplash.com/photo-1623345805780-8f6c927f87ee?q=80&w=2070" },
  ];

  return (
    <section className="bg-[#FFF9E3]/50 py-32 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16">
        <div className="md:w-1/2 md:h-[calc(100vh-100px)] sticky top-24 flex flex-col justify-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#2C0D03] mb-12 leading-tight">
            Why Devotees Embrace <br/><span className="text-[#FF9933]">Anand Dham</span>.
          </h2>
          <div className="space-y-10 relative border-l-4 border-[#FF9933]/20 pl-8">
             {features.map((feature, idx) => (
               <motion.div 
                whileHover={{ x: 10 }}
                key={idx} 
                className="group cursor-default"
               >
                 <h3 className="text-2xl font-bold text-gray-900 group-hover:text-[#FF9933] transition-colors flex items-center gap-4">
                  <span className="text-sm font-black opacity-30">0{idx + 1}</span> {feature.title}
                 </h3>
                 <p className="text-gray-600 mt-3 text-lg leading-relaxed">{feature.desc}</p>
               </motion.div>
             ))}
          </div>
        </div>

        <div className="md:w-1/2 flex flex-col gap-12">
          {features.map((feature, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ margin: "-10% 0px -10% 0px" }}
              transition={{ duration: 0.8 }}
              className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl group"
            >
              <Image 
                src={feature.img} 
                alt={feature.title} 
                fill 
                className="object-cover group-hover:scale-110 transition-transform duration-1000" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-10">
                <span className="text-white font-bold text-2xl tracking-tight">{feature.title}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const BenefitsCloud = () => {
  const tags = [
    { text: "Peaceful", color: "bg-[#FF9933]" },
    { text: "Sacred", color: "bg-[#FFD700]" },
    { text: "Community", color: "bg-green-600" },
    { text: "Enlightening", color: "bg-blue-500" },
    { text: "Traditional", color: "bg-[#800000]" },
    { text: "Devotional", color: "bg-purple-600" },
    { text: "Cultural", color: "bg-orange-600" },
  ];

  return (
    <section className="bg-[#2C0D03] py-40 px-6 overflow-hidden relative">
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-20 leading-tight">Blessings & Benefits <br/>of Anand Dham</h2>
        
        <div className="flex flex-wrap justify-center gap-5 md:gap-8">
          {tags.map((tag, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.1, rotate: 3, y: -5 }}
              className={`${tag.color} text-white px-10 py-4 rounded-full text-xl font-bold cursor-default shadow-xl border border-white/10`}
            >
              {tag.text}
            </motion.div>
          ))}
        </div>
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-[#FF9933]/5 rounded-full blur-[120px] pointer-events-none" />
    </section>
  );
};

export default function Home() {
  return (
    <main className="min-h-screen bg-white font-sans text-gray-900 selection:bg-[#FF9933] selection:text-white pb-32">
      <Navbar />
      <HeroSection />
      <MissionStats />
      <FestivalGrid />
      <FeaturesScroll />
      <BenefitsCloud />
      
      {/* Devotional Footer Section */}
      <section className="bg-white py-40 px-6 text-center">
        <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-7xl font-extrabold text-[#2C0D03] leading-tight mb-16">
              Urge to God <br />
              <span className="relative inline-block mt-4">
                Swaminarayan
                <svg className="absolute -inset-4 w-[120%] h-[160%] text-[#FF9933] -z-10 opacity-70" viewBox="0 0 100 50" preserveAspectRatio="none">
                  <path d="M5,25 Q50,5 95,25 Q50,45 5,25" fill="none" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </span>
            </h2>
            <p className="text-gray-500 text-xl font-medium max-w-2xl mx-auto italic leading-relaxed">
              "Let the heart be filled with the glory of Maharaj, for in His sanctuary, every prayer finds its home."
            </p>
        </div>
      </section>

      <FloatingDock />
    </main>
  );
}