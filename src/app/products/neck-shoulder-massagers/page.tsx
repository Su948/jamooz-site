import type { Metadata } from 'next';
import NeckCategoryPreview from '@/app/preview/products/neck-shoulder-massagers/page';

export const metadata: Metadata = {
  title: 'Neck & Shoulder Massager Manufacturer | JAMOOZ',
  description: 'Compare eight JAMOOZ neck and shoulder massagers for wholesale, private label and OEM/ODM projects. MOQ from 50 pieces and samples available.',
  alternates: {
    canonical: '/products/neck-shoulder-massagers',
  },
  openGraph: {
    title: 'Neck & Shoulder Massager Manufacturer | JAMOOZ',
    description: 'Compare wearable kneading and massage pillow designs for wholesale, private label and OEM/ODM projects.',
    url: '/products/neck-shoulder-massagers',
    type: 'website',
    images: [{ url: '/opengraph-image.png', width: 1200, height: 630, alt: 'JAMOOZ massage devices — OEM/ODM and private label' }],
  },
};

export default function NeckShoulderMassagersPage() {
  return <NeckCategoryPreview showPreviewNotice={false} />;
}
