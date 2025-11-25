export interface Game {
  id: string;
  title: string;
  category: string;
  thumbnail: string;
  players: number;
  rating: number;
  description: string;
}

export enum PageRoutes {
  HOME = '/',
  GAMES = '/games',
  ABOUT = '/about',
  CONTACT = '/contact'
}

export interface NavItem {
  label: string;
  path: PageRoutes;
}

export interface ServiceFeature {
  title: string;
  description: string;
  iconName: 'ChartBar' | 'Users' | 'Target' | 'Globe';
}