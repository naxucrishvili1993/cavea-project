import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type pageState = {
	activePageIndex: number;
};

const initialState: pageState = {
	activePageIndex: Number(1),
};

export const pageSlice = createSlice({
	name: "PageSlice",
	initialState,
	reducers: {
		increment: (state, action: PayloadAction) => {
			state.activePageIndex += 1;
		},
		decrement: (state, action: PayloadAction) => {
			state.activePageIndex -= 1;
		},
		setActivePageIndex: (state, action: PayloadAction<number>) => {
			state.activePageIndex = action.payload;
		},
	},
});

export const { increment, decrement, setActivePageIndex } = pageSlice.actions;
export default pageSlice.reducer;
