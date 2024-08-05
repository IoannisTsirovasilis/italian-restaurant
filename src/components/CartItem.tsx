interface CartItemProps {
  item: {
    id: string;
    name: string;
    price: number;
  };
  removeFromCart: (item: any) => void;
}

export default function CartItem({ item, removeFromCart }: CartItemProps) {
  return (
    <div className="flex justify-between items-center border-b py-2">
      <div>
        <h3 className="text-xl">{item.name}</h3>
        <p>€{item.price.toFixed(2)}</p>
      </div>
      <button
        onClick={() => removeFromCart(item)}
        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700"
      >
        Remove
      </button>
    </div>
  );
}
