import React from 'react'
import Link from 'next/link'

function Footer() {
  return (
    <div className='text-center mt-5'>
        <Link href='/'>
            <p className='text-lg mb-5' style={{ color: 'gray' }}>
                謎100BOT
            </p>
        </Link>
    </div>
  )
}

export default Footer