// const initState = [
//   { id: 1, name: "Yoga", completed: false, priority: "Medium" },
//   { id: 2, name: "Redux", completed: false, priority: "High" },
//   { id: 3, name: "Nextjs", completed: true, priority: "Low" },
// ];
// const todoListReducer = (state = initState, action) => {
//   switch (action.type) {
//     case "todoList/addTodo":
//       return [...state, action.payload];
//     case "todoList/toggleTodostatus":
//       return state.map((todo) =>
//         todo.id === action.payload
//           ? {
//               ...todo,
//               completed: !todo.completed,
//             }
//           : todo
//       );
//     default:
//       return state;
//   }
// };

// export default todoListReducer;

import { createSlice } from "@reduxjs/toolkit";
export const todoListSlide = createSlice({
  name: "todoList",
  initialState: [
    { id: 1, name: "Yoga", completed: false, priority: "Medium" },
    { id: 2, name: "Redux", completed: false, priority: "High" },
    { id: 3, name: "Nextjs", completed: true, priority: "Low" },
  ],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    }, // action creators
    toggleTodostatus: (state, action) => {
      const currentTodo = state.find((todo) => todo.id === action.payload);
      if (currentTodo) {
        currentTodo.completed = !currentTodo.completed;
      }
    },
  },
});
