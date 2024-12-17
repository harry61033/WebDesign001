import React from 'react';
import { cn } from '../../utils/styles';

interface CardProps {
  className?: string;
  children: React.ReactNode;
}

export default function Card({ className, children }: CardProps) {
  return (
    <div 
      className={cn(
        'bg-white rounded-lg shadow-lg p-6',
        'hover:shadow-xl transition-shadow duration-200',
        'transform hover:-translate-y-1',
        className
      )}
    >
      {children}
    </div>
  );
}