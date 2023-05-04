import { configureStore } from "@reduxjs/toolkit";
import inventoryReducer from "./Features/inventorySlice";
import pageReducer from "./Features/pageSlice";

export const store = configureStore({
	reducer: {
		inventoryReducer,
		pageReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
