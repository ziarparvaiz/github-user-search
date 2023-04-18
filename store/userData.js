import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    avatar: "",
    username: "",
    fullName: "",
    html_url: "",
    twitter: "",
    org: "",
    email: "",
    blog: "",
    bio: "",
    location: "",
    createdAT: "",
    following: "",
    followers: "",
    repos: "",
    gists: "",
    hireable: "",
  },
  reducers: {
    setUser: (state, action) => {
      state = action.payload;
      // return action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;
export const selectUser = (state) => state.user;

export default userSlice.reducer;
