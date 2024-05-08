"use client"

import Image from 'next/image'
import {Suspense, useState} from 'react'
import Loading from "@/components/Loading"
import NotFound from '@/app/not-found'
import Link from 'next/link'

interface Props {
  params: {
    id: string;
  }
}

const ImageDetailPage = ({ params }: Props) => {
  const { id } = params;
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  }

  if (imageError) {
    return <NotFound />;
  }

  return (
    <div>
      <div className="flex justify-center items-center h-screen">
        <Suspense fallback={<Loading />}>
          <Image
          src={'/img/quiz/' + id + '.png'}
          onError={handleImageError}
          alt={`Image ${id}`}
          width={800}
          height={600}
          className="shadow-lg rounded-lg"
          />
        </Suspense>
      </div>
      <div className="text-center mt-4">
        <Link href="/" className="px-4 py-2 bg-green-500 text-black rounded hover:bg-green-700 transition duration-300">
          ホームに戻る
        </Link>
      </div>
    </div>
  )
}

export default ImageDetailPage