interface CartItemProps {
  item: {
    id: string;
    name: string;
    price: number;
    quantity: number;
  };
  increaseQuantity: (item: any) => void;
  decreaseQuantity: (item: any) => void;
  removeFromCart: (item: any) => void;
}

export default function CartItem({
  item,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
}: CartItemProps) {
  return (
    <div className="flex justify-between items-center border-b py-2">
      <div>
        <h3 className="text-xl">{item.name}</h3>
        <p>€{(item.price * item.quantity).toFixed(2)}</p>
        <div className="flex items-center">
          <button
            onClick={() => decreaseQuantity(item)}
            className="px-2 py-1 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
          >
            -
          </button>
          <span className="mx-2">{item.quantity}</span>
          <button
            onClick={() => increaseQuantity(item)}
            className="px-2 py-1 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
          >
            +
          </button>
        </div>
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
