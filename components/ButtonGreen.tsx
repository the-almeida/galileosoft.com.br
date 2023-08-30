import Link from "next/link"

interface ButtonGreenProps {
  href: string;
  children: React.ReactNode;
  target?: string;
  className?: string
}

export default function ButtonGreen({ children, href, target = '_self', className }: ButtonGreenProps) {
  return (
    <Link 
      x-componentname="ButtonGreen"
      href={href} 
      target={target}
      scroll={false}
      className={`${className} bg-gradient-to-br from-galileoGreen-500 to-green-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-900 text-white text-lg font-bold rounded-lg w-fit px-5 py-2.5 text-center`}
    >
      {children}
    </Link>
  )
}
