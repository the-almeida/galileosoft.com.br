interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function ContentContainer({ children, className }: ContainerProps) {
  return (
    <div x-componentname="ContentContainer" className={`text-white max-w-7xl mx-auto h-full w-full px-3 md:px-8 lg:px-12 ${className}`}>
      {children}
    </div>
  )
}
