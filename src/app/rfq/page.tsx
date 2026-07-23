export default function RFQPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-24">
      <h1 className="text-4xl font-bold tracking-tighter text-black mb-6 text-center">Request a Quote</h1>
      <p className="text-gray-500 text-center mb-16 font-light">
        Submit your detailed requirements and our B2B sales representative will provide a formal quote and sample options.
      </p>
      <form className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col">
            <label className="text-xs font-bold uppercase tracking-widest mb-2">Company Name</label>
            <input type="text" className="px-4 py-3 bg-gray-50 border-none outline-none focus:ring-1 focus:ring-black" />
          </div>
          <div className="flex flex-col">
            <label className="text-xs font-bold uppercase tracking-widest mb-2">Contact Person</label>
            <input type="text" className="px-4 py-3 bg-gray-50 border-none outline-none focus:ring-1 focus:ring-black" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col">
            <label className="text-xs font-bold uppercase tracking-widest mb-2">Business Email</label>
            <input type="email" className="px-4 py-3 bg-gray-50 border-none outline-none focus:ring-1 focus:ring-black" />
          </div>
          <div className="flex flex-col">
            <label className="text-xs font-bold uppercase tracking-widest mb-2">Target Product</label>
            <select className="px-4 py-3 bg-gray-50 border-none outline-none focus:ring-1 focus:ring-black appearance-none">
              <option>Massage Pillow</option>
              <option>Neck Massager</option>
              <option>Heat Pad</option>
              <option>Gift Set</option>
              <option>Other / Custom</option>
            </select>
          </div>
        </div>
        <div className="flex flex-col">
          <label className="text-xs font-bold uppercase tracking-widest mb-2">Order Quantity (Est.)</label>
          <input type="number" className="px-4 py-3 bg-gray-50 border-none outline-none focus:ring-1 focus:ring-black" />
        </div>
        <div className="flex flex-col">
          <label className="text-xs font-bold uppercase tracking-widest mb-2">Specific Requirements</label>
          <textarea rows={6} className="px-4 py-3 bg-gray-50 border-none outline-none focus:ring-1 focus:ring-black"></textarea>
        </div>
        <button type="submit" className="w-full bg-black text-white py-5 font-bold tracking-widest text-xs uppercase hover:bg-gray-800 transition-all">
          Submit RFQ
        </button>
      </form>
    </div>
  );
}
