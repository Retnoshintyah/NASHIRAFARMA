import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types';
import { AlertCircle, Thermometer, ArrowRight, ImageOff } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Link to={`/products/${product.id}`} className="group flex flex-col h-full">
      <div className="bg-white rounded-xl shadow-sm group-hover:shadow-md transition-all duration-300 border border-slate-100 group-hover:border-primary/50 overflow-hidden flex flex-col h-full relative">
        
        {/* Product Image Section */}
        <div className="aspect-[4/3] bg-white p-4 flex items-center justify-center border-b border-slate-50 relative overflow-hidden">
          {product.image ? (
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-500"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                target.nextElementSibling?.classList.remove('hidden');
              }}
            />
          ) : null}
          {/* Fallback if no image or error loading */}
          <div className={`${product.image ? 'hidden' : 'flex'} flex-col items-center justify-center text-slate-300 w-full h-full absolute inset-0 bg-slate-50`}>
             <ImageOff size={32} />
             <span className="text-xs mt-2">No Image</span>
          </div>
        </div>

        <div className="p-5 flex-1">
          <div className="flex justify-between items-start mb-2">
            <span className="inline-block px-2 py-1 text-xs font-semibold rounded-full bg-sky-100 text-sky-800">
              {product.type}
            </span>
            <span className={`inline-block px-2 py-1 text-xs font-semibold rounded-full border ${
              product.category === 'Obat Keras' ? 'border-red-200 text-red-700 bg-red-50' : 'border-green-200 text-green-700 bg-green-50'
            }`}>
              {product.category}
            </span>
          </div>
          
          <h3 className="text-xl font-bold text-slate-800 mb-1 group-hover:text-primary transition-colors">{product.name}</h3>
          <p className="text-sm text-slate-500 italic mb-3">{product.genericName}</p>
          
          <p className="text-slate-600 text-sm mb-4 line-clamp-2">{product.description}</p>
          
          <div className="space-y-2 text-xs text-slate-600">
            <div className="flex items-start gap-2">
              <AlertCircle size={14} className="mt-0.5 text-amber-500 flex-shrink-0" />
              <span className="line-clamp-1"><span className="font-semibold">Indikasi:</span> {product.indication}</span>
            </div>
            <div className="flex items-start gap-2">
              <Thermometer size={14} className="mt-0.5 text-teal-500 flex-shrink-0" />
              <span><span className="font-semibold">Penyimpanan:</span> {product.storage}</span>
            </div>
          </div>
        </div>
        
        <div className="bg-slate-50 px-5 py-3 border-t border-slate-100 flex justify-between items-center group-hover:bg-slate-100 transition-colors">
          <div className="text-xs text-slate-500">Harga Per Unit</div>
          <div className="flex items-center gap-2">
            <div className="font-bold text-primary">{product.price}</div>
            <ArrowRight size={14} className="text-slate-400 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;