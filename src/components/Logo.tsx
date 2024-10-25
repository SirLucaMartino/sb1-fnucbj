import React from 'react';
import { Building } from 'lucide-react';

interface LogoProps {
  className?: string;
  inverted?: boolean;
}

export function Logo({ className = "h-8", inverted = false }: LogoProps) {
  return (
    <div className={`flex items-center ${className}`}>
      <Building 
        className={`${inverted ? 'text-white' : 'text-[#110064]'} ${className}`}
      />
      <span className={`ml-2 font-bold text-xl ${inverted ? 'text-white' : 'text-[#110064]'}`}>
        E-Receptor
      </span>
    </div>
  );
}