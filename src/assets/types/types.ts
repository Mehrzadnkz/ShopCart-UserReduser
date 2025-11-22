export type Tloading = "starter" | "page" | "loading";

export type TData = { id: number; name: string; price: number; image?: string };

export type TButton = "increse" | "decerese" | "reset";

// Cart reducer types
export type CartItem = { count: number; price: number };
export type CartState = {
	items: Record<number, CartItem>;
	totalPrice: number;
};

export type CartAction =
	| { type: "increase"; payload: { id: number; price: number } }
	| { type: "decrease"; payload: { id: number; price: number } }
	| { type: "reset" };