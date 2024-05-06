import Link from 'next/link'

const NotFound = () => {
    return (
      <div className="container mx-auto py-[50px]">
        <Link href="/guideline">
          <h2 className="text-[50px] text-center">404</h2>
        </Link>
      </div>
    )
  }
  
  export default NotFound