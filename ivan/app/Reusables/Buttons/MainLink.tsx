import Link from 'next/link'
import React from 'react'

interface MainLinkProps {
    link: string,
    text: string,
    className?: string,
}

const MainLink = ({link, text, className}: MainLinkProps) => {
  return (
    <Link  href={link} className={`${className && className} bg-[var(--brand)] font-black px-4 py-2 rounded text-white hover:scale-110 transition ease-in-out duration-150 shadow-xl`}>
    {text}
    </Link>
  )
}

export default MainLink
