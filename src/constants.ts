import { Shoe, Category, Testimonial } from './types';

export const SHOES: Shoe[] = [
  {
    id: '1',
    name: 'Velocity X-1',
    brand: 'VELOCITY',
    price: 189,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=1000',
    category: 'Running',
    color: 'Neon Red',
    description: 'Engineered for maximum speed and comfort.',
    isTrending: true,
    isNew: true
  },
  {
    id: '2',
    name: 'Aero Max 90',
    brand: 'VELOCITY',
    price: 159,
    image: 'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?auto=format&fit=crop&q=80&w=1000',
    category: 'Sneakers',
    color: 'Cyan Blue',
    description: 'Classic silhouette with modern cushioning.',
    isTrending: true
  },
  {
    id: '3',
    name: 'Stealth Walker',
    brand: 'VELOCITY',
    price: 210,
    image: 'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&q=80&w=1000',
    category: 'Casual',
    color: 'Matte Black',
    description: 'Sophisticated design for everyday excellence.',
    isNew: true
  },
  {
    id: '4',
    name: 'Dunk High Pro',
    brand: 'VELOCITY',
    price: 145,
    image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80&w=1000',
    category: 'Sports',
    color: 'Pastel Mix',
    description: 'Performance meets street style.'
  },
  {
    id: '5',
    name: 'Cloud Runner',
    brand: 'VELOCITY',
    price: 175,
    image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&q=80&w=1000',
    category: 'Running',
    color: 'Volt Green',
    description: 'Lightweight feel for long distance runs.'
  },
  {
    id: '6',
    name: 'Urban Glide',
    brand: 'VELOCITY',
    price: 130,
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80&w=1000',
    category: 'Casual',
    color: 'Earth Brown',
    description: 'Sustainable materials, premium comfort.'
  }
];

export const CATEGORIES: Category[] = [
  { id: 'sports', name: 'Sports', icon: 'Trophy', image: 'https://images.unsplash.com/photo-1511886929837-354d827aae26?auto=format&fit=crop&q=80&w=600' },
  { id: 'casual', name: 'Casual', icon: 'Coffee', image: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&q=80&w=600' },
  { id: 'running', name: 'Running', icon: 'Zap', image: 'https://images.unsplash.com/photo-1538291323976-37dcaafccb12?auto=format&fit=crop&q=80&w=600' },
  { id: 'sneakers', name: 'Sneakers', icon: 'Star', image: 'https://images.unsplash.com/photo-1584735175315-9d5df23860e6?auto=format&fit=crop&q=80&w=600' },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Alex Rivera',
    role: 'Professional Athlete',
    content: 'The Velocity X-1 changed my training game. The response time is incredible.',
    avatar: 'https://i.pravatar.cc/150?u=alex'
  },
  {
    id: '2',
    name: 'Sarah Chen',
    role: 'Fashion Designer',
    content: 'Finally, a brand that understands the intersection of high-fashion and comfort.',
    avatar: 'https://i.pravatar.cc/150?u=sarah'
  },
  {
    id: '3',
    name: 'Marcus Thorne',
    role: 'Sneakerhead',
    content: 'The limited drops are insane. Quality is top-notch every single time.',
    avatar: 'https://i.pravatar.cc/150?u=marcus'
  }
];
