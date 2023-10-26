import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './SquareLink.module.css'

interface SquareLinkProps {
    image: string
    title: string
    href: string
}

function SquareLink({ image, title, href }: SquareLinkProps) {
  return (
    <Link href={href} className={`${styles.squareLink} aspect-square flex flex-col justify-center items-center gap-5 clickable__animation`}>
        <div className='flex flex-col'>
            <Image
            src={image}
            width={200}
            height={200}
            alt='link-ico'
            />
        </div>
        <h4 className='text-white pb-4'>{title}</h4>
    </Link>
  )
}

export default SquareLink