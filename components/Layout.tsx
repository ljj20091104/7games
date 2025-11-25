import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight } from 'lucide-react';
import { NAV_ITEMS } from '../constants';
import { AIChatbot } from './AIChatbot';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Top Banner (Ads Placeholder or Announcement) */}
      <div className="bg-brand-orange text-white text-xs py-1 text-center font-bold tracking-wide">
        🚀 HOT: New Advertising Slots Available for Q4! Reach 5M+ Users.
      </div>

      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-40 border-b-4 border-brand-green">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="bg-brand-orange w-10 h-10 rounded-lg flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300 shadow-md">
                <span className="text-white font-black text-2xl leading-none italic font-mono pr-1">7</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-black text-brand-dark leading-none tracking-tighter italic">
                  GAMES
                </span>
                <span className="text-[10px] text-gray-500 font-semibold tracking-widest uppercase leading-none">
                  Global Traffic
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center space-x-8">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-sm font-bold uppercase tracking-wide transition-colors duration-200 ${
                    location.pathname === item.path
                      ? 'text-brand-orange border-b-2 border-brand-orange'
                      : 'text-gray-600 hover:text-brand-blue'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Link 
                to="/contact" 
                className="bg-brand-green hover:bg-green-600 text-white px-5 py-2 rounded-full text-sm font-bold shadow-lg transform hover:-translate-y-0.5 transition-all"
              >
                Buy Traffic
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-600 focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 absolute w-full left-0 z-50 shadow-xl">
            <div className="flex flex-col p-4 space-y-4">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center justify-between text-base font-semibold p-2 rounded-md ${
                     location.pathname === item.path ? 'bg-brand-light text-brand-orange' : 'text-gray-700'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                  <ChevronRight size={16} />
                </Link>
              ))}
               <Link 
                to="/contact" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="bg-brand-green text-white text-center py-3 rounded-lg font-bold shadow-sm"
              >
                Advertiser Portal
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow bg-slate-50 relative">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-brand-dark text-white pt-12 pb-6 border-t-8 border-brand-orange">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center space-x-2 mb-4">
                <div className="bg-brand-orange w-8 h-8 rounded flex items-center justify-center">
                    <span className="text-white font-black italic text-lg pr-0.5">7</span>
                </div>
                <span className="text-xl font-bold italic">7GAMES</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Aggregating millions of casual gamers daily. We turn playtime into prime marketing time.
              </p>
            </div>
            
            <div>
              <h3 className="text-brand-blue font-bold uppercase tracking-wider mb-4 text-sm">Platform</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link to="/games" className="hover:text-white transition">All Games</Link></li>
                <li><Link to="/games" className="hover:text-white transition">New Arrivals</Link></li>
                <li><Link to="/games" className="hover:text-white transition">Popular</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-brand-green font-bold uppercase tracking-wider mb-4 text-sm">Business</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link to="/contact" className="hover:text-white transition">Advertise With Us</Link></li>
                <li><Link to="/about" className="hover:text-white transition">About Traffic</Link></li>
                <li><Link to="/contact" className="hover:text-white transition">Partnership</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-brand-orange font-bold uppercase tracking-wider mb-4 text-sm">Legal</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-6 text-center text-gray-500 text-xs">
            &copy; {new Date().getFullYear()} 7GAMES Inc. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Floating AI Chatbot */}
      <AIChatbot />
    </div>
  );
};