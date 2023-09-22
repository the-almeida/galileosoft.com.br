interface PrimaryTextProps {
  children: React.ReactNode;
  className?: string
}

export default function PrimaryText({ children, className = "" }: PrimaryTextProps) {
  return (
    <p
      x-componentname="PrimaryText"
      className={`${className} text-lg md:text-xl xl:text-2xl font-bold`}
    >
      {children}
    </p>
  )
}
