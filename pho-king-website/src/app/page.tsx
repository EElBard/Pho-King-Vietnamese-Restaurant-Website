'use client';
import React, { useState, useEffect } from 'react';

export default function Home() {
  const [activeTab, setActiveTab] = useState('pho');

  return (
    <div className="bg-[#1A1008] text-[#FAF6F0] font-sans selection:bg-[#C0392B] selection:text-white">
      {/* NAV */}
      <nav className="fixed top-0 inset-x-0 z-50 flex justify-between items-center px-6 md:px-16 py-5 bg-[#1A1008]/90 backdrop-blur-md border-bottom border-[#D4A843]/20">
        <div className="font-serif text-2xl font-black text-[#D4A843] tracking-tight">
          Phở <span className="text-[#FAF6F0] italic font-normal">King</span>
        </div>
        <ul className="hidden md:flex gap-10">
          {['About', 'Reviews', 'Visit Us'].map((item) => (
            <li key={item}>
              <a href={`#${item.toLowerCase().replace(' ', '')}`} className="text-xs font-medium uppercase tracking-widest opacity-80 hover:opacity-100 hover:text-[#D4A843] transition-all">
                {item}
              </a>
            </li>
          ))}
          <li>
            <a href="#menu" className="bg-[#C0392B] text-white px-6 py-2 rounded-sm text-xs font-bold uppercase hover:bg-[#8B1A1A] transition-colors">
              Menu
            </a>
          </li>
        </ul>
      </nav>

      {/* HERO SECTION */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_65%_50%,rgba(192,57,43,0.15)_0%,transparent_60%),linear-gradient(160deg,#1A1008_0%,#2D1A0E_50%,#1A1008_100%)]" />
        <div className="relative px-6 md:px-16 max-w-3xl">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#D4A843]">Est. 2017 · Las Vegas, NV</span>
            <div className="h-px bg-[#D4A843]/50 w-12" />
          </div>
          <h1 className="font-serif text-6xl md:text-8xl font-black leading-none mb-2">
            Vietnamese<br />
            <span className="text-[#D4A843] italic">Kitchen</span>
          </h1>
          <p className="font-serif italic text-xl text-[#FAF6F0]/60 mb-8">Phở King — Where Tradition Meets Flavor</p>
          <div className="flex gap-4">
            <a href="#menu" className="bg-[#C0392B] text-white px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-[#8B1A1A] transition-transform hover:-translate-y-1">View Menu</a>
            <a href="#visit" className="border border-[#FAF6F0]/30 px-8 py-4 text-xs font-bold uppercase tracking-widest hover:border-[#D4A843] hover:text-[#D4A843] transition-all hover:-translate-y-1">Find Us</a>
          </div>
        </div>
        
        {/* Stats */}
        <div className="hidden md:flex absolute right-16 bottom-24 flex-col gap-8 text-right">
          <div>
            <span className="block font-serif text-4xl font-black text-[#D4A843]">4.5★</span>
            <span className="text-[10px] uppercase tracking-widest text-[#FAF6F0]/50">Google Rating</span>
          </div>
          <div>
            <span className="block font-serif text-4xl font-black text-[#D4A843]">8+</span>
            <span className="text-[10px] uppercase tracking-widest text-[#FAF6F0]/50">Years Serving LV</span>
          </div>
        </div>
      </section>

      {/* MENU SECTION */}
      <section id="menu" className="py-24 px-6 md:px-16 bg-[#120A04]">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#D4A843] mb-4">Our Menu</p>
            <h2 className="font-serif text-4xl md:text-5xl font-black">Made to <span className="italic text-[#D4A843]">Savor</span></h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {['pho', 'specials', 'bun', 'apps', 'drinks'].map((cat) => (
              <button 
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-5 py-2 text-[10px] font-medium uppercase tracking-wider border transition-all ${activeTab === cat ? 'bg-[#C0392B] border-[#C0392B] text-white' : 'border-[#FAF6F0]/15 text-[#FAF6F0]/50 hover:text-[#D4A843]'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Example Item: Signature Hot Stone Pho */}
          {activeTab === 'pho' && (
            <div className="md:col-span-full bg-gradient-to-br from-[#2A0E06] to-[#1A1008] border border-[#C0392B]/40 p-8">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-serif text-xl font-bold">🔥 Hot Stone Phở</h3>
                <span className="text-[#D4A843] font-bold">$25</span>
              </div>
              <p className="text-sm text-[#FAF6F0]/50 leading-relaxed mb-4">
                Probably the best Phở King experience yet! Cook your Angus Beef slices on a sizzling hot lava stone.
              </p>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#C0392B] border border-[#C0392B]/40 px-2 py-1">Signature Experience</span>
            </div>
          )}
          
          {/* Additional menu items would be mapped here based on activeTab */}
        </div>
      </section>

      {/* INFO SECTION */}
      <section id="visit" className="grid grid-cols-1 md:grid-cols-3 bg-[#0E0703] border-t border-[#D4A843]/10">
        <div className="p-12 border-b md:border-b-0 md:border-r border-[#D4A843]/10">
          <h3 className="font-serif text-xl font-bold text-[#D4A843] mb-6">Location</h3>
          <p className="text-sm text-[#FAF6F0]/65 leading-loose">
            <strong className="text-[#FAF6F0]">9310 S Eastern Ave, Ste 107</strong><br />
            Las Vegas, NV 89123<br />
            <span className="opacity-60">Beltway Plaza</span>
          </p>
        </div>
        <div className="p-12 border-b md:border-b-0 md:border-r border-[#D4A843]/10">
          <h3 className="font-serif text-xl font-bold text-[#D4A843] mb-6">Hours</h3>
          <p className="text-sm text-[#FAF6F0]/65 leading-loose">
            <strong className="text-[#FAF6F0]">Mon – Sun</strong><br />
            10:00 AM – 9:00 PM
          </p>
        </div>
        <div className="p-12">
          <h3 className="font-serif text-xl font-bold text-[#D4A843] mb-6">Contact</h3>
          <a href="tel:7027902003" className="text-[#D4A843] font-bold text-lg hover:opacity-70 transition-opacity">(702) 790-2003</a>
          <p className="text-xs text-[#FAF6F0]/40 mt-4">phokinglv@gmail.com</p>
        </div>
      </section>
    </div>
  );
}