import MenuCard from "../../components/MenuCard";

const menuItems = {
  Appetizers: [
    {
      id: "1",
      name: "Bruschetta",
      price: 6,
      imageUrl: "/images/bruschetta.jpg",
    },
    {
      id: "2",
      name: "Caprese Salad",
      price: 8,
      imageUrl: "/images/caprese.jpg",
    },
    {
      id: "3",
      name: "Garlic Bread",
      price: 5,
      imageUrl: "/images/garlic-bread.jpg",
    },
  ],
  "Main Courses": [
    {
      id: "4",
      name: "Margherita Pizza",
      price: 12,
      imageUrl: "/images/margherita.jpg",
    },
    {
      id: "5",
      name: "Spaghetti Carbonara",
      price: 14,
      imageUrl: "/images/carbonara.jpg",
    },
    { id: "6", name: "Lasagna", price: 15, imageUrl: "/images/lasagna.jpg" },
  ],
  Desserts: [
    { id: "7", name: "Tiramisu", price: 7, imageUrl: "/images/tiramisu.jpg" },
    { id: "8", name: "Gelato", price: 6, imageUrl: "/images/gelato.jpg" },
    {
      id: "9",
      name: "Panna Cotta",
      price: 7,
      imageUrl: "/images/panna-cotta.jpg",
    },
  ],
  Beverages: [
    { id: "10", name: "Espresso", price: 3, imageUrl: "/images/espresso.jpg" },
    {
      id: "11",
      name: "Cappuccino",
      price: 4,
      imageUrl: "/images/cappuccino.jpg",
    },
    { id: "12", name: "Red Wine", price: 6, imageUrl: "/images/red-wine.jpg" },
  ],
};

export default function MenuPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Menu</h1>
      {Object.keys(menuItems).map((category) => (
        <div key={category} className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">{category}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {menuItems[category].map((item: any) => (
              <MenuCard
                key={item.id}
                name={item.name}
                price={item.price}
                imageUrl={item.imageUrl}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
