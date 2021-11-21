import { createSlice } from "@reduxjs/toolkit";

export const menuSlice = createSlice({
	name: 'menu',
	initialState: {
		menuList: []
	},
	reducers: {
		initMenu: (state, action) => {
			state.menuList = action.payload;
		},
		addMenu: (state, action) => {
			state.menuList.push(action.payload);
		},
		editMenu: (state, action) => {
			const menuIndex = state.menuList.findIndex(el => el.id === action.payload.id);

			state.menuList[menuIndex] = action.payload;
		}
	}
});

export const selectMenuList = state => state.menu.menuList;
export const { addMenu, editMenu, initMenu } = menuSlice.actions;
export default menuSlice.reducer;