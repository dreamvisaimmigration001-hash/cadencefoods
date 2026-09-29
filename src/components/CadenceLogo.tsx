import React, { useState } from 'react';
import { CADENCE_ASSETS } from '../constants/companyAssets';

interface CadenceLogoProps {
  className?: string;
  variant?: 'light' | 'dark';
  showText?: boolean;
}

export const CadenceLogo: React.FC<CadenceLogoProps> = ({
  className = 'h-9 w-auto',
  showText = true,
}) => {
  const [hasError, setHasError] = useState(false);

  return (
    <div className="flex items-center gap-3">
      {!hasError ? (
        <img
          src={CADENCE_ASSETS.logo}
          alt="Cadence Foods"
          loading="eager"
          referrerPolicy="no-referrer"
          className={`object-contain transition-opacity duration-300 ${className}`}
          onError={() => setHasError(true)}
        />
      ) : null}

      {showText && (
        <span className="text-lg md:text-xl font-bold tracking-tight text-[#FBF9F5] font-display whitespace-nowrap">
          CADENCE FOODS
        </span>
      )}
    </div>
  );
};
