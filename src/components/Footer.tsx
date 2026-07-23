import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="text-xl font-bold tracking-tighter text-black">
              JAMOOZ
            </Link>
            <p className="mt-4 text-sm text-gray-500 max-w-xs leading-relaxed">
              Leading manufacturer of professional massage equipment. Dedicated to providing high-quality recovery solutions for B2B partners worldwide.
            </p>
          </div>
          <div>
            <h3 className="text-xs font-semibold text-black uppercase tracking-widest">Sitemap</h3>
            <ul className="mt-6 space-y-4">
              <li><Link href="/products" className="text-sm text-gray-500 hover:text-black">Products</Link></li>
              <li><Link href="/custom" className="text-sm text-gray-500 hover:text-black">Customization (OEM/ODM)</Link></li>
              <li><Link href="/about" className="text-sm text-gray-500 hover:text-black">About Certifications</Link></li>
              <li><Link href="/rfq" className="text-sm text-gray-500 hover:text-black">RFQ / Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xs font-semibold text-black uppercase tracking-widest">Contact</h3>
            <ul className="mt-6 space-y-4 text-sm text-gray-500">
              <li>Email: info@jamooz.com</li>
              <li>Phone: +86 123 4567 890</li>
              <li>Location: Shenzhen, China</li>
            </ul>
          </div>
        </div>
        <div className="mt-20 pt-8 border-t border-gray-50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-400">
            &copy; {new Date().getFullYear()} Jamooz Massage Equipment. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <span className="text-xs text-gray-400">CE / FCC / RoHS Certified</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
