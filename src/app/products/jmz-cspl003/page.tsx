import type { Metadata } from 'next';
import ProductDetailTemplate from '@/components/ProductDetailTemplate';
import { jmzCspl003 } from '@/lib/october-products';

export const metadata: Metadata = {
  title:'Mini Kneading Neck Massage Pillow | OEM | JAMOOZ',
  description:jmzCspl003.seoDescription,
  alternates:{canonical:'/products/jmz-cspl003'},
};
export default function Page(){return <ProductDetailTemplate product={jmzCspl003}/>;}
