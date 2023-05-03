import { configureStore } from "@reduxjs/toolkit";
import inventoryReducer from "./Features/inventorySlice";

export const store = configureStore({
	reducer: {
		inventoryReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
