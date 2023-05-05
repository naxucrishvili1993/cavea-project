import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Params = {
	sortName: number;
	sortPrice: number;
	location: string;
};

const initialState: Params = {
	sortName: 1,
	sortPrice: 0,
	location: "All",
};

export const paramsSlice = createSlice({
	name: "paramsSlice",
	initialState,
	reducers: {
		setSortName: (state, action: PayloadAction<number>) => {
			state.sortName = Number(action.payload);
		},
		setSortPrice: (state, action: PayloadAction<number>) => {
			state.sortPrice = Number(action.payload);
		},
		setLocation: (state, action: PayloadAction<string>) => {
			state.location = String(action.payload);
		},
	},
});

export const { setSortName, setSortPrice, setLocation } = paramsSlice.actions;
export default paramsSlice.reducer;
