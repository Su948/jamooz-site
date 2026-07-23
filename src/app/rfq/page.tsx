export default function RFQPage() {
  return (
    <div className="bg-background min-h-screen pt-40 pb-32">
      <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-20">
        
        {/* Left Column: Info */}
        <div className="lg:col-span-1">
          <h1 className="text-4xl font-bold tracking-tighter text-brand-green mb-8">INQUIRY PORTAL.</h1>
          <p className="text-gray-600 font-light leading-relaxed mb-12">
            Connect with our manufacturing experts. Whether it's a bulk order or a custom project, we provide precise technical support and competitive pricing.
          </p>
          <div className="space-y-10">
            <div>
              <h4 className="text-[10px] font-bold text-brand-green/40 uppercase tracking-[0.2em] mb-3">Response Time</h4>
              <p className="text-lg font-bold text-brand-green tracking-tight">Guaranteed 24-hour turnaround on all formal inquiries.</p>
            </div>
            <div>
              <h4 className="text-[10px] font-bold text-brand-green/40 uppercase tracking-[0.2em] mb-3">Sampling Policy</h4>
              <p className="text-gray-600 font-light text-sm leading-relaxed">Fast prototyping and sample delivery via DHL/FedEx available upon request.</p>
            </div>
          </div>
        </div>

        {/* Right Column: Form */}
        <div className="lg:col-span-2 bg-white p-12 border border-brand-green/5 shadow-sm">
          <form className="space-y-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
              <div className="relative group">
                <label className="block text-[10px] font-bold text-brand-green uppercase tracking-widest mb-3">Company Name</label>
                <input 
                  type="text" 
                  className="w-full bg-transparent border-b border-gray-200 py-2 outline-none focus:border-brand-green transition-colors text-sm font-light"
                  placeholder="e.g. Wellness Brands Inc."
                />
              </div>
              <div className="relative group">
                <label className="block text-[10px] font-bold text-brand-green uppercase tracking-widest mb-3">Professional Email</label>
                <input 
                  type="email" 
                  className="w-full bg-transparent border-b border-gray-200 py-2 outline-none focus:border-brand-green transition-colors text-sm font-light"
                  placeholder="work@email.com"
                />
              </div>
              <div className="relative group">
                <label className="block text-[10px] font-bold text-brand-green uppercase tracking-widest mb-3">Project Type</label>
                <select className="w-full bg-transparent border-b border-gray-200 py-2 outline-none focus:border-brand-green transition-colors text-sm font-light appearance-none">
                  <option>Bulk Order (Stock Models)</option>
                  <option>OEM (Brand Labeling)</option>
                  <option>ODM (Custom Design)</option>
                  <option>Sample Request</option>
                </select>
              </div>
              <div className="relative group">
                <label className="block text-[10px] font-bold text-brand-green uppercase tracking-widest mb-3">Target Volume</label>
                <input 
                  type="text" 
                  className="w-full bg-transparent border-b border-gray-200 py-2 outline-none focus:border-brand-green transition-colors text-sm font-light"
                  placeholder="500 - 5000 units"
                />
              </div>
            </div>

            <div className="relative group pt-4">
              <label className="block text-[10px] font-bold text-brand-green uppercase tracking-widest mb-3">Detailed Requirements</label>
              <textarea 
                rows={5} 
                className="w-full bg-gray-50 p-6 outline-none focus:ring-1 focus:ring-brand-green transition-all text-sm font-light leading-relaxed"
                placeholder="Tell us about your brand goals, specific product features, or certification needs..."
              ></textarea>
            </div>

            <button type="submit" className="w-full btn-primary py-6 text-xs font-bold tracking-[0.3em] uppercase">
              Submit Request
            </button>
            <p className="text-center text-[9px] text-gray-400 tracking-wider">
              BY SUBMITTING YOU AGREE TO OUR DATA PROTECTION POLICY FOR B2B PARTNERS.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
