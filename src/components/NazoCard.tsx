// NazoCard.tsx
import Image from 'next/image'
import Link from 'next/link'

interface NazoCardProps {
  src: string;
  alt: string;
}

const NazoCard: React.FC<NazoCardProps> = ({ src, alt }) => {

  return (
    <div className="p-2 m-2 flex w-1/3">
    <Link href={`/img/quiz/${src}`}>
      <Image src={`/img/quiz/${src}`} alt={alt} width={300} height={200} className="mt-2 object-cover" />
    </Link>
  </div>
  );
};

export default NazoCard;