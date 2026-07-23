import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-bold tracking-tighter text-black">
              JAMOOZ
            </Link>
          </div>
          <div className="hidden md:ml-6 md:flex md:space-x-12">
            <Link href="/products" className="text-sm font-medium text-gray-600 hover:text-black transition-colors">
              Products
            </Link>
            <Link href="/custom" className="text-sm font-medium text-gray-600 hover:text-black transition-colors">
              Customization
            </Link>
            <Link href="/about" className="text-sm font-medium text-gray-600 hover:text-black transition-colors">
              About Us
            </Link>
            <Link href="/rfq" className="inline-flex items-center px-6 py-2 border border-black text-sm font-medium text-white bg-black hover:bg-gray-800 transition-all">
              Request Quote
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
