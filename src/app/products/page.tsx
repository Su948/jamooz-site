'use client';

import Link from 'next/link';

export default function ProductsPage() {
  const products = [
    {
      id: 'JMZ-001',
      name: 'Kneading Vibration Massage Pillow',
      category: 'Massage Pillow',
      moq: '300 Units',
      power: '24W',
      features: ['Kneading & Vibration', 'Ergonomic Support', 'Home & Car Use'],
      certs: 'CE',
      image: '/assets/refined/JMZ-001.jpg'
    },
    {
      id: 'JMZ-801',
      name: 'Cloud Neck Comfort Massager',
      category: 'Neck Care',
      moq: '300 Units',
      power: '5V (USB)',
      features: ['Cloud-soft Foam', 'Acupressure Nodes', 'Adjustable Fit'],
      certs: 'CE / FCC',
      image: '/assets/refined/JMZ-801.jpg'
    },
    {
      id: 'JMZ-H210',
      name: 'Heating Therapy Massage Cushion',
      category: 'Heat Therapy',
      moq: '500 Units',
      power: '100W',
      features: ['Infrared Heating', 'Multi-zone Massage', 'Remote Control'],
      certs: 'RoHS',
      image: '/assets/refined/JMZ-H210.jpg'
    },
    {
      id: 'JMZ-G120',
      name: 'Gift-ready Massage Pillow Set',
      category: 'Gift Set',
      moq: '500 Units',
      power: '24W',
      features: ['Premium Packaging', 'Complete Recovery Kit', 'Perfect for Gifting'],
      certs: 'CE',
      image: '/assets/refined/JMZ-G120.jpg'
    },
    {
      id: 'CSPL002',
      name: 'Pinch-kneading Massage Pillow Plus',
      category: 'Massage Pillow',
      moq: '300 Units',
      power: '30W',
      features: ['Upgraded Pinching Tech', 'Deep Tissue Relief', 'Silent Operation'],
      certs: 'CE / RoHS',
      image: '/assets/refined/CSPL002.jpg'
    },
    {
      id: 'JMZ-N330',
      name: 'Neck & Shoulder Relax Massager',
      category: 'Neck Care',
      moq: '300 Units',
      power: '24W',
      features: ['Shoulder Draping Design', 'Variable Intensity', 'Heat Function'],
      certs: 'CE',
      image: '/assets/refined/JMZ-N330.jpg'
    }
  ];

  return (
    <div className="bg-background min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-20">
          <h1 className="text-xs font-semibold text-brand-green/60 uppercase tracking-[0.3em] mb-4">Professional Catalog</h1>
          <p className="text-5xl font-bold tracking-tighter text-brand-green">PRODUCT COLLECTION</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {products.map((p) => (
            <div key={p.id} className="group bg-white/50 border border-brand-green/5 p-10 flex flex-col md:flex-row gap-10 hover:bg-white transition-all shadow-sm hover:shadow-xl">
              {/* Product Visual */}
              <div className="md:w-1/3 aspect-square bg-gray-50 flex flex-col items-center justify-center overflow-hidden relative">
                <img 
                  src={p.image} 
                  alt={`${p.name} - Professional B2B Massage Device ${p.id}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    // Fallback to text if image is missing
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.parentElement!.classList.add('flex', 'flex-col', 'items-center', 'justify-center');
                    const span = document.createElement('span');
                    span.className = 'text-[10px] font-mono text-gray-300';
                    span.innerText = p.id;
                    target.parentElement!.appendChild(span);
                  }}
                />
              </div>
              
              {/* Product Specs */}
              <div className="flex-grow">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <span className="text-[10px] font-bold text-brand-green/40 uppercase tracking-widest">{p.category}</span>
                    <h2 className="text-2xl font-bold text-brand-green tracking-tight mt-1">{p.name}</h2>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-y-4 gap-x-8 mb-8">
                  <div>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">MOQ</p>
                    <p className="text-sm font-medium text-brand-green">{p.moq}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Rated Power</p>
                    <p className="text-sm font-medium text-brand-green">{p.power}</p>
                  </div>
                  <div className="col-span-2">
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Key Features</p>
                    <div className="flex flex-wrap gap-2">
                      {p.features.map(f => (
                        <span key={f} className="text-[9px] px-2 py-0.5 border border-brand-green/20 text-brand-green/60 rounded-full">{f}</span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-brand-green/5">
                  <span className="text-[10px] font-mono font-bold text-brand-green/30">{p.certs}</span>
                  <Link href="/rfq" className="text-sm font-bold text-brand-green border-b-2 border-brand-green pb-0.5 hover:opacity-60 transition-all">
                    Start RFQ
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
