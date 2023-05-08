interface ContainerProps {
  children: React.ReactNode;
}

export default function Card({ children }: ContainerProps) {
  return (
                
    <div x-componentname="Card" className="flex flex-1 bg-slate-200 text-center rounded-lg overflow-hidden shadow-lg p-6 md:p-7 lg:p-10">
      <div className="mb-auto">
        {children}
      </div>
    </div>
  )
}
