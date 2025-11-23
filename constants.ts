import { Product, HistoryEvent, CSREvent, TeamMember } from './types';

// Pastikan file gambar disimpan di folder public/assets/products/
export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Cardisart",
    genericName: "Irbesartan 150 mg",
    description: "Tablet antihipertensi yang bekerja mengendurkan pembuluh darah.",
    activeIngredients: "Irbesartan 150 mg",
    indication: "Hipertensi, nefropati diabetik",
    dosage: "1x1 tablet per hari",
    category: "Obat Keras",
    sideEffects: "Pusing, hipotensi, hiperkalemia",
    storage: "<30°C",
    price: "Rp 35.000 / strip",
    type: "Tablet",
    image: "./assets/products/Cardisart.jpg"
  },
  {
    id: 2,
    name: "Moxilin",
    genericName: "Amoxicillin 500 mg",
    description: "Antibiotik golongan penisilin untuk infeksi saluran napas, kulit, dan kemih.",
    activeIngredients: "Amoxicillin 500 mg",
    indication: "ISPA, otitis, sinusitis, ISK",
    dosage: "3x1 tablet per hari",
    category: "Obat Keras",
    sideEffects: "Diare, alergi, mual",
    storage: "<30°C",
    price: "Rp 20.000 / strip",
    type: "Tablet",
    image: "./assets/products/Moxilin.jpg"
  },
  {
    id: 3,
    name: "Cefakid",
    genericName: "Cefadroxil 125 mg/5 mL",
    description: "Antibiotik sirup anak golongan sefalosporin.",
    activeIngredients: "125 mg/5 mL",
    indication: "Tonsilitis, faringitis, ISK, infeksi kulit",
    dosage: "10–15 mg/kgBB, 2x sehari",
    category: "Obat Keras",
    sideEffects: "Diare, mual, reaksi alergi",
    storage: "Kulkas (setelah rekonstitusi 14 hari)",
    price: "Rp 25.000",
    type: "Sirup",
    image: "./assets/products/Cefakid.jpg"
  },
  {
    id: 4,
    name: "Moxicare",
    genericName: "Moxifloxacin 5 mg/mL",
    description: "Tetes mata antibiotik untuk konjungtivitis bakteri.",
    activeIngredients: "Moxifloxacin 5 mg/mL",
    indication: "Infeksi mata bakteri",
    dosage: "1 tetes 3x sehari",
    category: "Obat Keras",
    sideEffects: "Perih ringan, mata kering",
    storage: "<30°C",
    price: "Rp 70.000",
    type: "Tetes Mata",
    image: "/assets/products/Moxicare.jpg"
  },
  {
    id: 5,
    name: "Alumag",
    genericName: "Antasida + Simethicone",
    description: "Suspensi antasida untuk menetralkan asam lambung dan meredakan kembung.",
    activeIngredients: "Al(OH)3 + Mg(OH)2 + Simethicone",
    indication: "Maag, dispepsia, kembung",
    dosage: "1–2 sendok takar, 3x/hari",
    category: "Obat Bebas Terbatas",
    sideEffects: "Sembelit/diare ringan",
    storage: "<30°C",
    price: "Rp 28.000",
    type: "Suspensi",
    image: "/assets/products/Alumag.png"
  },
  {
    id: 6,
    name: "Corvasta",
    genericName: "Atorvastatin 20 mg",
    description: "Obat penurun kolesterol untuk mencegah penyakit jantung dan stroke.",
    activeIngredients: "Atorvastatin 20 mg",
    indication: "Dislipidemia",
    dosage: "1x1 tablet per hari",
    category: "Obat Keras",
    sideEffects: "Nyeri otot, peningkatan enzim hati",
    storage: "<30°C",
    price: "Rp 45.000",
    type: "Tablet",
    image: "/assets/products/corvasta.png"
  },
  {
    id: 7,
    name: "Allerzine",
    genericName: "Cetirizine 10 mg",
    description: "Antihistamin untuk meredakan gejala alergi tanpa kantuk berlebih.",
    activeIngredients: "Cetirizine 10 mg",
    indication: "Alergi, urtikaria",
    dosage: "1x1 tablet/hari",
    category: "Obat Bebas Terbatas",
    sideEffects: "Ngantuk ringan",
    storage: "<30°C",
    price: "Rp 16.500",
    type: "Tablet",
    image: "/assets/products/Allerzine.jpg"
  },
  {
    id: 8,
    name: "Alcrafat",
    genericName: "Sucralfate 500 mg/5 mL",
    description: "Suspensi pelapis lambung untuk tukak lambung dan gastritis.",
    activeIngredients: "Sucralfate 500 mg/5 mL",
    indication: "Tukak lambung, gastritis",
    dosage: "10 mL, 4x/hari sebelum makan",
    category: "Obat Bebas Terbatas",
    sideEffects: "Sembelit",
    storage: "<30°C",
    price: "Rp 30.000",
    type: "Suspensi",
    image: "/assets/products/Alcrafat.jpg"
  },
  {
    id: 9,
    name: "Profen",
    genericName: "Ibuprofen 200 mg/5 mL",
    description: "Sirup antipiretik dan antiinflamasi rasa strawberry untuk anak.",
    activeIngredients: "Ibuprofen 200 mg/5 mL",
    indication: "Demam, nyeri",
    dosage: "5–10 mg/kgBB tiap 6–8 jam",
    category: "Obat Bebas Terbatas",
    sideEffects: "Mual, iritasi lambung",
    storage: "<30°C",
    price: "Rp 28.000",
    type: "Sirup",
    image: "/assets/products/profen.jpg"
  },
  {
    id: 10,
    name: "Ascorvita",
    genericName: "Ascorbic Acid 1 g/5 mL",
    description: "Injeksi vitamin C dosis tinggi.",
    activeIngredients: "Vitamin C 1 g/5 mL",
    indication: "Defisiensi vitamin C, pasca operasi",
    dosage: "Sesuai anjuran tenaga medis",
    category: "Obat Keras",
    sideEffects: "Nyeri suntik, mual",
    storage: "<25°C",
    price: "Rp 45.000",
    type: "Injeksi",
    image: "/assets/products/ascorvita.png"
  },
  {
    id: 11,
    name: "Metricon",
    genericName: "Metformin ER 500 mg",
    description: "Obat antidiabetes untuk menurunkan gula darah.",
    activeIngredients: "Metformin ER 500 mg",
    indication: "Diabetes tipe 2",
    dosage: "1–2 tablet/hari",
    category: "Obat Keras",
    sideEffects: "Mual, kembung",
    storage: "<30°C",
    price: "Rp 20.000",
    type: "Tablet",
    image: "/assets/products/metricon tablet.jpg"
  },
  {
    id: 12,
    name: "Oxyvent Drop",
    genericName: "Oxymetazoline 0.05%",
    description: "Semprot hidung dekongestan untuk hidung tersumbat.",
    activeIngredients: "Oxymetazoline 0.05%",
    indication: "Hidung tersumbat",
    dosage: "2x semprot/lubang hidung, tiap 12 jam",
    category: "Obat Bebas Terbatas",
    sideEffects: "Iritasi lokal",
    storage: "<30°C",
    price: "Rp 29.500",
    type: "Spray",
    image: "/assets/products/oxyvent drop.png"
  },
  {
    id: 13,
    name: "Ambrolex",
    genericName: "Ambroxol 15 mg/5 mL",
    description: "Eliksir mukolitik untuk mengencerkan dahak.",
    activeIngredients: "Ambroxol 15 mg/5 mL",
    indication: "Batuk berdahak",
    dosage: "2,5–5 mL, 3x/hari",
    category: "Obat Bebas Terbatas",
    sideEffects: "Mual ringan",
    storage: "<30°C",
    price: "Rp 25.700",
    type: "Sirup",
    image: "/assets/products/ambrolex.png"
  },
  {
    id: 14,
    name: "Intrasal",
    genericName: "Sodium Chloride 0.9%",
    description: "Nasal spray saline steril untuk melembapkan rongga hidung.",
    activeIngredients: "NaCl 0.9%",
    indication: "Hidung tersumbat, iritasi",
    dosage: "1–2 semprot sesuai kebutuhan",
    category: "Obat Bebas",
    sideEffects: "Iritasi ringan",
    storage: "<30°C",
    price: "Rp 28.500",
    type: "Spray",
    image: "/assets/products/intrasal.png"
  },
  {
    id: 15,
    name: "Mepresol",
    genericName: "Methylprednisolone 125 mg",
    description: "Kortikosteroid injeksi untuk inflamasi berat atau syok.",
    activeIngredients: "Methylprednisolone 125 mg",
    indication: "Alergi berat, inflamasi, syok",
    dosage: "Sesuai dokter",
    category: "Obat Keras",
    sideEffects: "Peningkatan gula darah, infeksi",
    storage: "<30°C",
    price: "Rp 55.000",
    type: "Injeksi",
    image: "/assets/products/mepresol.png"
  },
  {
    id: 16,
    name: "Vitamin B Kompleks",
    genericName: "Vitamin B Complex",
    description: "Infus vitamin untuk pemulihan fungsi saraf dan energi.",
    activeIngredients: "Vit B1, B2, B3, B6, Ca Pantothenate",
    indication: "Defisiensi vitamin B, pemulihan",
    dosage: "Sesuai dokter",
    category: "Obat Keras",
    sideEffects: "Reaksi lokal",
    storage: "<30°C",
    price: "Rp 65.000",
    type: "Infus",
    image: "/assets/products/vitamin-b.jpg"
  },
  {
    id: 17,
    name: "Opticyclin",
    genericName: "Tetracycline 1%",
    description: "Salep mata antibiotik.",
    activeIngredients: "Tetracycline 1%",
    indication: "Infeksi mata bakteri",
    dosage: "Oleskan 2–3x/hari",
    category: "Obat Keras",
    sideEffects: "Perih, iritasi",
    storage: "<25°C",
    price: "Rp 20.000",
    type: "Salep",
    image: "/assets/products/opticyclin.png"
  },
  {
    id: 18,
    name: "Vitaone",
    genericName: "Thiamine 5 mg",
    description: "Tablet vitamin B1.",
    activeIngredients: "Thiamine HCl 5 mg",
    indication: "Kekurangan vit B1",
    dosage: "1–2 tablet/hari",
    category: "Suplemen",
    sideEffects: "Sangat jarang",
    storage: "<30°C",
    price: "Rp 88.250",
    type: "Tablet",
    image: "/assets/products/vitaone.jpg"
  },
  {
    id: 19,
    name: "Dobutamine HCl",
    genericName: "250 mg/500 mL",
    description: "Obat inotropik kuat untuk gagal jantung akut.",
    activeIngredients: "Dobutamine 250 mg",
    indication: "Gagal jantung akut",
    dosage: "2–20 mcg/kgBB/menit",
    category: "Obat Keras",
    sideEffects: "Takikardi, aritmia",
    storage: "<30°C",
    price: "Rp 45.000",
    type: "Infus",
    image: "/assets/products/dobutamin hcl.jpg"
  },
  {
    id: 20,
    name: "Cetricare",
    genericName: "Cetirizine 1%",
    description: "Bedak tabur steril antihistamin.",
    activeIngredients: "Cetirizine 1%",
    indication: "Gatal alergi, ruam",
    dosage: "Taburkan tipis 2–3x/hari",
    category: "Obat Bebas Terbatas",
    sideEffects: "Iritasi ringan",
    storage: "<30°C",
    price: "Rp 30.000",
    type: "Bedak",
    image: "/assets/products/cetricare.png"
  }
];

