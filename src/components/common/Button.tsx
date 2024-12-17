import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { cn } from '../../utils/styles';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  to?: string;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  icon?: boolean;
}

export default function Button({
  variant = 'primary',
  size = 'md',
  to,
  onClick,
  children,
  className,
  icon = false
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200";
  
  const variants = {
    primary: "bg-primary text-white hover:bg-primary/90",
    secondary: "bg-white text-primary hover:bg-gray-50",
    outline: "border-2 border-primary text-primary hover:bg-primary/10"
  };
  
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  const content = (
    <>
      {children}
      {icon && (
        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
      )}
    </>
  );

  if (to) {
    return (
      <Link
        to={to}
        className={cn(baseStyles, variants[variant], sizes[size], "group", className)}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      className={cn(baseStyles, variants[variant], sizes[size], "group", className)}
    >
      {content}
    </button>
  );
}