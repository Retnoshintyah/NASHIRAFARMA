import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar } from 'lucide-react';
import { FULL_HISTORY } from '../constants';

const HistoryDetail: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Header Image/Background */}
      <div className="bg-slate-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Sejarah Nashira Farma</h1>
          <p className="text-lg text-slate-300">Perjalanan Panjang Menuju Kemandirian Obat Nasional</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <Link to="/profile" className="inline-flex items-center text-slate-500 hover:text-primary transition-colors">
            <ArrowLeft size={18} className="mr-2" />
            Kembali ke Profil
          </Link>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 md:p-12">
          <div className="prose prose-lg prose-slate max-w-none">
            {FULL_HISTORY.map((paragraph, index) => (
              <p key={index} className="mb-6 text-slate-700 leading-relaxed text-justify">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-slate-100 flex items-center justify-center">
             <div className="flex flex-col items-center text-center">
                <div className="bg-primary/10 p-4 rounded-full text-primary mb-4">
                  <Calendar size={32} />
                </div>
                <h3 className="text-xl font-bold text-slate-800">Terus Berkarya</h3>
                <p className="text-slate-500 mt-2">Menyongsong masa depan kesehatan Indonesia yang lebih baik.</p>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoryDetail;
