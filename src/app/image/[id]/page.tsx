import Image from 'next/image'

interface Props {
  params: {
    id: string;
  }
}

const ImageDetailPage = ({ params }: Props) => {
  const { id } = params;

  return (
    <div className="flex justify-center items-center h-screen">
      <Image
        src={`/img/quiz/${id}.png`}
        alt={`Image ${id}`}
        width={800}
        height={600}
        className="shadow-lg rounded-lg"
      />
    </div>
  )
}

export default ImageDetailPage