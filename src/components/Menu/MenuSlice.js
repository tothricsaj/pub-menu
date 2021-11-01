import { createSlice } from "@reduxjs/toolkit";

export const menuSlice = createSlice({
	name: 'menu',
	initialState: {
		menu: [
			{
				name: 'menu 1',
				price: '11.99'
			},
			{
				name: 'menu 2',
				price: '12.99'
			},	{
				name: 'menu 3',
				price: '13.99'
			},
		]
	},
	reducers: {
		addMenu: (state, action) => {
			state.menu.push(action.payload);
		}
	}
});

export const { addMenu } = menuSlice.actions;
export default menuSlice.reducer;