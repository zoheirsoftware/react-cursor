import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  isloading: false,
  isFetching:false,
  users: [],
  error: "",
};

export const getUsers = createAsyncThunk("user/getUsers", async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    return await res.json();

//   return new Promise((resolve, reject) => {
//     fetch("https://jsonplaceholder.typicode.com/users").then(res=>res.json())
//     .then(res=>{
//         setTimeout(() => {
//             resolve(res)
//         }, 10000);
//     })
//   });
});

const usersSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getUsers.pending, (state) => {
        if( state.users.length>0){
            state.isFetching = true;
        }
        else{
            state.isFetching = true;
            state.isloading = true;
        }
    
    });

    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.isloading = false;
      state.isFetching = false;
      state.users = action.payload;
      state.error = "";
    });

    builder.addCase(getUsers.rejected, (state, action) => {
      state.isloading = false;
      state.users = [];
      state.error = action.error.message;
    });
  },
});

export default usersSlice.reducer;
