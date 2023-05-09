interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export default function Card({ children, className = '' }: CardProps) {
  return (
                
    <div x-componentname="Card" className="flex flex-1 bg-white text-center rounded-lg overflow-hidden shadow-lg p-6 md:p-7 lg:p-10">
      <div className={`${className} mb-auto w-full` }>
        {children}
      </div>
    </div>
  )
}
