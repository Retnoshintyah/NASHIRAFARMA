import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ZoomIn, Download } from 'lucide-react';
import { ORG_CHART_URL } from '../constants';

const OrgChart: React.FC = () => {
  return (
    <div className="bg-slate-900 min-h-screen flex flex-col">
      {/* Header */}
      <div className="bg-white shadow-sm px-4 py-4 flex justify-between items-center z-10">
        <Link to="/profile" className="flex items-center gap-2 text-slate-600 hover:text-slate-900 font-medium transition-colors">
          <ArrowLeft size={20} />
          Kembali ke Profil
        </Link>
        <h1 className="text-lg font-bold text-slate-800 hidden md:block">Bagan Struktur Organisasi Nashira Farma</h1>
        <div className="flex gap-2">
            <button className="p-2 text-slate-500 hover:text-primary" title="Zoom Mode (Visual Only)">
                <ZoomIn size={20} />
            </button>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-auto flex items-center justify-center p-4 md:p-8 bg-slate-900">
        <div className="max-w-6xl w-full bg-white rounded-lg shadow-2xl overflow-hidden p-2">
           {/* In a real scenario, this would be the actual high-res image from the PDF */}
           <img 
             src={ORG_CHART_URL} 
             alt="Struktur Organisasi Nashira Farma" 
             className="w-full h-auto object-contain"
           />
        </div>
      </div>
    </div>
  );
};

export default OrgChart;