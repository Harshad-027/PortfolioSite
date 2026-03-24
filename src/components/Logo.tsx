import React from 'react';
import Link from 'next/link';

interface LogoProps {
  size?: number;
}

export default function Logo({ size = 36 }: LogoProps) {
  const isSmall = size === 36;
  const dimensionClass = isSmall ? 'w-[36px] h-[36px]' : 'w-[96px] h-[96px]';
  const fontSizeStyle = isSmall ? 'text-[16px]' : 'text-[42px]';
  
  return (
    <Link 
      href="/" 
      className={`flex items-center justify-center bg-primary text-white font-[800] rounded-lg transition-all duration-300 hover:shadow-[0_0_16px_rgba(124,58,237,0.5)] hover:scale-105 shrink-0 ${dimensionClass} ${fontSizeStyle}`}
    >
      <span className="tracking-tighter">HN</span>
    </Link>
  );
}
