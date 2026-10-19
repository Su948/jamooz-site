'use client';

const ali = (path: string) => `https:${path}`;
const pct = (value: number, total: number) => `${(value / total) * 100}%`;

const companyProfile = ali('//sc04.alicdn.com/kf/H074a318c1d1a4f568d94181d93a09474F/252717039/H074a318c1d1a4f568d94181d93a09474F.png');
const companyVideo = 'https://play.video.alibaba.com/global/play/6000299682943.mp4?dft=hd';
const reviewBackground = ali('//sc04.alicdn.com/kf/H9d354770c4b14f6ea84599d5cb42df7cw/252717039/H9d354770c4b14f6ea84599d5cb42df7cw.png');
const certificateImage = ali('//sc02.alicdn.com/kf/H99de7b20e65046c896d63f96a166fde27.png');

const reviews = [
  { x: 360, y: 286, w: 362, h: 517, image: ali('//sc04.alicdn.com/kf/H8a20f2689d164b6184b3b9a7541d1075D/252717039/H8a20f2689d164b6184b3b9a7541d1075D.png'), speed: '25s' },
  { x: 780, y: 286, w: 362, h: 707, image: ali('//sc04.alicdn.com/kf/H9f69f1787ffe4ce093b5364efaaaed9dW/252717039/H9f69f1787ffe4ce093b5364efaaaed9dW.png'), speed: '31s' },
  { x: 1198, y: 286, w: 362, h: 517, image: ali('//sc04.alicdn.com/kf/H0afcafb90e0740d6842ae09a714d44dfm/252717039/H0afcafb90e0740d6842ae09a714d44dfm.png'), speed: '27s' },
] as const;

const workScenes = [
  {
    label: 'Electronics production',
    x: 360,
    y: 818,
    width: 788,
    height: 531,
  },
  {
    label: 'Functional testing',
    x: 1181,
    y: 818,
    width: 378,
    height: 247,
  },
  {
    label: 'Automated production equipment',
    x: 1181,
    y: 1100,
    width: 378,
    height: 249,
  },
  {
    label: 'R&D review',
    x: 360,
    y: 1385,
    width: 375,
    height: 323,
  },
  {
    label: 'Product design coordination',
    x: 773,
    y: 1385,
    width: 375,
    height: 323,
  },
  {
    label: 'Electronics assembly',
    x: 1184,
    y: 1385,
    width: 375,
    height: 323,
  },
  {
    label: 'Assembly activity',
    x: 360,
    y: 1798,
    width: 583,
    height: 129,
  },
  {
    label: 'Packing and dispatch',
    x: 977,
    y: 1798,
    width: 583,
    height: 129,
  },
] as const;

const companyFacts = [
  { value: '20+', label: 'Years experience' },
  { value: 'Xiamen', label: 'Project coordination' },
  { value: 'OEM / ODM', label: 'Development support' },
  { value: 'Model-specific', label: 'Document review' },
] as const;

const productThumbs = [
  ['/products/jmz-901/01-hero.webp', 'Scalp massage device'],
  ['/products/jmz-r006/JMZ-R006-01-home-card.png', 'Neck and shoulder massager'],
  ['/products/jmz-cspl002/01-hero.webp', 'Massage pillow'],
  ['/products/jmz-702/JMZ-702-01-home-card.webp', 'Massage device'],
] as const;

function SceneCrop({ scene }: { scene: (typeof workScenes)[number] }) {
  return (
    <figure
      className="relative overflow-hidden rounded-2xl bg-[#ece8f3]"
      style={{ aspectRatio: `${scene.width} / ${scene.height}` }}
    >
      <img
        src={companyProfile}
        alt={scene.label}
        className="absolute h-auto max-w-none"
        style={{
          width: `${(1920 / scene.width) * 100}%`,
          left: `${-(scene.x / scene.width) * 100}%`,
          top: `${-(scene.y / scene.height) * 100}%`,
        }}
      />
    </figure>
  );
}

