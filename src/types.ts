export interface Shoe {
  id: string;
  name: string;
  brand: string;
  price: number;
  image: string;
  category: string;
  color: string;
  description: string;
  isTrending?: boolean;
  isNew?: boolean;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar: string;
}
