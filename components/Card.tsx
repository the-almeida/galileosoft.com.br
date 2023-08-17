interface CardProps {
  children: React.ReactNode;
  className?: string;
  bgColor?: string;
}

export default function Card({ children, className = '', bgColor = 'bg-slate-100' }: CardProps) {
  return ( 
    <div x-componentname="Card" className={`${bgColor} relative flex flex-1 text-center rounded-lg overflow-hidden shadow-lg p-6 md:p-7 lg:p-10`}>
      <div className={`mb-auto w-full ${className}`}>
        {children}
      </div>
    </div>
  )
}
