import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/users/userSlice";
import systemReducer from "./systemSlice";
import categoryReducer from "../features/categories/catSlice";

export default configureStore({
  reducer: {
    userInfo: userReducer,
    system: systemReducer,
    category: categoryReducer,
  },
});
