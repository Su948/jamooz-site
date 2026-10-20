import type { Metadata } from 'next';
import ProductDetailTemplate from '@/components/ProductDetailTemplate';
import { jmz727 } from '@/lib/october-products';

export const metadata: Metadata = {
  title:'EMS & Near-Infrared Heated Waist Belt | JAMOOZ',
  description:jmz727.seoDescription,
  alternates:{canonical:'/products/jmz-727'},
};
export default function Page(){return <ProductDetailTemplate product={jmz727}/>;}
