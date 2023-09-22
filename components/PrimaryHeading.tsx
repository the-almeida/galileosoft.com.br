interface PrimaryHeadingProps {
  children: React.ReactNode;
  className?: string
}

export default function PrimaryHeading({ children, className = "" }: PrimaryHeadingProps) {
  return (
    <h1
      x-componentname="PrimaryHeading"
      className={`${className} text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4`}
    >
      {children}
    </h1>
  )
}
