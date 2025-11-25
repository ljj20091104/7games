import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Trophy, TrendingUp, Gamepad } from 'lucide-react';
import { GameCard } from '../components/GameCard';
import { MOCK_GAMES } from '../constants';

export const HomePage: React.FC = () => {
  const featuredGames = MOCK_GAMES.slice(0, 4);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-brand-dark overflow-hidden">
        {/* Abstract shapes/bg */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-blue opacity-10 transform skew-x-12 translate-x-20"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-full bg-brand-orange opacity-10 transform -skew-x-12 -translate-x-20"></div>
        
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block bg-brand-orange/20 text-brand-orange border border-brand-orange/30 px-4 py-1.5 rounded-full text-sm font-bold mb-6">
              🎮 #1 Casual Gaming Network
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
              Play Instantly. <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-brand-blue">
                Reach Millions.
              </span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
              7GAMES connects players with the best puzzle & casual games and helps marketers tap into a massive, engaged global audience.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                to="/games" 
                className="w-full sm:w-auto px-8 py-4 bg-brand-orange hover:bg-orange-600 text-white rounded-lg font-bold text-lg shadow-lg shadow-orange-500/30 transition-all transform hover:-translate-y-1 flex items-center justify-center"
              >
                <Gamepad className="mr-2" size={20} />
                Play Games
              </Link>
              <Link 
                to="/contact" 
                className="w-full sm:w-auto px-8 py-4 bg-white text-brand-dark hover:bg-gray-100 rounded-lg font-bold text-lg shadow-lg transition-all transform hover:-translate-y-1 flex items-center justify-center border border-gray-200"
              >
                <TrendingUp className="mr-2" size={20} />
                Advertiser Info
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <div className="bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center divide-x divide-gray-100">
            <div>
              <div className="text-2xl font-black text-brand-dark">5M+</div>
              <div className="text-xs text-gray-500 uppercase font-bold">Daily Users</div>
            </div>
            <div>
              <div className="text-2xl font-black text-brand-dark">12k+</div>
              <div className="text-xs text-gray-500 uppercase font-bold">Games Hosted</div>
            </div>
            <div>
              <div className="text-2xl font-black text-brand-dark">150+</div>
              <div className="text-xs text-gray-500 uppercase font-bold">Countries</div>
            </div>
            <div>
              <div className="text-2xl font-black text-brand-dark">98%</div>
              <div className="text-xs text-gray-500 uppercase font-bold">Ad Fill Rate</div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Games */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 flex items-center">
                <Trophy className="text-yellow-500 mr-2" />
                Trending Puzzles
              </h2>
              <p className="text-gray-500 mt-2">The most played casual games on our network this week.</p>
            </div>
            <Link to="/games" className="text-brand-blue font-bold hover:text-blue-700 flex items-center group">
              View All <ArrowRight size={16} className="ml-1 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredGames.map(game => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>
        </div>
      </section>

      {/* Monetization / B2B Teaser */}
      <section className="py-16 bg-brand-light border-y border-gray-200">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-gray-200 flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Drive Traffic to Your Business
              </h2>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                Are you looking for high-quality, targeted web traffic? We aggregate millions of casual gamers and redirect them to high-converting offers.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-700">
                  <div className="w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-3 font-bold text-xs">✓</div>
                  High Retention Users
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-3 font-bold text-xs">✓</div>
                  Demographic Targeting
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-3 font-bold text-xs">✓</div>
                  CPM, CPC, and CPA Models
                </li>
              </ul>
              <Link to="/contact" className="inline-block bg-brand-dark text-white px-6 py-3 rounded-lg font-bold hover:bg-gray-800 transition">
                Start a Campaign
              </Link>
            </div>
            <div className="flex-1">
              <div className="grid grid-cols-2 gap-4">
                <img src="https://picsum.photos/300/300?random=10" alt="Analytics" className="rounded-xl shadow-md rotate-2 hover:rotate-0 transition-transform duration-500" />
                <img src="https://picsum.photos/300/300?random=11" alt="Growth" className="rounded-xl shadow-md -rotate-2 hover:rotate-0 transition-transform duration-500 mt-8" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};