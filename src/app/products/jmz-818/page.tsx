import type { Metadata } from 'next';
import ProductDetailTemplate from '@/components/ProductDetailTemplate';
import { jmz818 } from '@/lib/october-products';

export const metadata: Metadata = {
  title:'Cordless Air Compression Calf Massagers | OEM | JAMOOZ',
  description:jmz818.seoDescription,
  alternates:{canonical:'/products/jmz-818'},
};
export default function Page(){return <ProductDetailTemplate product={jmz818}/>;}
