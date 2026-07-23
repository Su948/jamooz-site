import Link from 'next/link';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center bg-gray-50 overflow-hidden">
        <div className="absolute inset-0 z-0 flex items-center justify-center opacity-10 pointer-events-none">
          <div className="text-[20rem] font-black tracking-tighter text-black">JAMOOZ</div>
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-black mb-6">
            REDESIGNING RECOVERY.
          </h1>
          <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto mb-10 font-light">
            Professional B2B massage equipment solutions for global health and wellness brands. 
            OEM/ODM excellence in every detail.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/products" className="bg-black text-white px-10 py-4 font-medium hover:bg-gray-800 transition-all">
              Explore Products
            </Link>
            <Link href="/rfq" className="border border-black text-black px-10 py-4 font-medium hover:bg-black hover:text-white transition-all">
              Request a Sample
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-[0.2em] mb-3">Our Expertise</h2>
              <p className="text-3xl font-bold text-black tracking-tight">Core Product Categories</p>
            </div>
            <Link href="/products" className="text-sm font-semibold border-b border-black pb-1 hover:text-gray-500 hover:border-gray-500 transition-all">
              View All
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'Massage Pillows', desc: 'Ergonomic support for home and office.' },
              { name: 'Neck Massagers', desc: 'Precision relief for neck and shoulders.' },
              { name: 'Heat Pads', desc: 'Advanced thermal therapy solutions.' },
              { name: 'Gift Sets', desc: 'Premium wellness packages for corporate.' }
            ].map((cat) => (
              <div key={cat.name} className="group cursor-pointer">
                <div className="aspect-[3/4] bg-gray-50 mb-6 flex items-center justify-center transition-all group-hover:bg-gray-100">
                  <span className="text-gray-300 font-bold uppercase tracking-widest group-hover:scale-110 transition-transform">{cat.name}</span>
                </div>
                <h3 className="text-lg font-bold text-black mb-2 tracking-tight">{cat.name}</h3>
                <p className="text-sm text-gray-500 font-light">{cat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick RFQ Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-black mb-6 tracking-tight">Start Your Order</h2>
          <p className="text-gray-500 mb-12 font-light">
            Interested in our products or need a custom manufacturing solution? 
            Send us a message and our B2B team will get back to you within 24 hours.
          </p>
          <div className="bg-white p-8 border border-gray-100 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input type="text" placeholder="Your Name" className="w-full px-4 py-3 bg-gray-50 border-none text-sm focus:ring-1 focus:ring-black outline-none" />
              <input type="email" placeholder="Business Email" className="w-full px-4 py-3 bg-gray-50 border-none text-sm focus:ring-1 focus:ring-black outline-none" />
            </div>
            <textarea placeholder="Tell us about your requirements..." rows={4} className="w-full px-4 py-3 bg-gray-50 border-none text-sm mb-4 focus:ring-1 focus:ring-black outline-none"></textarea>
            <button className="w-full bg-black text-white py-4 font-bold tracking-widest text-xs uppercase hover:bg-gray-800 transition-all">
              Send Inquiry
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
