import { Game, NavItem, ServiceFeature, PageRoutes } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: PageRoutes.HOME },
  { label: 'Game Hall', path: PageRoutes.GAMES },
  { label: 'About Us', path: PageRoutes.ABOUT },
  { label: 'Contact & Ads', path: PageRoutes.CONTACT },
];

export const MOCK_GAMES: Game[] = [
  {
    id: '1',
    title: 'Bubble Shooter Pro',
    category: 'Casual',
    thumbnail: 'https://picsum.photos/400/300?random=101',
    players: 85450,
    rating: 4.9,
    description: 'Classic bubble shooting fun with 1000+ levels.'
  },
  {
    id: '2',
    title: 'Jewel Legend',
    category: 'Puzzle',
    thumbnail: 'https://picsum.photos/400/300?random=102',
    players: 64200,
    rating: 4.7,
    description: 'Match shiny gems and solve ancient puzzles.'
  },
  {
    id: '3',
    title: 'Block Puzzle Wood',
    category: 'Puzzle',
    thumbnail: 'https://picsum.photos/400/300?random=103',
    players: 48900,
    rating: 4.5,
    description: 'Relaxing wooden block strategy game.'
  },
  {
    id: '4',
    title: 'Happy Farm Harvest',
    category: 'Simulation',
    thumbnail: 'https://picsum.photos/400/300?random=104',
    players: 76000,
    rating: 4.8,
    description: 'Grow crops and manage your cute farm.'
  },
  {
    id: '5',
    title: 'Candy Rain Saga',
    category: 'Casual',
    thumbnail: 'https://picsum.photos/400/300?random=105',
    players: 92100,
    rating: 4.6,
    description: 'Sweet candy matching adventure.'
  },
  {
    id: '6',
    title: 'Sudoku Master',
    category: 'Puzzle',
    thumbnail: 'https://picsum.photos/400/300?random=106',
    players: 35600,
    rating: 4.7,
    description: 'Train your brain with daily sudoku challenges.'
  },
  {
    id: '7',
    title: 'Pet Rescue Link',
    category: 'Casual',
    thumbnail: 'https://picsum.photos/400/300?random=107',
    players: 55000,
    rating: 4.8,
    description: 'Connect matching pets to save them.'
  },
  {
    id: '8',
    title: '2048 Logic',
    category: 'Puzzle',
    thumbnail: 'https://picsum.photos/400/300?random=108',
    players: 29800,
    rating: 4.4,
    description: 'The classic number merging math puzzle.'
  },
];

export const FEATURES: ServiceFeature[] = [
  {
    title: 'Massive Traffic',
    description: 'Over 5 million daily active users playing casual games.',
    iconName: 'Users'
  },
  {
    title: 'Targeted Ads',
    description: 'Precision targeting based on game genre and user behavior.',
    iconName: 'Target'
  },
  {
    title: 'Global Reach',
    description: 'Traffic aggregated from North America, Europe, and Asia.',
    iconName: 'Globe'
  },
  {
    title: 'Real-time Analytics',
    description: 'Monitor your campaign performance with live dashboards.',
    iconName: 'ChartBar'
  }
];