import React from 'react';
import { Link } from 'react-router-dom';
import { HISTORY, CSR_ACTIVITIES, TEAM, LOGO_URL } from '../constants';
import { Target, Award, Building, ArrowRight, Eye, Users } from 'lucide-react';

const Profile: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Profil Perusahaan</h1>
          <p className="text-xl text-slate-300">Mengenal lebih dekat Nashira Farma</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-24">
        
        {/* Philosophy & Logo Section */}
        <section>
          <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">Filosofi Kami</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-sky-50 p-6 rounded-xl border border-sky-100">
                <h3 className="font-bold text-xl text-sky-800 mb-2 flex items-center gap-2">
                   Matahari (UNSRI)
                </h3>
                <p className="text-slate-700">
                  Melambangkan pencerahan, pengetahuan, dan sumber kehidupan. Nashira Farma bertumbuh dari basis akademik yang kuat dan menempatkan ilmu pengetahuan sebagai fondasi utama.
                </p>
              </div>
              <div className="bg-teal-50 p-6 rounded-xl border border-teal-100">
                <h3 className="font-bold text-xl text-teal-800 mb-2 flex items-center gap-2">
                   Angka "22"
                </h3>
                <p className="text-slate-700">
                  Melambangkan angkatan Farmasi UNSRI 2022, inisiator pendirian perusahaan. Angka ini adalah penanda sejarah dan solidaritas generasi yang dipersatukan oleh visi ilmiah.
                </p>
              </div>
              <div className="bg-amber-50 p-6 rounded-xl border border-amber-100">
                <h3 className="font-bold text-xl text-amber-800 mb-2 flex items-center gap-2">
                   Hipokrates
                </h3>
                <p className="text-slate-700">
                  Simbol tanggung jawab moral terhadap pasien. Menegaskan bahwa kami beroperasi bukan semata untuk profit, tetapi untuk memenuhi tanggung jawab sosial-medis.
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              {/* Logo Visualization */}
              <div className="w-80 h-80 flex items-center justify-center relative p-8">
                 <div className="absolute inset-0 bg-gradient-to-br from-sky-50 to-teal-50 rounded-full opacity-50 blur-xl"></div>
                 <img src={LOGO_URL} alt="Logo Nashira Farma" className="w-full h-full object-contain relative z-10 drop-shadow-xl" />
              </div>
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="bg-slate-50 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-primary font-semibold tracking-wide uppercase text-sm">Arah Kami</span>
              <h2 className="text-3xl font-bold text-slate-800 mt-2">Visi & Misi</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center text-primary mb-6">
                  <Target size={28} />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Visi</h3>
                <p className="text-slate-600 leading-relaxed">
                  Menjadi perusahaan farmasi terdepan di Indonesia yang mampu menghasilkan produk obat modern dan herbal berbasis riset serta berstandar global untuk mendukung kemandirian dan ketahanan obat nasional.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center text-secondary mb-6">
                  <Award size={28} />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Misi Utama</h3>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex gap-3">
                    <span className="w-1.5 h-1.5 bg-teal-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Produksi obat berkualitas tinggi standar GMP.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="w-1.5 h-1.5 bg-teal-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Menghadirkan obat steril & non-steril yang aman.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="w-1.5 h-1.5 bg-teal-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Integrasi sains modern dengan bahan alam Indonesia.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="w-1.5 h-1.5 bg-teal-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>R&D berkelanjutan untuk inovasi fitofarmaka.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* History Timeline */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800">Jejak Langkah</h2>
            <p className="text-slate-600 mt-2">Perjalanan Nashira Farma dari masa ke masa.</p>
          </div>
          
          <div className="relative border-l-2 border-slate-200 ml-4 md:ml-auto md:mx-auto max-w-3xl space-y-12">
            {HISTORY.map((event, index) => (
              <div key={index} className="relative pl-8 md:pl-0">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-white shadow-sm"></div>
                <div className={`md:flex items-start justify-between ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} group`}>
                  <div className="md:w-[45%] mb-2 md:mb-0">
                    <span className="inline-block px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-bold mb-2">
                      {event.year}
                    </span>
                  </div>
                  <div className="hidden md:block w-[10%]"></div>
                  <div className="md:w-[45%] bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                    <p className="text-slate-700">{event.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link to="/history" className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-sky-600 transition-colors">
              Baca Sejarah Lengkap
              <ArrowRight size={18} />
            </Link>
          </div>
        </section>

        {/* CSR Section */}
        <section>
          <div className="text-center mb-12">
            <span className="text-teal-600 font-semibold tracking-wide uppercase text-sm">Tanggung Jawab Sosial</span>
            <h2 className="text-3xl font-bold text-slate-800 mt-2">Kegiatan Kemasyarakatan</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {CSR_ACTIVITIES.map((activity, idx) => {
              return (
                <Link to={`/csr/${activity.id}`} key={idx} className="group block h-full">
                  <div className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:border-primary hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                    {/* Image Preview */}
                    <div className="h-48 overflow-hidden relative">
                      <img 
                        src={activity.image} 
                        alt={activity.title}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80"></div>
                      <div className="absolute bottom-4 left-4 text-white">
                        <div className="bg-primary/90 inline-block px-2 py-1 rounded text-xs font-bold mb-1">CSR Program</div>
                      </div>
                    </div>
                    
                    <div className="p-6 flex flex-col flex-1">
                      <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-primary transition-colors">
                        {activity.title}
                      </h3>
                      <p className="text-slate-600 mb-4 line-clamp-3 text-sm flex-1">
                        {activity.description}
                      </p>
                      
                      <div className="mt-auto pt-4 border-t border-slate-100 flex justify-between items-center text-primary font-medium text-sm">
                        <span>Lihat Detail Kegiatan</span>
                        <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* Leadership Team */}
        <section className="bg-slate-900 text-white -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-20 rounded-3xl my-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-10 opacity-10">
            <Users size={200} />
          </div>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-3xl font-bold mb-12">Kepengurusan</h2>
            <div className="flex flex-col items-center gap-8 mb-10">
              {/* CEO */}
              <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 w-full md:w-2/3">
                <div className="text-primary font-bold tracking-widest text-sm uppercase mb-2">{TEAM[0].role}</div>
                <div className="text-xl md:text-2xl font-bold">{TEAM[0].name}</div>
              </div>
              
              {/* Other Directors */}
              <div className="flex flex-col md:flex-row gap-6 w-full justify-center">
                {TEAM.slice(1).map((member, idx) => (
                  <div key={idx} className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10 w-full md:w-1/2">
                    <div className="text-sky-300 font-bold tracking-widest text-xs uppercase mb-2">{member.role}</div>
                    <div className="text-lg font-semibold">{member.name}</div>
                  </div>
                ))}
              </div>
            </div>

            <Link 
              to="/org-chart" 
              className="inline-flex items-center gap-2 bg-white text-slate-900 px-6 py-3 rounded-full font-bold hover:bg-slate-200 transition-colors shadow-lg"
            >
              <Eye size={18} />
              Lihat Detail Bagan
            </Link>
          </div>
        </section>

        {/* Location Section */}
        <section className="text-center">
           <h2 className="text-3xl font-bold text-slate-800 mb-8">Lokasi Kami</h2>
           <div className="bg-white p-2 rounded-xl shadow-lg inline-block border border-slate-100">
             <div className="bg-slate-100 rounded-lg p-8 w-full max-w-4xl mx-auto flex flex-col items-center justify-center min-h-[300px]">
                <Building size={48} className="text-slate-400 mb-4" />
                <p className="text-slate-500 font-medium">Peta Lokasi Pasuruan</p>
                <p className="text-slate-400 text-sm mt-2">(Integrasi Google Maps)</p>
             </div>
           </div>
        </section>

      </div>
    </div>
  );
};

export default Profile;