export default function CustomPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-24">
      <h1 className="text-4xl font-bold tracking-tighter text-black mb-12">Customization (OEM/ODM)</h1>
      <section className="mb-20">
        <h2 className="text-2xl font-bold mb-6 tracking-tight text-black">Precision Manufacturing</h2>
        <p className="text-gray-500 leading-relaxed mb-6 font-light">
          Jamooz offers comprehensive OEM/ODM services for our global B2B partners. 
          From initial design concepts to final production, our engineering team ensures that your brand's unique identity is reflected in every product.
        </p>
        <ul className="space-y-4 text-gray-600 font-light list-disc list-inside">
          <li>Custom Shell Colors and Textures</li>
          <li>Brand Logo Silk-screening & Engraving</li>
          <li>Customized Packaging & Manuals</li>
          <li>Internal Component Specification Adjustments</li>
        </ul>
      </section>
      <div className="p-12 bg-gray-50 border border-gray-100 text-center">
        <h3 className="text-xl font-bold mb-4 tracking-tight">Have a custom project?</h3>
        <p className="text-gray-500 mb-8 font-light">Speak with our technical consultants to get a feasibility study and quote.</p>
        <button className="bg-black text-white px-12 py-4 font-bold tracking-widest text-xs uppercase hover:bg-gray-800 transition-all">
          Start Design Consultation
        </button>
      </div>
    </div>
  );
}
