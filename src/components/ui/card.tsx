import * as React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className }: CardProps) {
  return <div className={`rounded-lg border bg-white p-4 shadow ${className}`}>{children}</div>;
}

export function CardHeader({ children, className }: CardProps) {
  return <div className={`mb-2 font-bold text-lg ${className}`}>{children}</div>;
}

export function CardTitle({ children, className }: CardProps) {
  return <h3 className={`text-xl ${className}`}>{children}</h3>;
}

export function CardDescription({ children, className }: CardProps) {
  return <p className={`text-sm text-gray-500 ${className}`}>{children}</p>;
}

export function CardContent({ children, className }: CardProps) {
  return <div className={`py-2 ${className}`}>{children}</div>;
}

export function CardFooter({ children, className }: CardProps) {
  return <div className={`pt-2 border-t mt-4 ${className}`}>{children}</div>;
}
