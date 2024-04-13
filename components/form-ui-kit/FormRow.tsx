import clsx from 'clsx';
import React from 'react';

interface FormRowProps {
  children?: React.ReactNode;
  className?: string;
}

export default function FormRow({ children, className }: FormRowProps) {
  return (
    <div
      className={clsx(
        'flex flex-1 w-full gap-[25px] mb-8',
        !!className && className
      )}
    >
      {children}
    </div>
  );
}
