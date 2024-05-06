import Link from 'next/link'

const NotFound = () => {
    return (
      <div className="container mx-auto py-[50px]">
       
          <h2 className="text-[50px] text-center">404</h2>
          <h2 className="text-[40px] leading-tight text-center">
            <div>NOT  <Link href="/guideline">FOUND</Link></div>
          </h2>
          <div className="text-center mt-4">このページは存在しません。</div>
      </div>
    )
  }
  
  export default NotFound