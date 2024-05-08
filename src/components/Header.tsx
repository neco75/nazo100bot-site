import React from 'react'
import Link from 'next/link'

function Header() {
  return (
    <div className='flex justify-between items-center w-full mt-5'>
        <div className='flex-grow text-center'>
            <Link href='/'>            
                <h1 className='text-3xl font-bold mb-4'>100謎BOT</h1>
            </Link>
        </div>
    </div>
  )
}

export default Header