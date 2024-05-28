import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

//  Create action
// export const createUser = createAsyncThunk(
//   "createUser",
//   async (data, { rejectWithValue }) => {
//     const response = await fetch(
//       "https://6654056e1c6af63f467624aa.mockapi.io/Crud",
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(data),
//       }
//     );
//     try {
//       const result = await response.json();
//       return result;
//     } catch (error) {
//       rejectWithValue(error);
//     }
//   }
// );
// Create action with improved error handling
export const createUser = createAsyncThunk(
  "createUser",
  async (data, { rejectWithValue }) => {
    try {
      const response = await fetch(
        "https://6654056e1c6af63f467624aa.mockapi.io/Crud",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }
      );

      if (!response.ok) {
        throw new Error(`Error creating user: ${await response.text()}`);
      }

      const result = await response.json();
      return result;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const userDetail = createSlice({
  name: "userDetail",
  initialState: {
    users: [],
    loading: false,
    error: null,
  },
  // extraReducers: {
  //   [createUser.pending]: (state) => {
  //     state.loading = true;
  //   },
  //   [createUser.fulfilled]: (state, action) => {
  //     state.loading = false;
  //     state.users.push(action.payload);
  //   },
  //   [createUser.rejected]: (state, action) => {
  //     state.loading = false;
  //     state.users = action.payload;
  //   },
  // },
  extraReducers: (builder) => {
    builder
      .addCase(createUser.pending, (state) => {
        state.loading = true;
        state.error = null; // Reset error on new request
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users.push(action.payload);
      })
      .addCase(createUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload; // Set error from rejected promise
      });
  },
});

export default userDetail.reducer;
