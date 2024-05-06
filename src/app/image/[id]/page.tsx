import Image from 'next/image'
import {Suspense} from 'react'
import Loading from "@/components/Loading"

interface Props {
  params: {
    id: string;
  }
}

const ImageDetailPage = ({ params }: Props) => {
  const { id } = params;

  return (
    <div className="flex justify-center items-center h-screen">
        <Suspense fallback={<Loading />}>
          <Image
            src={`/img/quiz/${id}.png`}
            alt={`Image ${id}`}
            width={800}
            height={600}
            className="shadow-lg rounded-lg"
          />
        </Suspense>
    </div>
  )
}

export default ImageDetailPage