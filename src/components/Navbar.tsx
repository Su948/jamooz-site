import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-brand-green/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-bold tracking-tighter text-brand-green">
              JAMOOZ
            </Link>
          </div>
          <div className="hidden md:ml-6 md:flex md:space-x-12 items-center">
            <Link href="/products" className="text-xs font-bold text-brand-green/60 hover:text-brand-green uppercase tracking-widest transition-colors">
              Products
            </Link>
            <Link href="/custom" className="text-xs font-bold text-brand-green/60 hover:text-brand-green uppercase tracking-widest transition-colors">
              Customization
            </Link>
            <Link href="/about" className="text-xs font-bold text-brand-green/60 hover:text-brand-green uppercase tracking-widest transition-colors">
              About
            </Link>
            <Link href="/rfq" className="bg-brand-green text-white px-8 py-3 text-[10px] font-bold uppercase tracking-[0.2em] hover:opacity-90 transition-all">
              Start RFQ
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
