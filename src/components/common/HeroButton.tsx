import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { cn } from '../../utils/styles';

interface HeroButtonProps {
  variant: 'primary' | 'secondary';
  to: string;
  children: React.ReactNode;
  className?: string;
}

export default function HeroButton({ variant, to, children, className }: HeroButtonProps) {
  const baseStyles = "inline-flex items-center justify-center px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:transform hover:scale-105";
  
  const variants = {
    primary: "bg-white text-primary hover:bg-gray-100 group",
    secondary: "border-2 border-white text-white hover:bg-white/10"
  };

  return (
    <Link
      to={to}
      className={cn(baseStyles, variants[variant], className)}
    >
      {children}
      {variant === 'primary' && (
        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
      )}
    </Link>
  );
}