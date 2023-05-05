import { configureStore } from "@reduxjs/toolkit";
import inventoryReducer from "./Features/inventorySlice";
import pageReducer from "./Features/pageSlice";
import paramsReducer from "./Features/paramsSlice";

export const store = configureStore({
	reducer: {
		inventoryReducer,
		pageReducer,
		paramsReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
