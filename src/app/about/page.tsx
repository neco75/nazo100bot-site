import React from 'react'
import Image from 'next/image'
import BackHome from '@/components/BackHome'
import Link from 'next/link'

function page() {
  return (
    <div>
        <div className=' text-2xl rules-title font-bold mb-4 text-center'>説明</div>
        <div className='rules-content m-4 text-center'>
            このサイトは協力型謎解きLINEBOT「100謎BOT」と連動していて、BOTで取得した謎を共有することができます。参加者全員で協力して謎を解き、全問正解を目指してください。
        </div>
        <div className=' text-lg font-bold mb-4 text-center '>
            以下のLINEBOTから参加できます
        </div>
        <div className=' text-sm font-bold mb-4 text-center text-gray-500'>
            タブレットやPCではリッチメニューが表示されないためスマホ推奨です
        </div>
        <div className="flex justify-center items-center w-full mt-5  p-5">
            <Link href='https://liff.line.me/1645278921-kWRPP32q/?accountId=910nkneg'>
                <Image src="/img/QR.png" alt="linebot" width={300} height={300} className=' border-4 border-gray-400'/>
            </Link>
        </div>
        <BackHome />
    </div>
  )
}

export default page