import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type Inventory = {
	id: number;
	name: string;
	price: number;
	location: string;
};

type InventoryState = {
	inventories: Inventory[];
};

const initialState: InventoryState = {
	inventories: [
		{
			id: 2,
			name: "Giorgi",
			price: 12,
			location: "Cavea",
		},
	],
};

export const inventorySlice = createSlice({
	name: "Inventories",
	initialState,
	reducers: {
		setInventory: (state: InventoryState, action: PayloadAction<Inventory>) => {
			state.inventories = [action.payload];
			console.log(action.payload);
		},
	},
});

export const { setInventory } = inventorySlice.actions;
export default inventorySlice.reducer;
