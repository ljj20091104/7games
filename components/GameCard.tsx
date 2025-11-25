import React from 'react';
import { Play, Star, Users } from 'lucide-react';
import { Game } from '../types';

interface GameCardProps {
  game: Game;
}

export const GameCard: React.FC<GameCardProps> = ({ game }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 group">
      <div className="relative overflow-hidden h-40">
        <img 
          src={game.thumbnail} 
          alt={game.title} 
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all flex items-center justify-center">
            <button className="bg-brand-orange text-white rounded-full p-3 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-lg">
                <Play fill="white" size={24} />
            </button>
        </div>
        <div className="absolute top-2 right-2 bg-brand-green text-white text-[10px] font-bold px-2 py-1 rounded">
          {game.category}
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="font-bold text-gray-800 text-lg mb-1 truncate">{game.title}</h3>
        <p className="text-gray-500 text-xs mb-3 line-clamp-1">{game.description}</p>
        
        <div className="flex items-center justify-between text-xs text-gray-400">
          <div className="flex items-center space-x-1">
            <Users size={12} />
            <span>{(game.players / 1000).toFixed(1)}k</span>
          </div>
          <div className="flex items-center space-x-1 text-yellow-500">
            <Star size={12} fill="currentColor" />
            <span>{game.rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
};