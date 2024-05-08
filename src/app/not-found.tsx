import Link from 'next/link'

const NotFound = () => {
    return (
      <div className="container mx-auto py-[50px]">
       
          <h2 className="text-[50px] text-center">404</h2>
          <h2 className="text-[40px] leading-tight text-center">
            <div>NOT  <Link href="/memory">FOUND</Link></div>
          </h2>
          <div className="text-center mt-4">このページは存在しません。</div>
          <div className="text-center mt-4">
            <Link href="/" className="px-4 py-2 bg-green-500 text-black rounded hover:bg-green-700 transition duration-300">
              ホームに戻る
            </Link>
          </div>
      </div>
    )
  }
  
  export default NotFound