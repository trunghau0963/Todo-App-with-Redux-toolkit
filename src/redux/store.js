// import { createStore} from 'redux'
// import rootReducer from './reducer';
// import { composeWithDevTools } from 'redux-devtools-extension'; // middleware 
import { configureStore } from '@reduxjs/toolkit';
import { filterSlice } from '../components/Filters/filtersSlide';
import { todoListSlide } from '../components/TodoList/todoSlide';

// const composeEnhancer = composeWithDevTools();

// const store = createStore(rootReducer, composeEnhancer)
const store = configureStore({
  reducer: {
    filter: filterSlice.reducer,
    todoList: todoListSlide.reducer,
  },
});


export default store;
