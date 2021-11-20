import { createSlice } from "@reduxjs/toolkit";

export const menuSlice = createSlice({
	name: 'menu',
	initialState: {
		menuList: [
			{
				id: 1,
				name: 'menu 1 from redux',
				price: '11.99',
				ingredients: ['foo', 'bar', 'baz'],
				quantity: '300gr',
				description: "Five-year strategic plan they have downloaded gmail and seems to be working for now new economy highlights . What's the status on the deliverables for eow? zoom meeting at 2:30 today reach out agile. Weâ€™re starting to formalize flexible opinions around our foundations touch base, yet put it on the parking lot can we jump on a zoom. Hop on the bandwagon a tentative event rundown is attached for your reference, including other happenings on the day you are most welcome to join us beforehand for a light lunch we would also like to invite you to other activities on the day, including the interim and closing panel discussions on the intersection of businesses and social innovation, and on building a stronger social innovation eco-system respectively five-year strategic plan for powerpoint Bunny. Define the underlying principles that drive decisions and strategy for your design language pivot you gotta smoke test your hypothesis we need to crystallize a plan cc me on that for pig in a python."
			},
			{
				id: 2,
				name: 'menu 2 from redux',
				price: '12.99',
				ingredients: ['foo', 'bar', 'baz'],
				quantity: '300gr',
				description: "Five-year strategic plan they have downloaded gmail and seems to be working for now new economy highlights . What's the status on the deliverables for eow? zoom meeting at 2:30 today reach out agile. Weâ€™re starting to formalize flexible opinions around our foundations touch base, yet put it on the parking lot can we jump on a zoom. Hop on the bandwagon a tentative event rundown is attached for your reference, including other happenings on the day you are most welcome to join us beforehand for a light lunch we would also like to invite you to other activities on the day, including the interim and closing panel discussions on the intersection of businesses and social innovation, and on building a stronger social innovation eco-system respectively five-year strategic plan for powerpoint Bunny. Define the underlying principles that drive decisions and strategy for your design language pivot you gotta smoke test your hypothesis we need to crystallize a plan cc me on that for pig in a python."
			},
			{
				id: 3,
				name: 'menu 3 from redux',
				price: '13.99',
				ingredients: ['foo', 'bar', 'baz'],
				quantity: '300gr',
				description: "Five-year strategic plan they have downloaded gmail and seems to be working for now new economy highlights . What's the status on the deliverables for eow? zoom meeting at 2:30 today reach out agile. Weâ€™re starting to formalize flexible opinions around our foundations touch base, yet put it on the parking lot can we jump on a zoom. Hop on the bandwagon a tentative event rundown is attached for your reference, including other happenings on the day you are most welcome to join us beforehand for a light lunch we would also like to invite you to other activities on the day, including the interim and closing panel discussions on the intersection of businesses and social innovation, and on building a stronger social innovation eco-system respectively five-year strategic plan for powerpoint Bunny. Define the underlying principles that drive decisions and strategy for your design language pivot you gotta smoke test your hypothesis we need to crystallize a plan cc me on that for pig in a python."
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

			state.menuList[menuIndex] = action.payload;
			console.log(menuIndex);
			console.log(action.payload);
		}
	}
});

export const selectMenuList = state => state.menu.menuList;
export const { addMenu, editMenu } = menuSlice.actions;
export default menuSlice.reducer;