import Image from "next/image";

export default function Home() {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to La Bella Italia</h1>
      <p className="mb-4">
        Experience the finest Italian cuisine in town. Our dishes are made with
        the freshest ingredients and traditional recipes.
      </p>
      <Image
        src="/images/restaurant.jpg"
        alt="Restaurant Image"
        className="mx-auto mb-4"
        width={500}
        height={300}
      />
      <p>
        Located at 1234 Pasta Lane, Italyville. Open daily from 11:00 AM to
        11:00 PM.
      </p>
    </div>
  );
}
