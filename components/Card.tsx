interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export default function Card({ children, className = '' }: CardProps) {
  return ( 
    <div x-componentname="Card" className="relative flex flex-1 bg-slate-100 text-center rounded-lg overflow-hidden shadow-lg p-6 md:p-7 lg:p-10">
      <div className={`mb-auto w-full ${className}`}>
        {children}
      </div>
    </div>
  )
}
