'use client';

import { usePathname } from 'next/navigation';

const bg = 'https://sc04.alicdn.com/kf/H7abbd5ea9de54060b126f9cb24a2ca22f/252717039/H7abbd5ea9de54060b126f9cb24a2ca22f.jpg';
const pct = (n:number,total:number) => `${(n/total)*100}%`;

const contacts = [
  {x:397,y:215,w:175,h:233,href:'https://onetalk.alibaba.com/message/weblitePWA.htm?activeAccountId=286256674&productId=1601761623132'},
  {x:583,y:208,w:172,h:241,href:'https://onetalk.alibaba.com/message/weblitePWA.htm?activeAccountId=271098113&productId=1601548309608'},
  {x:775,y:208,w:179,h:239,href:'https://onetalk.alibaba.com/message/weblitePWA.htm?activeAccountId=286510297&productId=1601803383603'},
  {x:975,y:209,w:165,h:239,href:'https://onetalk.alibaba.com/message/weblitePWA.htm?activeAccountId=258248507&productId=1600556869813'},
  {x:1160,y:209,w:186,h:241,href:'https://onetalk.alibaba.com/message/weblitePWA.htm?activeAccountId=286175886&productId=1601740819419'},
  {x:1357,y:210,w:170,h:240,href:'https://onetalk.alibaba.com/message/weblitePWA.htm?activeAccountId=285937306&productId=1601695574506'},
] as const;

export default function PreviewContactSection(){
  const pathname = usePathname();
  if (!pathname.startsWith('/preview')) return null;

  return (
    <section className="relative overflow-hidden bg-white" style={{aspectRatio:'1920 / 854'}}>
      <img src={bg} alt="JAMOOZ customer service" className="absolute inset-0 h-full w-full object-contain" />
      {contacts.map((c,i)=><a key={i} href={c.href} target="_blank" rel="noreferrer" aria-label={`Contact sales ${i+1}`} className="absolute z-10" style={{left:pct(c.x,1920),top:pct(c.y,854),width:pct(c.w,1920),height:pct(c.h,854)}} />)}
      <button type="button" aria-label="Back to top" onClick={()=>window.scrollTo({top:0,behavior:'smooth'})} className="absolute z-20 bg-transparent" style={{left:pct(707,1920),top:pct(659,854),width:pct(492,1920),height:pct(150,854)}} />
    </section>
  );
}
