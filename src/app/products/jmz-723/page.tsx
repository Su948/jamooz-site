import type { Metadata } from 'next';
import ProductDetailTemplate from '@/components/ProductDetailTemplate';
import { jmz723 } from '@/lib/october-products';

export const metadata: Metadata = {
  title:'EMS Waist Belt with Heat | OEM Supplier | JAMOOZ',
  description:jmz723.seoDescription,
  alternates:{canonical:'/products/jmz-723'},
};
export default function Page(){return <ProductDetailTemplate product={jmz723}/>;}