export default function AboutProofSections() {
  return (
    <>
      <section id="facility" className="scroll-mt-24 border-y border-violet-100 bg-[#f9f6ff] py-20 sm:py-24">
        <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
          <div className="relative overflow-hidden rounded-[32px] bg-[#4a2865] text-white shadow-2xl shadow-violet-950/15">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_22%,rgba(196,142,255,.34),transparent_32%),linear-gradient(135deg,#3f2058_0%,#6f4388_52%,#4b2868_100%)]" />

            <div className="relative grid gap-0 lg:grid-cols-[1.55fr_1fr]">
              <div className="p-4 sm:p-6 lg:p-8 lg:pr-4">
                <div className="overflow-hidden rounded-2xl bg-[#291538] shadow-2xl shadow-black/20">
                  <video
                    src={companyVideo}
                    aria-label="JAMOOZ company and production introduction"
                    className="aspect-video h-auto w-full bg-[#291538] object-cover"
                    controls
                    muted
                    playsInline
                    preload="metadata"
                  />
                </div>
              </div>

              <div className="flex flex-col justify-center bg-[#6f4388]/78 px-7 py-10 backdrop-blur-[2px] sm:px-10 lg:my-8 lg:mr-8 lg:rounded-2xl">
                <p className="text-xs font-black uppercase tracking-[0.22em] text-violet-200">About JAMOOZ</p>
                <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.035em] sm:text-4xl">Your wellness-device development partner</h2>
                <p className="mt-5 text-sm leading-7 text-white/78">
                  Based in Xiamen, JAMOOZ supports product definition, design coordination, sampling, manufacturing follow-through and delivery preparation for massage-device projects.
                </p>
                <div className="mt-7 grid grid-cols-4 gap-2">
                  {productThumbs.map(([src, alt]) => (
                    <div key={src} className="relative aspect-square overflow-hidden rounded-xl bg-white">
                      <img src={src} alt={alt} className="h-full w-full object-contain p-1.5" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative mx-4 mb-4 grid overflow-hidden rounded-2xl bg-white text-[#4a2865] shadow-xl sm:mx-6 sm:mb-6 sm:grid-cols-2 lg:mx-auto lg:-mb-0 lg:w-[82%] lg:translate-y-0 lg:grid-cols-4">
              {companyFacts.map((fact, index) => (
                <div key={fact.label} className={`px-5 py-5 text-center sm:text-left ${index ? 'border-t border-violet-100 sm:border-t-0 sm:border-l' : ''}`}>
                  <p className="text-xl font-black tracking-[-0.025em]">{fact.value}</p>
                  <p className="mt-1 text-[11px] font-bold uppercase tracking-[0.09em] text-[#6e5d7f]">{fact.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mx-auto mt-16 max-w-[1000px]">
            <header className="max-w-3xl">
              <p className="text-xs font-black uppercase tracking-[0.24em] text-violet-700">Inside the work</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.035em] text-[#3d2758] sm:text-5xl">Engineering, production and delivery in view</h2>
              <p className="mt-5 text-base leading-8 text-zinc-600">
                A closer look at product design, electronics work, testing, assembly and dispatch activity. Project scope and the responsible production entity are confirmed with the buyer before an order is placed.
              </p>
            </header>

            <div className="mt-10 space-y-4">
              <div className="grid gap-4 lg:grid-cols-[2fr_1fr]">
                <SceneCrop scene={workScenes[0]} />
                <div className="grid grid-cols-2 gap-4 lg:grid-cols-1">
                  <SceneCrop scene={workScenes[1]} />
                  <SceneCrop scene={workScenes[2]} />
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                {workScenes.slice(3, 6).map((scene) => <SceneCrop key={scene.label} scene={scene} />)}
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {workScenes.slice(6).map((scene) => <SceneCrop key={scene.label} scene={scene} />)}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="buyer-feedback" className="scroll-mt-24 bg-[#4a3566] py-20 text-white sm:py-24">
        <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
          <header className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-black uppercase tracking-[0.24em] text-violet-200">Buyer feedback</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.035em] sm:text-5xl">Snapshots from completed transactions</h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/70">Selected marketplace feedback is shown as supporting context. Product, order and delivery details vary by transaction.</p>
          </header>

          <div className="relative mx-auto mt-12 overflow-hidden rounded-[32px] border border-white/10 shadow-2xl shadow-purple-950/25" style={{ aspectRatio: '1920 / 1110' }}>
            <img src={reviewBackground} alt="" className="absolute inset-0 h-full w-full object-cover" />
            {reviews.map((review, index) => (
              <div key={review.image} className="absolute overflow-hidden" style={{ left: pct(review.x, 1920), top: pct(review.y, 1110), width: pct(review.w, 1920), height: pct(review.h, 1110) }}>
                <div className="about-review-roll" style={{ animationDuration: review.speed }}>
                  <img src={review.image} alt={`Buyer feedback examples, column ${index + 1}`} className="block h-auto w-full" />
                  <img src={review.image} alt="" aria-hidden className="block h-auto w-full" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="quality-evidence" className="scroll-mt-24 bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.24em] text-violet-700">Document review</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.035em] text-[#3d2758] sm:text-5xl">Certificates and reports are checked by model and market</h2>
              <p className="mt-6 text-base leading-8 text-zinc-600">
                The files shown are examples from the supplied document portfolio. Before purchase, ask the project team to confirm the report holder, product model, applicable standard, validity and destination-market relevance.
              </p>
              <div className="mt-7 rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm leading-7 text-amber-950">
                A document displayed here does not mean that every certificate applies to every JAMOOZ product or market.
              </div>
            </div>

            <div className="relative aspect-[1920/880] overflow-hidden rounded-3xl border border-zinc-200 bg-zinc-100 shadow-xl shadow-zinc-900/10">
              <img
                src={certificateImage}
                alt="Selected product test reports and certification documents"
                className="absolute inset-x-0 bottom-0 h-auto w-full"
              />
              <div className="absolute inset-x-0 top-0 h-[19%] bg-gradient-to-b from-zinc-100 via-zinc-100 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      <style jsx global>{`
        @keyframes aboutReviewScroll { from { transform: translateY(0); } to { transform: translateY(-50%); } }
        .about-review-roll { animation: aboutReviewScroll 26s linear infinite; }
        .about-review-roll:hover { animation-play-state: paused; }
        @media (prefers-reduced-motion: reduce) { .about-review-roll { animation: none; } }
      `}</style>
    </>
  );
}
