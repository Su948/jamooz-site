export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-24">
      <h1 className="text-4xl font-bold tracking-tighter text-black mb-12">About Jamooz</h1>
      <section className="mb-20">
        <h2 className="text-2xl font-bold mb-6 tracking-tight text-black">Certified Excellence</h2>
        <p className="text-gray-500 leading-relaxed mb-10 font-light">
          Founded on the principle of effective recovery, Jamooz has grown into a leading manufacturer of professional massage equipment. 
          Our factory is ISO 9001 certified, and all products undergo rigorous testing to meet international safety standards.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {['CE Certified', 'FCC Compliant', 'RoHS Tested'].map((cert) => (
            <div key={cert} className="p-8 border border-gray-100 flex flex-col items-center justify-center text-center">
              <div className="w-12 h-12 bg-black text-white flex items-center justify-center mb-4 rounded-full font-bold">✓</div>
              <p className="font-bold text-black">{cert}</p>
            </div>
          ))}
        </div>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-6 tracking-tight text-black">Our Mission</h2>
        <p className="text-gray-500 leading-relaxed font-light">
          To provide B2B clients with the most reliable, innovative, and user-friendly massage devices that enhance wellness and recovery for end-users worldwide.
        </p>
      </section>
    </div>
  );
}
