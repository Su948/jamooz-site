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
    className: 'lg:row-span-2',
    x: 287,
    y: 865,
    width: 632,
    height: 430,
  },
  {
    label: 'R&D review',
    className: '',
    x: 287,
    y: 1370,
    width: 303,
    height: 280,
  },
  {
    label: 'Product design coordination',
    className: '',
    x: 618,
    y: 1370,
    width: 300,
    height: 280,
  },
] as const;

export default function AboutProofSections() {
  return (
    <>
      <section id="facility" className="scroll-mt-24 border-y border-violet-100 bg-[#faf9ff] py-20 sm:py-24">
        <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
          <header className="max-w-3xl">
            <p className="text-xs font-black uppercase tracking-[0.24em] text-violet-700">Inside the work</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.035em] text-[#3d2758] sm:text-5xl">From engineering detail to production follow-through</h2>
            <p className="mt-5 text-base leading-8 text-zinc-600">
              A closer look at product design, electronics work, assembly and dispatch activity. Project scope and the responsible production entity are confirmed with the buyer before an order is placed.
            </p>
          </header>

          <div className="mt-12 grid gap-5 lg:grid-cols-[1.05fr_.95fr]">
            <div className="overflow-hidden rounded-3xl border border-violet-100 bg-[#3d2758] shadow-xl shadow-violet-900/10">
              <video
                src={companyVideo}
                aria-label="JAMOOZ company and production introduction"
                className="aspect-video h-auto w-full bg-[#3d2758] object-cover"
                controls
                muted
                playsInline
                preload="metadata"
              />
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-rows-2">
              {workScenes.map((scene, index) => (
                <div
                  key={scene.label}
                  className={`relative overflow-hidden rounded-3xl border border-violet-100 bg-[#ece8f3] shadow-xl shadow-violet-900/10 ${scene.className} ${index === 0 ? 'sm:col-span-2 lg:col-span-1' : ''}`}
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
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#27153d]/90 via-[#27153d]/45 to-transparent px-5 pb-5 pt-16 text-white">
                    <p className="text-xs font-black uppercase tracking-[0.14em]">{scene.label}</p>
                  </div>
                </div>
              ))}
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
