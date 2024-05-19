import React from 'react'
import Link from 'next/link'

function Header() {
  return (
    <div>
      <div className='flex justify-between items-center w-full mt-5'>
          <div className='flex-grow text-center'>
              <Link href='/'>
                  <h1 className='text-3xl font-bold mb-4'>100謎BOT</h1>
              </Link>
          </div>
      </div>
      <div className='about-link text-right mr-5 mb-5 text-sm'>
        <Link href='/about'>
            <div className=' text-gray-400'>このサイトについて</div>
        </Link>
      </div>
    </div>
  )
}

export default Header