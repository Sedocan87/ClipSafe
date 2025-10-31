import React from 'react';

const Button = ({ children }: { children: React.ReactNode }) => {
  return (
    <button className="flex h-12 min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-accent-primary px-5 text-base font-bold leading-normal tracking-[0.015em] text-text-primary transition-opacity hover:opacity-90 active:opacity-80">
      <span className="truncate">{children}</span>
    </button>
  );
};

export default Button;
