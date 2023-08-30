import Link from "next/link"

interface ButtonOrangeProps {
  href: string;
  children: React.ReactNode;
  target?: string;
  className?: string
}

export default function ButtonOrange({ children, href, target = '_self', className }: ButtonOrangeProps) {
  return (
    <Link 
      x-componentname="ButtonOrange"
      href={href} 
      target={target}
      className={`${className} bg-gradient-to-br from-pink-600 to-orange-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-900 text-white text-lg font-medium rounded-lg w-fit px-5 py-2.5 text-center`}
    >
      {children}
    </Link>
  )
}
