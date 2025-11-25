import React from 'react';
import { Users, Globe, Target, ShieldCheck } from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-brand-dark text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-black mb-6">Connecting the World Through Play</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            7GAMES isn't just a game site. We are a traffic powerhouse. We leverage the universal appeal of gaming to build audiences and create value for advertisers.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div>
             <h2 className="text-3xl font-bold text-gray-900 mb-6 relative inline-block">
              Our Mission
              <span className="absolute bottom-1 left-0 w-full h-3 bg-brand-orange/20 -z-10"></span>
             </h2>
             <p className="text-gray-600 mb-4 leading-relaxed">
               Founded in 2023, 7GAMES was built on a simple premise: casual games are the ultimate attention magnet. 
               By offering free, high-quality HTML5 games, we attract millions of users from diverse demographics.
             </p>
             <p className="text-gray-600 mb-4 leading-relaxed">
               We don't just host games; we analyze traffic patterns. We segment our audience based on engagement, 
               interests, and geolocation to provide arguably the cleanest, most convertible traffic in the industry.
             </p>
             <p className="text-gray-600 leading-relaxed font-semibold">
               Whether you are a developer looking for exposure or a marketer looking for leads, 7GAMES is your bridge.
             </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
             <div className="bg-slate-50 p-6 rounded-2xl text-center hover:shadow-lg transition">
                <Users className="mx-auto text-brand-blue mb-3" size={32} />
                <div className="font-bold text-2xl text-gray-800">5M+</div>
                <div className="text-xs text-gray-500 uppercase">Users</div>
             </div>
             <div className="bg-slate-50 p-6 rounded-2xl text-center hover:shadow-lg transition">
                <Globe className="mx-auto text-brand-green mb-3" size={32} />
                <div className="font-bold text-2xl text-gray-800">Global</div>
                <div className="text-xs text-gray-500 uppercase">Reach</div>
             </div>
             <div className="bg-slate-50 p-6 rounded-2xl text-center hover:shadow-lg transition">
                <Target className="mx-auto text-brand-orange mb-3" size={32} />
                <div className="font-bold text-2xl text-gray-800">Precise</div>
                <div className="text-xs text-gray-500 uppercase">Targeting</div>
             </div>
             <div className="bg-slate-50 p-6 rounded-2xl text-center hover:shadow-lg transition">
                <ShieldCheck className="mx-auto text-brand-dark mb-3" size={32} />
                <div className="font-bold text-2xl text-gray-800">Safe</div>
                <div className="text-xs text-gray-500 uppercase">Inventory</div>
             </div>
          </div>
        </div>

        {/* Business Model Explanation */}
        <div className="bg-brand-light rounded-3xl p-8 md:p-12">
           <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Ecosystem</h2>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 relative">
                 <div className="absolute -top-4 left-6 bg-brand-blue text-white px-3 py-1 text-xs font-bold rounded-full">Step 1</div>
                 <h3 className="font-bold text-lg mb-3 mt-2">Attract Users</h3>
                 <p className="text-gray-600 text-sm">
                   We deploy thousands of viral casual games across social media and SEO channels to bring users to our portal.
                 </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 relative">
                 <div className="absolute -top-4 left-