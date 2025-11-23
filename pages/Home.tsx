import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Activity, Globe, ShieldCheck } from 'lucide-react';
import { PRODUCTS } from '../constants';
import ProductCard from '../components/ProductCard';

const Home: React.FC = () => {
  const featuredProducts = PRODUCTS.slice(0, 4);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img 
            src="/assets/pharmacy.jpg" 
            alt="Laboratorium Farmasi" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight">
              Science, Innovation, <br /> and Humanity
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed">
              Nashira Farma berkomitmen menghadirkan solusi kesehatan modern dan herbal berbasis riset berstandar global untuk Indonesia dan dunia.
            </p>
            <div className="flex gap-4">
              <Link to="/products" className="bg-primary hover:bg-sky-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2">
                Lihat Produk
                <ArrowRight size={18} />
              </Link>
              <Link to="/profile" className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                Tentang Kami
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats/Values Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-xl bg-slate-50">
              <div className="bg-sky-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                <ShieldCheck size={24} />
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">Terstandar GMP</h3>
              <p className="text-slate-600 text-sm">Produksi obat berkualitas tinggi dengan standar Good Manufacturing Practices yang ketat.</p>
            </div>
            <div className="text-center p-6 rounded-xl bg-slate-50">
              <div className="bg-teal-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-secondary">
                <Activity size={24} />
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">Riset & Inovasi</h3>
              <p className="text-slate-600 text-sm">Mengintegrasikan sains modern dengan potensi bahan alam Indonesia melalui Nashira Research Center.</p>
            </div>
            <div className="text-center p-6 rounded-xl bg-slate-50">
              <div className="bg-amber-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-accent">
                <Globe size={24} />
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">Jangkauan Luas</h3>
              <p className="text-slate-600 text-sm">Distribusi luas untuk mendukung kemandirian dan ketahanan obat nasional.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-10">
            <div>
              <h2 className="text-3xl font-bold text-slate-800">Produk Unggulan</h2>
              <p className="text-slate-600 mt-2">Solusi kesehatan terpercaya untuk keluarga Anda.</p>
            </div>
            <Link to="/products" className="hidden md:flex items-center gap-1 text-primary font-medium hover:underline">
              Lihat Semua Produk <ArrowRight size={16} />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="mt-8 text-center md:hidden">
            <Link to="/products" className="inline-block bg-white border border-slate-300 text-slate-700 px-6 py-2 rounded-lg font-medium">
              Lihat Semua Produk
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-teal-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Mitra Kesehatan Terpercaya</h2>
          <p className="text-teal-100 max-w-2xl mx-auto mb-8">
            Kami terus berinovasi untuk menciptakan masa depan kesehatan yang lebih baik bagi seluruh lapisan masyarakat.
          </p>
          <Link to="/profile" className="inline-block bg-white text-teal-800 font-bold px-8 py-3 rounded-lg hover:bg-teal-50 transition-colors">
            Pelajari Lebih Lanjut
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;