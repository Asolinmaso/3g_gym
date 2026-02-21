'use client';

import { usePathname } from 'next/navigation';
import { Footer } from '@/features/layout';

export default function LayoutContent({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const hideFooter = pathname === '/products';

  return (
    <>
      {children}
      {!hideFooter && <Footer />}
    </>
  );
}
