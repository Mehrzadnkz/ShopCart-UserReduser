import { Data } from "../utils/Datas/Data";
import { Card } from "../functions/cards";
import type { CartState, CartAction } from "../types/types";

export function Show_Products({ state, dispatch }: { state: CartState; dispatch: (action: CartAction) => void }) {
  const box_number = getBoxNumber();

  return (
    <div className="min-w-dvw min-h-dvh flex justify-around items-center">
      <div className={`grid grid-cols-${box_number} gap-4`} id="Card Content">
  {Data.map((mm) => <Card key={mm.id} {...mm} state={state} dispatch={dispatch} />)}
      </div>
    </div>
  );
}

function getBoxNumber() {
  const width = window.innerWidth;
  if (width <= 480) return 1;
  if (width <= 1024) return 2;
  if (width <= 1440) return 4;
  return 5;
}