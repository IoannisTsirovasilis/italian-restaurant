import Image from "next/image";

interface MenuCardProps {
  name: string;
  price: number;
  imageUrl: string;
}

export default function MenuCard({ name, price, imageUrl }: MenuCardProps) {
  return (
    <div className="border rounded-lg overflow-hidden shadow-lg">
      <Image
        src={imageUrl}
        alt={name}
        width={300}
        height={200}
        className="w-full h-48 object-fill"
      />
      <div className="p-4">
        <h3 className="text-xl font-bold">{name}</h3>
        <p className="text-lg">€{price.toFixed(2)}</p>
      </div>
    </div>
  );
}
