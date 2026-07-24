'use client';

import { useState } from 'react';

export default function RFQPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: 'Bulk Order (Stock Models)',
    quantity: '',
    requirements: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        projectType: 'Bulk Order (Stock Models)',
        quantity: '',
        requirements: ''
      });
    }, 1500);
  };

  return (
    <div className="bg-background min-h-screen pt-40 pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-20">
        
        {/* Left Column: Info */}
        <div className="lg:sticky lg:top-40 h-fit">
          <p className="mono-label text-xs font-bold text-navy uppercase tracking-widest">Connect with us</p>
          <h1 className="serif-display mt-6 text-[54px] font-semibold leading-none text-foreground md:text-[64px]">Request a Quote</h1>
          <p className="mt-8 text-lg text-muted leading-relaxed">
            Partner with our manufacturing experts. Whether it's a bulk order or a custom project, we provide precise technical support and competitive pricing for global wellness brands.
          </p>
          
          <div className="mt-16 space-y-12">
            <div>
              <h4 className="mono-label text-[10px] font-bold text-muted uppercase tracking-[0.2em] mb-4">Response Time</h4>
              <p className="text-xl font-bold text-navy tracking-tight">Guaranteed 24-hour turnaround on all formal inquiries.</p>
            </div>
            <div>
              <h4 className="mono-label text-[10px] font-bold text-muted uppercase tracking-[0.2em] mb-4">Sampling Policy</h4>
              <p className="text-muted leading-relaxed">Fast prototyping and sample delivery via DHL/FedEx available upon request for qualified buyers.</p>
            </div>
            <div className="pt-10 border-t border-border-warm flex gap-8">
              {['CE', 'FCC', 'RoHS', 'ISO 9001'].map(cert => (
                <span key={cert} className="text-xs font-bold text-muted uppercase tracking-widest">{cert}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Form */}
        <div className="premium-card bg-white p-10 md:p-16 lg:p-20 shadow-2xl shadow-black/5">
          {status === 'success' ? (
            <div className="h-full flex flex-col items-center justify-center py-20 text-center">
              <div className="w-16 h-16 bg-navy text-white rounded-full flex items-center justify-center mb-8 text-2xl shadow-xl">✓</div>
              <h2 className="serif-display text-4xl font-semibold text-foreground mb-6">Inquiry Sent Successfully</h2>
              <p className="text-muted max-w-sm mx-auto mb-10 text-lg leading-relaxed">
                Thank you for your interest. Our B2B team will review your requirements and respond within 24 hours.
              </p>
              <button 
                onClick={() => setStatus('idle')}
                className="text-sm font-bold uppercase tracking-widest border-b-2 border-navy pb-1 hover:text-accent hover:border-accent transition-colors"
              >
                Send Another Inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                <div className="relative group">
                  <label className="block mono-label text-[10px] font-bold text-navy uppercase tracking-widest mb-4">Contact Person</label>
                  <input 
                    required
                    type="text" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-transparent border-b border-border-warm py-3 outline-none focus:border-navy transition-colors text-base"
                    placeholder="e.g. John Doe"
                  />
                </div>
                <div className="relative group">
                  <label className="block mono-label text-[10px] font-bold text-navy uppercase tracking-widest mb-4">Professional Email</label>
                  <input 
                    required
                    type="email" 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-transparent border-b border-border-warm py-3 outline-none focus:border-navy transition-colors text-base"
                    placeholder="work@email.com"
                  />
                </div>
                <div className="relative group md:col-span-2">
                  <label className="block mono-label text-[10px] font-bold text-navy uppercase tracking-widest mb-4">Company Name</label>
                  <input 
                    required
                    type="text" 
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                    className="w-full bg-transparent border-b border-border-warm py-3 outline-none focus:border-navy transition-colors text-base"
                    placeholder="e.g. Global Wellness Brands Inc."
                  />
                </div>
                <div className="relative group">
                  <label className="block mono-label text-[10px] font-bold text-navy uppercase tracking-widest mb-4">Project Type</label>
                  <select 
                    value={formData.projectType}
                    onChange={(e) => setFormData({...formData, projectType: e.target.value})}
                    className="w-full bg-transparent border-b border-border-warm py-3 outline-none focus:border-navy transition-colors text-base appearance-none cursor-pointer"
                  >
                    <option>Bulk Order (Stock Models)</option>
                    <option>OEM (Brand Labeling)</option>
                    <option>ODM (Custom Design)</option>
                    <option>Sample Request</option>
                  </select>
                </div>
                <div className="relative group">
                  <label className="block mono-label text-[10px] font-bold text-navy uppercase tracking-widest mb-4">Target Volume</label>
                  <input 
                    type="text" 
                    value={formData.quantity}
                    onChange={(e) => setFormData({...formData, quantity: e.target.value})}
                    className="w-full bg-transparent border-b border-border-warm py-3 outline-none focus:border-navy transition-colors text-base"
                    placeholder="500 - 5000 units"
                  />
                </div>
              </div>

              <div className="relative group">
                <label className="block mono-label text-[10px] font-bold text-navy uppercase tracking-widest mb-4">Detailed Requirements</label>
                <textarea 
                  rows={4} 
                  value={formData.requirements}
                  onChange={(e) => setFormData({...formData, requirements: e.target.value})}
                  className="w-full bg-cream-soft rounded-lg p-6 outline-none focus:ring-1 focus:ring-navy transition-all text-base leading-relaxed"
                  placeholder="Tell us about your brand goals, specific product features, or certification needs..."
                ></textarea>
              </div>

              <div className="pt-4">
                <button 
                  type="submit" 
                  disabled={status === 'loading'}
                  className="w-full btn-primary py-6 text-sm font-bold tracking-[0.3em] uppercase disabled:opacity-50 shadow-xl"
                >
                  {status === 'loading' ? 'Processing...' : 'Submit Inquiry'}
                </button>
                <p className="mt-8 text-center text-[10px] text-muted tracking-wider uppercase">
                  Confidential B2B Submission · Response in 24h
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
