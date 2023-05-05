interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function ContentContainer({ children, className }: ContainerProps) {
  return (
    <div x-componentname="ContentContainer" className={`text-white text-center sm:text-left max-w-7xl mx-auto h-full w-full pt-16 px-3 md:px-8 lg:px-12 ${className}`}>
      {children}
    </div>
  )
}
