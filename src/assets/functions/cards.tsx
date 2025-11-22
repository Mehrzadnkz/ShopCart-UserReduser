import { type TData, type CartState, type CartAction } from "../types/types";

type CardProps = TData & { state: CartState; dispatch: (action: CartAction) => void };

export function Card({ id, name, price, image, state, dispatch }: CardProps) {
  const count = state.items[id]?.count ?? 0;

  const onIncrease = () => dispatch({ type: "increase", payload: { id, price } });
  const onDecrease = () => dispatch({ type: "decrease", payload: { id, price } });

  return (
    <div className="border rounded-lg flex flex-col items-center p-4 gap-4 max-sm:min-w-dvw max-sm:mx-2">
      {image && <img src={image} alt={name} className="w-full h-36 object-cover rounded" />}
      <h3 className="font-medium">{name}</h3>
      <p className="text-sm">Price: ${price}</p>
      <div className="flex flex-row gap-2 items-center">
        <button className="bg-green-700 border hover:bg-green-800 rounded-lg px-3 py-1" onClick={onIncrease}>+</button>
        <p>{count}</p>
        <button className="bg-red-700 border hover:bg-red-800 rounded-lg px-3 py-1" onClick={onDecrease}>-</button>
      </div>
    </div>
  );
}