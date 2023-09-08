"use client";

interface containerProps {
  children: React.ReactNode;
  color: string;
}

export default function Container({ children, color }: containerProps) {
  return (
    <div className="w-full min-h-screen panel " style={{ backgroundColor: color }}>
      {children}
    </div>
  );
}
