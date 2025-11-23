import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { CSR_ACTIVITIES } from '../constants';
import { ArrowLeft, Target, Calendar, Heart, CheckCircle } from 'lucide-react';

const CSRDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const activity = CSR_ACTIVITIES.find(a => a.id === Number(id));

  if (!activity) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center bg-slate-50 px-4">
        <h2 className="text-2xl font-bold text-slate-800 mb-2">Kegiatan Tidak Ditemukan</h2>
        <Link to="/profile" className="text-primary hover:underline flex items-center gap-2">
          <ArrowLeft size={16} /> Kembali ke Profil
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Image */}
      <div className="h-[40vh] md:h-[50vh] relative overflow-hidden">
        <img 
          src={activity.image} 
          alt={activity.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 max-w-7xl mx-auto">
          <Link to="/profile" className="text-white/80 hover:text-white mb-4 inline-flex items-center gap-2 bg-black/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm transition-colors">
            <ArrowLeft size={16} /> Kembali ke Profil
          </Link>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">{activity.title}</h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 -mt-8 relative z-10">
        <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-8 md:p-10">
          
          <div className="prose prose-lg prose-slate max-w-none mb-10">
            <p className="lead text-xl text-slate-600 font-medium">
              {activity.description}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-10">
            {/* Tujuan */}
            <div className="bg-sky-50 rounded-xl p-6 border border-sky-100">
              <div className="flex items-center gap-3 mb-4 text-sky-800">
                <Target size={24} />
                <h3 className="text-xl font-bold">Tujuan</h3>
              </div>
              <ul className="space-y-3">
                {activity.goals.map((goal, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-slate-700">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-sky-500 flex-shrink-0"></span>
                    <span>{goal}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Manfaat */}
            <div className="bg-teal-50 rounded-xl p-6 border border-teal-100">
              <div className="flex items-center gap-3 mb-4 text-teal-800">
                <Heart size={24} />
                <h3 className="text-xl font-bold">Manfaat</h3>
              </div>
              <ul className="space-y-3">
                {activity.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-slate-700">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-teal-500 flex-shrink-0"></span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Rangkaian Acara */}
          <div className="border-t border-slate-200 pt-10">
            <div className="flex items-center gap-3 mb-6 text-slate-800">
              <Calendar size={28} className="text-primary" />
              <h3 className="text-2xl font-bold">Rangkaian Acara</h3>
            </div>
            
            <div className="space-y-4">
              {activity.events.map((event, idx) => (
                <div key={idx} className="flex items-center gap-4 bg-slate-50 p-4 rounded-lg border border-slate-100 hover:border-primary/30 transition-colors">
                  <div className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center font-bold text-slate-400 text-sm flex-shrink-0 shadow-sm">
                    {idx + 1}
                  </div>
                  <div className="flex items-center gap-3 text-slate-700 font-medium">
                    <CheckCircle size={18} className="text-green-500" />
                    {event}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CSRDetail;