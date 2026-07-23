import Link from 'next/link';

export default function ProductsPage() {
  const products = [
    {
      id: 'JMZ-001',
      name: 'Advanced Neck & Shoulder Massager',
      category: 'Neck Care',
      moq: '500 Units',
      power: '24W / 12V',
      features: ['Heat Therapy', 'Bidirectional Rotation', '4D Massage Nodes'],
      certs: 'CE / FCC / RoHS'
    },
    {
      id: 'JMZ-801',
      name: 'Deep Tissue Massage Pillow',
      category: 'Lower Back',
      moq: '1000 Units',
      power: '30W',
      features: ['Ergonomic Shape', 'Adjustable Speed', 'Memory Foam'],
      certs: 'CE / RoHS'
    },
    {
      id: 'JMZ-305',
      name: 'Portable Percussion Massage Gun',
      category: 'Sport Recovery',
      moq: '200 Units',
      power: 'Brushless 24V',
      features: ['6 Interchangeable Heads', 'Silent Tech', '8-Hour Battery'],
      certs: 'CE / FCC'
    },
    {
      id: 'JMZ-702',
      name: 'Smart Heat Therapy Pad',
      category: 'Heat Therapy',
      moq: '2000 Units',
      power: '100W / 220V',
      features: ['Precise Temp Control', 'Auto Shut-off', 'Machine Washable'],
      certs: 'RoHS / REACH'
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
              <div className="md:w-1/3 aspect-square bg-gray-50 flex flex-col items-center justify-center p-4">
                <span className="text-[10px] font-mono text-gray-300 mb-2">{p.id}</span>
                <div className="w-16 h-1 border-b border-brand-green/10 mb-4"></div>
                <span className="text-center text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-tight">{p.name}</span>
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
