import { createSlice } from "@reduxjs/toolkit";

export const menuSlice = createSlice({
	name: 'menu',
	initialState: {
		menuList: [
			{
				id: 1,
				name: 'menu 1 from redux',
				price: '11.99'
			},
			{
				id: 2,
				name: 'menu 2 from redux',
				price: '12.99'
			},
			{
				id: 3,
				name: 'menu 3 from redux',
				price: '13.99'
			},
		]
	},
	reducers: {
		addMenu: (state, action) => {
			console.log(action.payload);
			state.menuList.push(action.payload);
		},
		editMenu: (state, action) => {
			const menuIndex = state.menuList.findIndex(el => el.id === action.payload.id);

			state.menuList[menuIndex] = action.payload.data;
		}
	}
});

export const selectMenuList = state => state.menu.menuList;
export const { addMenu, editMenu } = menuSlice.actions;
export default menuSlice.reducer;