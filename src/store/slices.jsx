import { createSlice } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
// import { userSlice } from "./slices";

export const userSlice = createSlice({
  initialState: [],
  name: "users",
  reducers: {
    Users: (state, action) => {
      return action.payload;
    },
  },
});
export const loggedUserSlice = createSlice({
  initialState: {},
  name: "loggedUser",
  reducers: {
    loggedUser: (state, action) => {
      return action.payload;
    },
  },
});

export const loggedUserIndexSlice = createSlice({
  initialState: 0,
  name: "loggedUserIndex",
  reducers: {
    loggedUserIndex: (state, action) => {
      return action.payload;
    },
  },
});

export const titleSlice = createSlice({
  initialState: "",
  name: "titleSlice",
  reducers: {
    addtitle: (state, action) => {
      return action.payload;
    },
  },
});
export const store = configureStore({
  reducer: {
    users: userSlice.reducer,
    loggedUser: loggedUserSlice.reducer,
    userIndex: loggedUserIndexSlice.reducer,
    title: titleSlice.reducer,
  },
});