export const HISTORY: HistoryEvent[] = [
  { year: '2017', description: 'Nashira Farma berdiri sebagai inisiatif apoteker dan ilmuwan muda.' },
  { year: '2017–2019', description: 'Membangun fondasi produksi sediaan non-steril non-β-laktam (tablet & kapsul generik).' },
  { year: '2019–2020', description: 'Memperluas lini produksi ke antibiotik β-laktam non-steril.' },
  { year: '2021–2022', description: 'Memasuki produksi sediaan steril non-β-laktam (injeksi, infus, tetes mata).' },
  { year: '2023', description: 'Membangun fasilitas β-laktam steril dan Nashira Research Center.' },
  { year: '2025', description: 'Menjadi perusahaan farmasi terkemuka dengan portofolio lengkap dan merambah pasar global.' },
];

export const FULL_HISTORY = [
  "Nashira Farma berdiri pada 2017 sebagai inisiatif para apoteker, ilmuwan, dan pengusaha muda yang ingin memperkuat kemandirian obat nasional. Nama “Nashira”, yang berarti pembawa kabar gembira sekaligus nama bintang terang, dipilih sebagai simbol harapan untuk menghadirkan solusi kesehatan modern bagi Indonesia dan dunia.",
  "Pada periode awal (2017–2019), perusahaan membangun fondasi produksi melalui sediaan non-steril non-β-laktam seperti tablet dan kapsul generik. Komitmen kuat terhadap GMP serta sistem QA/QC ketat membuat Nashira Farma cepat mendapat kepercayaan tenaga kesehatan.",
  "Tahun 2019–2020, Nashira Farma memperluas lini produksi dengan fasilitas khusus antibiotik β-laktam non-steril, menghadirkan produk seperti amoksisilin dan sefadroksil sebagai dukungan nyata terhadap kemandirian antibiotik nasional.",
  "Kesuksesan ini mengantarkan perusahaan memasuki produksi sediaan steril non-β-laktam pada 2021–2022, mencakup injeksi, infus, dan tetes mata—sebuah lompatan besar yang membutuhkan teknologi tinggi dan fasilitas berstandar internasional.",
  "Pada 2023, Nashira Farma kembali berkembang dengan membangun fasilitas β-laktam steril untuk serbuk injeksi antibiotik. Setahun kemudian, lahirlah Nashira Research Center, yang berfokus pada pengembangan antibiotik generasi baru, bioteknologi farmasi, dan fitofarmaka berbasis bahan alam Indonesia.",
  "Memasuki 2025, Nashira Farma telah menjadi salah satu perusahaan farmasi yang diperhitungkan di Indonesia. Portofolionya mencakup obat generik, produk bermerek, sediaan steril dan non-steril, antibiotik β-laktam, serta produk herbal terstandarisasi. Melalui kemitraan dengan berbagai institusi dan komitmen sosial, Nashira Farma terus mengusung filosofi “Science, Innovation, and Humanity” sebagai fondasi perannya dalam memajukan kesehatan nasional dan merambah pasar global."
];

