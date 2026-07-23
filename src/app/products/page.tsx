export default function ProductsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <h1 className="text-4xl font-bold tracking-tighter text-black mb-12">Product Center</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Placeholder products */}
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="group cursor-pointer">
            <div className="aspect-square bg-gray-50 mb-6 flex items-center justify-center">
              <span className="text-gray-300 font-bold uppercase tracking-widest group-hover:scale-105 transition-transform">Product Model {i}</span>
            </div>
            <h2 className="text-xl font-bold text-black mb-2 tracking-tight">Premium Massage Device JZ-{i}00</h2>
            <p className="text-sm text-gray-400 mb-4 font-light">Available for OEM / ODM Customization</p>
            <button className="text-xs font-bold uppercase tracking-widest border-b border-black pb-1 hover:text-gray-500 hover:border-gray-500 transition-all">
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
