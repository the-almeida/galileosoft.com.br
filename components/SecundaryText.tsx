interface SecundaryTextProps {
  children: React.ReactNode;
  className?: string
}

export default function SecundaryText({ children, className = "" }: SecundaryTextProps) {
  return (
    <p
      x-componentname="SecundaryText"
      className={`${className} text-base md:text-lg lg:text-xl`}
    >
      {children}
    </p>
  )
}