// Pastikan file gambar disimpan di folder public/assets/csr/
export const CSR_ACTIVITIES: CSREvent[] = [
  {
    id: 1,
    title: 'Nashira Farma Green Movement',
    image: '/assets/pedulilingkungan.jpg',
    description: 'Sebagai perusahaan yang berorientasi pada kesehatan dan keberlanjutan, Nashira Farma menginisiasi program penanaman pohon bersama masyarakat dan pelajar di berbagai daerah.',
    goals: [
      'Mengurangi dampak pemanasan global',
      'Menambah ruang hijau dan meningkatkan kualitas udara',
      'Menumbuhkan budaya peduli lingkungan sejak dini'
    ],
    events: [
      'Edukasi singkat mengenai pentingnya penghijauan',
      'Pembagian bibit pohon produktif dan pohon peneduh',
      'Penanaman pohon secara bersama-sama',
      'Monitoring pertumbuhan pohon oleh relawan lingkungan'
    ],
    benefits: ['Area sekitar menjadi lebih hijau dan sejuk', 'Meningkatkan kesadaran masyarakat', 'Terwujudnya program lingkungan berkelanjutan']
  },
  {
    id: 2,
    title: 'Nashira Farma Blood Care',
    image: '/assets/donordarah.jpg',
    description: 'Program donor darah ini merupakan bentuk kontribusi Nashira Farma dalam membantu ketersediaan stok darah nasional, bekerja sama dengan PMI setempat.',
    goals: [
      'Mendukung pemenuhan kebutuhan darah bagi pasien',
      'Mengedukasi masyarakat tentang pentingnya donor darah',
      'Meningkatkan kepedulian sosial dan solidaritas'
    ],
    events: [
      'Registrasi peserta donor',
      'Pemeriksaan kesehatan (Tensi, Hb)',
      'Proses pengambilan darah oleh PMI',
      'Pemberian konsumsi dan suvenir'
    ],
    benefits: ['Membantu pasien yang membutuhkan transfusi', 'Meningkatkan kesehatan pendonor', 'Memperkuat peran sosial perusahaan']
  },
  {
    id: 3,
    title: 'Beasiswa Nashira Farma',
    image: '/assets/pedulipendidikan.jpg',
    description: 'Program pemberian bantuan beasiswa kepada siswa SMA berprestasi maupun kurang mampu sebagai bentuk dukungan terhadap kualitas pendidikan Indonesia.',
    goals: [
      'Membantu memenuhi kebutuhan biaya pendidikan',
      'Mendorong peningkatan prestasi dan semangat belajar',
      'Memberikan kesempatan pendidikan yang lebih merata'
    ],
    events: [
      'Seleksi administrasi dan wawancara',
      'Pengumuman penerima beasiswa',
      'Penyerahan sertifikat dan bantuan biaya',
      'Dokumentasi di sekolah mitra'
    ],
    benefits: ['Siswa dapat lanjut sekolah tanpa hambatan ekonomi', 'Hubungan baik dengan sekolah', 'Membangun generasi muda berkualitas']
  }
];

export const TEAM: TeamMember[] = [
  { role: 'CEO', name: 'Apt. Najma Annuria, S.Farm., M.Si.,Ph.D.' },
  { role: 'Direktur Utama', name: 'Apt. Shakira Indah Permata, M.Farm., Ph.D.' },
  { role: 'Sekretaris Perusahaan', name: 'Apt. Putu Sri Katina, M.Farm., Ph.D' }
];

export const ORG_CHART_URL = "/assets/org.png";

// Pastikan file logo disimpan sebagai public/assets/logo.png
export const LOGO_URL = "/assets/logo.jpg";

export const CONTACT_INFO = {
  address: "Jl. Raya Industri No. 28, Desa Sidogiri, Kec. Kraton, Kab. Pasuruan, Jawa Timur 67151",
  phone: "+62 858-74080420",
  email: "Nashirafarma@gmail.com",
  mapsLink: "https://www.google.com/maps/search/?api=1&query=PT+Nashira+Farma,+Kraton,+Pasuruan,+Jawa+Timur"
};