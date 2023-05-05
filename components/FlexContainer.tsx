interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function FlexContainer({ children, className }: ContainerProps) {
  return (
    <div className={`flex text-white text-center sm:text-left max-w-7xl mx-auto h-full w-full p-3 md:p-8 lg:p-12 ${className}`}>
      {children}
    </div>
  )
}
