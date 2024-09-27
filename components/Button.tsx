import Link from 'next/link'
import React from 'react'

interface ButtonProps {
  label: string;
  href: string;
}

const Button:React.FC<ButtonProps> = ({ label, href}) => {
  return (
    <>
    <div className='flex items-center justify-center mt-5'>
        <Link className='text-white bg-gradient-to-br from-green-600 to-blue-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 hover:'
        href={href}
        >
            {label}
        </Link>
    </div>
    </>

  )
}

export default Button