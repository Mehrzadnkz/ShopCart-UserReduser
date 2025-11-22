import { Data } from "./assets/utils/Datas/Data";
import { Card } from "./assets/functions/cards";
import { useReducer } from "react";
import type { CartState, CartAction } from "./assets/types/types";

const initialState: CartState = { items: {}, totalPrice: 0 };

function reducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "increase": {
      const { id, price } = action.payload;
      const prev = state.items[id] ?? { count: 0, price };
      const next = { ...state.items, [id]: { count: prev.count + 1, price } };
      return { items: next, totalPrice: state.totalPrice + price }; // Keep totalPrice as a number
    }
    case "decrease": {
      const { id, price } = action.payload;
      const prev = state.items[id] ?? { count: 0, price };
      if (prev.count <= 0) return state;
      const newCount = prev.count - 1;
      const nextItems = { ...state.items };
      if (newCount <= 0) delete nextItems[id];
      else nextItems[id] = { count: newCount, price };
      return { items: nextItems, totalPrice: state.totalPrice - price }; // Keep totalPrice as a number
    }
    case "reset":
      return initialState;
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const box_number = getBoxNumber();

  return (
    <>
      <div className="min-w-dvw py-4 flex flex-col items-center justify-center gap-5">
        <p>Total Price : ${state.totalPrice}</p>
        <div className="flex gap-2">
          <button onClick={() => dispatch({ type: "reset" })} className="p-2 rounded-lg bg-red-500 hover:bg-red-700">Clear</button>
        </div>
      </div>
      <div className="min-w-dvw min-h-dvh flex justify-around items-center m-2">
        <div className={`grid grid-cols-${box_number} gap-4`} id="Card Content">
          {Data.map((p) => <Card key={p.id} {...p} state={state} dispatch={dispatch} />)}
        </div>
      </div>
    </>
  );
}

function getBoxNumber() {
  if (typeof window === 'undefined') return 5;
  const width = window.innerWidth;
  if (width <= 480) return 1;
  if (width <= 1024) return 2;
  if (width <= 1440) return 4;
  return 5;
}


export default App;