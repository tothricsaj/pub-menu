import { createSlice } from "@reduxjs/toolkit";

export const menuSlice = createSlice({
	name: 'menu',
	initialState: {
		menuList: [
			{
				name: 'menu 1 from redux',
				price: '11.99'
			},
			{
				name: 'menu 2 from redux',
				price: '12.99'
			},	{
				name: 'menu 3 from redux',
				price: '13.99'
			},
		]
	},
	reducers: {
		addMenu: (state, action) => {
			state.menuList.push(action.payload);
		}
	}
});

export const selectMenuList = state => state.menu.menuList;
export const { addMenu } = menuSlice.actions;
export default menuSlice.reducer;