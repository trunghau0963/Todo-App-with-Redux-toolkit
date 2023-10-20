// const initState = {
//   search: "",
//   status: "All",
//   priority: [],
// };
// const filterReducer = (state = initState, action) => {
//   switch (action.type) {
//     case "filter/searchFilterChange":
//       return {
//         ...state,
//         search: action.payload,
//       };
//     case "filter/statusFilterChange":
//       return {
//         ...state,
//         status: action.payload,
//       };
//     case "filter/priorityFilterChange":
//       return {
//         ...state,
//         priority: action.payload,
//       };
//     default:
//       return state;
//   }
// };

// export default filterReducer;

//toolkit
import { createSlice } from "@reduxjs/toolkit";
export const filterSlice = createSlice({
  name: "filter",
  initialState: {
    search: "",
    status: "All",
    priority: [],
  },
  // tu dong tao type theo name/reducers => vd: filter/searchFilterChange
  reducers: {
    searchFilterChange: (state, action) => {
      // redux co cai dat 1 cai goi la IMMER// du la viet code mutation nhung that chac no hoat dong immutation
      state.search = action.payload; // hoat dong nhu immutation  
    },
    statusbarFilterChange: (state, action) => {
      state.status = action.payload;
    },
    priorityFilterChange: (state, action) => {
      state.priority = action.payload;
    },
  },
});
