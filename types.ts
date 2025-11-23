export interface Product {
  id: number;
  name: string;
  genericName: string;
  description: string;
  activeIngredients: string;
  indication: string;
  dosage: string;
  category: string; // Golongan
  sideEffects: string;
  storage: string;
  price: string;
  type: 'Tablet' | 'Sirup' | 'Tetes Mata' | 'Suspensi' | 'Injeksi' | 'Infus' | 'Salep' | 'Spray' | 'Bedak';
  image?: string;
}

export interface HistoryEvent {
  year: string;
  description: string;
}

export interface CSREvent {
  id: number;
  title: string;
  image: string;
  description: string;
  goals: string[]; // Tujuan
  events: string[]; // Rangkaian Acara
  benefits: string[]; // Manfaat
}

export interface TeamMember {
  role: string;
  name: string;
}