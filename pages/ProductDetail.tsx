import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { PRODUCTS } from '../constants';
import { 
  ArrowLeft, 
  Pill, 
  Syringe, 
  Eye, 
  Droplets, 
  SprayCan, 
  Tablet, 
  FlaskRound,
  ShieldAlert,
  Thermometer,
  Activity,
  Info,
  ShoppingCart,
  ImageOff
} from 'lucide-react';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = PRODUCTS.find(p => p.id === Number(id));

  if (!product) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center bg-slate-50 px-4">
        <h2 className="text-2xl font-bold text-slate-800 mb-2">Produk Tidak Ditemukan</h2>
        <p className="text-slate-600 mb-6">Maaf, produk yang Anda cari tidak tersedia dalam katalog kami.</p>
        <Link to="/products" className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-sky-600 transition-colors flex items-center gap-2">
          <ArrowLeft size={18} />
          Kembali ke Katalog
        </Link>
      </div>
    );
  }

  // Helper to get icon based on type (used as fallback or additional visual)
  const getProductIcon = (type: string) => {
    switch (type) {
      case 'Tablet': return <Tablet size={48} />;
      case 'Sirup': return <FlaskRound size={48} />;
      case 'Tetes Mata': return <Eye size={48} />;
      case 'Suspensi': return <Droplets size={48} />;
      case 'Injeksi': return <Syringe size={48} />;
      case 'Infus': return <Activity size={48} />;
      case 'Spray': return <SprayCan size={48} />;
      case 'Salep': return <Droplets size={48} />;
      case 'Bedak': return <ShieldAlert size={48} />;
      default: return <Pill size={48} />;
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb / Back Navigation */}
        <div className="mb-8">
          <Link to="/products" className="inline-flex items-center text-slate-500 hover:text-primary transition-colors">
            <ArrowLeft size={18} className="mr-2" />
            Kembali ke Katalog Produk
          </Link>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-0 md:gap-8">
            
            {/* Left Column: Image & Quick Actions */}
            <div className="md:col-span-5 bg-white p-8 md:p-12 flex flex-col items-center border-b md:border-b-0 md:border-r border-slate-100">
              <div className="w-full aspect-square bg-white rounded-xl flex items-center justify-center mb-8 relative">
                {product.image ? (
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-contain"
                    onError={(e) => {
                       const target = e.target as HTMLImageElement;
                       target.style.display = 'none';
                       target.nextElementSibling?.classList.remove('hidden');
                    }}
                  />
                ) : null}
                
                {/* Fallback Image */}
                 <div className={`${product.image ? 'hidden' : 'flex'} flex-col items-center justify-center text-slate-300 w-full h-full border border-slate-100 rounded-xl bg-slate-50`}>
                   {getProductIcon(product.type)}
                   <span className="text-xs mt-2 font-medium text-slate-400">Gambar Tidak Tersedia</span>
                </div>
              </div>
              
              <div className="w-full space-y-4">
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 shadow-sm text-center">
                  <span className="text-slate-400 text-xs font-bold uppercase tracking-wider block mb-1">Harga</span>
                  <span className="text-3xl font-bold text-slate-800">{product.price}</span>
                </div>
                
                <a 
                  href={`https://wa.me/?text=Halo, saya ingin bertanya tentang produk ${product.name}`}
                  target="_blank" 
                  rel="noreferrer"
                  className="w-full block bg-primary hover:bg-sky-600 text-white font-bold py-4 rounded-xl text-center transition-colors flex items-center justify-center gap-2 shadow-lg shadow-sky-100"
                >
                  <ShoppingCart size={20} />
                  Pesan / Tanya Produk
                </a>
              </div>
            </div>

            {/* Right Column: Detailed Information */}
            <div className="md:col-span-7 p-8 md:p-12 bg-slate-50/50">
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 text-sm font-semibold rounded-full bg-sky-100 text-sky-800">
                  {product.type}
                </span>
                <span className={`px-3 py-1 text-sm font-semibold rounded-full border ${
                  product.category === 'Obat Keras' ? 'border-red-200 text-red-700 bg-red-50' : 'border-green-200 text-green-700 bg-green-50'
                }`}>
                  {product.category}
                </span>
              </div>

              <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">{product.name}</h1>
              <p className="text-xl text-slate-500 italic mb-6 font-medium">{product.genericName}</p>
              
              <div className="prose prose-slate max-w-none mb-8">
                <p className="text-slate-700 leading-relaxed text-lg">
                  {product.description}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-3">
                    <Activity className="text-teal-600 mt-1" size={20} />
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm uppercase mb-1">Zat Aktif</h4>
                      <p className="text-slate-700 font-medium">{product.activeIngredients}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-3">
                    <Info className="text-blue-600 mt-1" size={20} />
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm uppercase mb-1">Indikasi</h4>
                      <p className="text-slate-700">{product.indication}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-3">
                    <Pill className="text-indigo-600 mt-1" size={20} />
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm uppercase mb-1">Dosis</h4>
                      <p className="text-slate-700">{product.dosage}</p>
                    </div>
                  </div>
                </div>

                 <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-3">
                    <ShieldAlert className="text-amber-600 mt-1" size={20} />
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm uppercase mb-1">Efek Samping</h4>
                      <p className="text-slate-700">{product.sideEffects}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow sm:col-span-2">
                  <div className="flex items-start gap-3">
                    <Thermometer className="text-rose-500 mt-1" size={20} />
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm uppercase mb-1">Penyimpanan</h4>
                      <p className="text-slate-700">{product.storage}</p>
                    </div>
                  </div>
                </div>

              </div>

              <div className="mt-8 pt-6 border-t border-slate-200 text-sm text-slate-500">
                <p>
                  *Informasi ini hanya untuk referensi. Konsultasikan dengan dokter atau apoteker sebelum menggunakan obat keras.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;