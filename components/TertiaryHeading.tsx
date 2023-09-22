interface TertiaryHeadingProps {
  children: React.ReactNode;
  className?: string
}

export default function TertiaryHeading({ children, className = "" }: TertiaryHeadingProps) {
  return (
    <span
      x-componentname="TertiaryHeading"
      className={`${className} text-lg md:text-2xl lg:text-3xl xl:text-4xl font-medium mb-6`}
    >
      {children}
    </span>
  )
}
