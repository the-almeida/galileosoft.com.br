interface SecundaryHeadingProps {
  children: React.ReactNode;
  className?: string
}

export default function SecundaryHeading({ children, className = "" }: SecundaryHeadingProps) {
  return (
    <h2
      x-componentname="SecundaryHeading"
      className={`${className} text-xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4`}
    >
      {children}
    </h2>
  )
}
