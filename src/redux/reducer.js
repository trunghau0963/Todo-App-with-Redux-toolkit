import { combineReducers } from "redux";
import todoListReducer from "../components/TodoList/todoReducer";
import filterReducer from "../components/Filters/filtersReducer";

// const rootReducer = (state = {}, action) => {
//   // kiem tra action.type hien tai dang lam gi
//   /*
//         {
//             type: 'todolist/addTodo',
//             payload: { id: 5, .... }
//         }
//      */
//   // console.log({state, action})
//   return {
//     filter: filterReducer(state.filter, action),
//     todoList: todoListReducer(state.todoList, action),
//   };
// };

const rootReducer = combineReducers({
  filter: filterReducer,
  todoList: todoListReducer,
});

export default rootReducer;
