// NazoCard.tsx
import Image from 'next/image'
import Link from 'next/link'

interface NazoCardProps {
  src: string;
  alt: string;
  rarity: number;
}

const NazoCard: React.FC<NazoCardProps> = ({ src, alt, rarity }) => {


  return (
    <div className="p-2 m-2 flex w-1/3">
      <Link href={`/img/${rarity}/${src}`}>
        <Image src={`/img/${rarity}/${src}`} alt={alt} width={300} height={200} className="mt-2 object-cover" />
      </Link>
    </div>
  );
};

export default NazoCard;