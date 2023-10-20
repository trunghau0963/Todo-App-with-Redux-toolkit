// import { createSelector } from "reselect";
// export const todoListSelector = (state) => state.todoList;
// // export const todoListSelector = (state) => {
// //     const todoList = state.todoList.filter((todo) => {
// //         return todo.name.includes(state.filter.search)
// //     })

// //     return todoList
// // }
// export const filterSelector = (state) => state.filter.search;
// export const filterStatus = (state) => state.filter.status;
// export const filterPriority = (state) => state.filter.priority;

// export const todoRemainingSelector = createSelector(
//   todoListSelector,
//   filterStatus,
//   filterPriority,
//   filterSelector,
//   (todoList, status, priorities, searchText) => {
//     return todoList.filter((todo) => {
//       if (status === "All") {
//         return priorities.length
//           ? todo.name.includes(searchText) && priorities.includes(todo.priority)
//           : todo.name.includes(searchText);
//       }
//       return (
//         todo.name.includes(searchText) &&
//         (status !== "All" && status === "Completed"
//           ? todo.completed
//           : !todo.completed) &&
//         (priorities.length ? priorities.includes(todo.priority) : true)
//       );
//     });
//   }
// );

//redux-toolkits
import { createSelector } from "@reduxjs/toolkit";
export const todoListSelector = (state) => state.todoList;
// export const todoListSelector = (state) => {
//     const todoList = state.todoList.filter((todo) => {
//         return todo.name.includes(state.filter.search)
//     })

//     return todoList
// }
export const filterSelector = (state) => state.filter.search;
export const filterStatus = (state) => state.filter.status;
export const filterPriority = (state) => state.filter.priority;

export const todoRemainingSelector = createSelector(
  todoListSelector,
  filterStatus,
  filterPriority,
  filterSelector,
  (todoList, status, priorities, searchText) => {
    return todoList.filter((todo) => {
      if (status === "All") {
        return priorities.length
          ? todo.name.includes(searchText) && priorities.includes(todo.priority)
          : todo.name.includes(searchText);
      }
      return (
        todo.name.includes(searchText) &&
        (status !== "All" && status === "Completed"
          ? todo.completed
          : !todo.completed) &&
        (priorities.length ? priorities.includes(todo.priority) : true)
      );
    });
  }
);

