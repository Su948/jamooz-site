import Link from 'next/link';

type Product = {
  id: string;
  name: string;
  finish: string;
  moq: string;
  price: string;
  colorA: string;
  colorB: string;
  light: string;
};

const products: Product[] = [
  { id: 'JMZ-R007-A', name: 'Scalp Massager', finish: 'Pearl Cream', moq: '500 pcs', price: '$18.90 - $22.90', colorA: '#f7f0e3', colorB: '#d8cec0', light: '#f26322' },
  { id: 'JMZ-R007-B', name: 'Scalp Massager', finish: 'Matte Black', moq: '500 pcs', price: '$19.90 - $23.90', colorA: '#161719', colorB: '#3c3f42', light: '#f2442e' },
  { id: 'JMZ-R007-C', name: 'Scalp Massager', finish: 'Warm Ivory', moq: '500 pcs', price: '$17.90 - $21.90', colorA: '#fbf7ef', colorB: '#ddd5cb', light: '#f26322' },
  { id: 'JMZ-R007-D', name: 'Scalp Massager', finish: 'Lavender Grey', moq: '500 pcs', price: '$20.90 - $24.90', colorA: '#d8d0dc', colorB: '#a99eb3', light: '#9e6bc1' },
];

const categories = [
  ['Trusted by global brands', 'Best Sellers'],
  ['Head & Scalp Massagers', 'JMZ-R007 Series'],
  ['OEM/ODM ready', 'Color, logo, packaging'],
];

function ProductVisual({ product }: { product: Product }) {
  return (
    <div className="product-visual h-[292px]" style={{ '--product-a': product.colorA, '--product-b': product.colorB, '--product-light': product.light } as React.CSSProperties}>
      <span className="absolute left-4 top-4 rounded bg-navy px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white">Best seller</span>
      <div className="product-handle" />
      <div className="product-shell" />
      <div className="product-band" />
      <div className="product-nodes">
        {Array.from({ length: 7 }).map((_, index) => <span key={index} />)}
      </div>
    </div>
  );
}

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-background pb-24">
      <section className="border-b border-border-warm bg-cream-soft">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="mono-label text-xs font-bold text-navy">Trusted by global brands</p>
              <h1 className="serif-display mt-4 text-[58px] font-semibold leading-none text-foreground md:text-[78px]">Best Sellers</h1>
              <p className="mt-6 max-w-md leading-7 text-muted">High-performance wellness technologies backed by innovation, quality, and scalable production.</p>
              <Link href="/rfq" className="mt-8 inline-flex text-sm font-bold text-navy hover:text-accent">Request volume pricing →</Link>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {categories.map(([label, value]) => (
                <div key={value} className="premium-card p-6">
                  <p className="mono-label text-[10px] text-muted">{label}</p>
                  <p className="serif-display mt-3 text-3xl font-semibold text-navy">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8" data-component="b2b-product-card-grid">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
          {products.map((product) => (
            <article key={product.id} className="premium-card overflow-hidden transition duration-200 hover:-translate-y-1 hover:shadow-2xl">
              <ProductVisual product={product} />
              <div className="p-5">
                <p className="text-lg font-bold text-navy">{product.id} {product.name}</p>
                <p className="mt-2 text-sm text-muted">MOQ {product.moq} · {product.finish}</p>
                <p className="mt-4 text-xl font-extrabold tracking-tight text-navy">{product.price} <span className="text-sm font-semibold text-muted">/ pcs</span></p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {['CE', 'FCC', 'SGS'].map((cert) => (
                    <span key={cert} className="rounded border border-border-warm bg-white px-3 py-1 text-xs font-bold text-navy">{cert}</span>
                  ))}
                </div>

                <div className="mt-5 grid grid-cols-2 gap-2 text-[11px] text-navy">
                  {['650nm Red Light', '2000mAh Battery', '200M Negative Ions', 'IPX7 Waterproof'].map((spec) => (
                    <span key={spec} className="rounded-md border border-border-warm bg-cream-soft px-2.5 py-2">✧ {spec}</span>
                  ))}
                </div>

                <Link href="/rfq" className="mt-5 flex w-full items-center justify-center rounded-md bg-accent px-4 py-3 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-accent-hover">
                  Request Quote
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="premium-card grid grid-cols-1 items-center gap-8 p-8 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <p className="mono-label text-xs font-bold text-muted">OEM/ODM manufacturing</p>
            <h2 className="serif-display mt-3 text-5xl font-semibold leading-none text-foreground">Customize your scalp care line</h2>
            <p className="mt-5 leading-7 text-muted">Select shell colors, massage node materials, logo methods, and packaging programs for differentiated retail or clinical wellness brands.</p>
          </div>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
            {['Navy shell', 'Laser logo', 'Premium gift box', 'MOQ from 500 pcs'].map((item) => (
              <div key={item} className="rounded-lg border border-border-warm bg-cream-soft p-5 text-sm font-bold text-navy">{item}</div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
