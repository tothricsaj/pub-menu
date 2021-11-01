import { configureStore } from '@reduxjs/toolkit'
import menuReducer from "../components/Menu/MenuSlice";

export default configureStore({
  reducer: {
		menu: menuReducer
	},
});