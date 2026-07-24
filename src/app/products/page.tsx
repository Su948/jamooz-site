import Link from 'next/link';

type Product = {
  id: string;
  name: string;
  category: string;
  moq: string;
  price: string;
  image: string;
  features: string[];
};

const products: Product[] = [
  { 
    id: 'JAMOOZ PRO X7', 
    name: 'Percussion Massage Gun', 
    category: 'Recovery & Performance', 
    moq: '100 pcs', 
    price: '$24.90 - $32.50', 
    image: '/images/wellness/pro_x7.png',
    features: ['High-torque motor', '6 Attachments', 'Ergonomic grip']
  },
  { 
    id: 'JAMOOZ DUO V2', 
    name: 'Dual-head Massager', 
    category: 'Deep Tissue Therapy', 
    moq: '200 pcs', 
    price: '$18.80 - $25.60', 
    image: '/images/wellness/duo_v2.png',
    features: ['Dual-pulse tech', 'Variable speed', 'Heat support']
  },
  { 
    id: 'JAMOOZ SCALP S1', 
    name: 'Scalp Care Massager', 
    category: 'Sleep & Wellness', 
    moq: '500 pcs', 
    price: '$17.90 - $21.90', 
    image: '/images/wellness/scalp_s1.png',
    features: ['Red light therapy', 'Waterproof IPX7', '72 Nodes']
  },
  { 
    id: 'JAMOOZ NECK M5', 
    name: 'Neck & Shoulder Massager', 
    category: 'Tension Relief', 
    moq: '300 pcs', 
    price: '$20.90 - $24.90', 
    image: '/images/wellness/neck_m5.png',
    features: ['4D Kneading', 'Carbon fiber heat', 'Portable design']
  },
];

const categories = [
  ['Global Export Ready', 'Best Sellers'],
  ['B2B Catalog', '4 Core Series'],
  ['OEM/ODM Support', 'Custom Branding'],
];

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-background pb-24">
      {/* HEADER SECTION */}
      <section className="border-b border-border-warm bg-cream-soft">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.8fr_1.2fr] items-center">
            <div>
              <p className="mono-label text-xs font-bold text-navy uppercase tracking-widest">Product Catalog</p>
              <h1 className="serif-display mt-6 text-[58px] font-semibold leading-none text-foreground md:text-[78px]">Wellness Tech</h1>
              <p className="mt-8 max-w-md text-lg leading-8 text-muted">A curated range of high-performance wellness technologies designed for retail, medical, and corporate gift channels.</p>
              <Link href="/rfq" className="mt-10 btn-primary">Request Volume Pricing</Link>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {categories.map(([label, value]) => (
                <div key={value} className="premium-card p-8 border-none bg-white/50 backdrop-blur-sm shadow-sm">
                  <p className="mono-label text-[10px] text-muted font-bold uppercase tracking-widest">{label}</p>
                  <p className="serif-display mt-4 text-3xl font-semibold text-navy">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCT GRID */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          {products.map((product) => (
            <article key={product.id} className="premium-card grid grid-cols-1 overflow-hidden transition duration-300 hover:shadow-2xl lg:grid-cols-2">
              <div className="bg-white p-12 flex items-center justify-center">
                <img src={product.image} alt={product.name} className="h-full w-full object-contain transition duration-500 hover:scale-110" />
              </div>
              <div className="p-10 flex flex-col">
                <div className="flex-grow">
                  <p className="mono-label text-[10px] font-bold text-muted uppercase tracking-widest">{product.category}</p>
                  <h2 className="mt-4 text-2xl font-bold text-navy leading-tight">{product.id}</h2>
                  <p className="mt-1 text-lg text-muted">{product.name}</p>
                  
                  <div className="mt-8 space-y-4">
                    {product.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-3 text-sm font-medium text-navy">
                        <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-10 pt-8 border-t border-border-warm">
                    <div className="flex items-baseline justify-between">
                      <p className="text-sm text-muted">MOQ: <span className="font-bold text-navy">{product.moq}</span></p>
                      <p className="text-xl font-bold text-navy">{product.price}</p>
                    </div>
                  </div>
                </div>
                
                <Link href="/rfq" className="mt-8 w-full btn-secondary text-center">
                  Inquire Now
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* OEM SECTION */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="premium-card bg-surface-dark p-12 md:p-16 lg:p-20 text-white">
          <div className="max-w-3xl">
            <p className="mono-label text-xs font-bold text-accent uppercase tracking-widest">Tailored for your brand</p>
            <h2 className="serif-display mt-6 text-5xl font-semibold leading-tight">Comprehensive OEM/ODM Solutions</h2>
            <p className="mt-8 text-lg text-white/60 leading-8">Whether you need custom color matching (Pantone), laser-engraved logos, or high-end gift box development, our engineering team is ready to bring your brand vision to life.</p>
            <div className="mt-12 flex flex-wrap gap-6">
              {['Logo Embossing', 'Laser Engraving', 'Custom Color Box', 'Sample in 7 Days', 'CE / RoHS Reports'].map((item) => (
                <div key={item} className="flex items-center gap-3 text-sm font-semibold text-white/90">
                  <span className="h-2 w-2 rounded-full bg-accent" />
                  {item}
                </div>
              ))}
            </div>
            <Link href="/rfq" className="mt-12 btn-primary border-none shadow-none bg-accent hover:bg-accent-hover text-white">Start Custom Project</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
