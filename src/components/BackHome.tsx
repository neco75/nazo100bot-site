import React from 'react'
import Link from 'next/link'

function BackHome() {
  return (
    <div className="text-center mt-4">
        <Link href="/" className="px-4 py-2 bg-green-500 text-black rounded hover:bg-green-700 transition duration-300">
            ホームに戻る
        </Link>
    </div>
  )
}

export default BackHome