import React from 'react';
import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* About */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Nashira Farma</h3>
            <p className="text-sm leading-relaxed mb-4">
              Science, Innovation, and Humanity. Berkomitmen menghadirkan solusi kesehatan modern bagi Indonesia dan dunia sejak 2017.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Hubungi Kami</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="flex-shrink-0 mt-0.5 text-primary" size={18} />
                <span>{CONTACT_INFO.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-primary" size={18} />
                <span>{CONTACT_INFO.phone}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-primary" size={18} />
                <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-white transition-colors">
                  {CONTACT_INFO.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Location Link */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Lokasi</h3>
            <p className="text-sm mb-4">Kunjungi kantor kami di Jawa Timur.</p>
            <a 
              href={CONTACT_INFO.mapsLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg hover:bg-sky-600 transition-colors text-sm font-medium"
            >
              <MapPin size={16} />
              Buka Google Maps
              <ExternalLink size={14} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-slate-700 mt-10 pt-6 text-center text-xs text-slate-500">
          &copy; {new Date().getFullYear()} Nashira Farma. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;