// action creators => function
export const addTodo = (props) => {
  return {
    type: "todoList/addTodo",
    payload: props,
  };
};
export const toggleTodostatus = (props) => {
  return {
    type: "todoList/toggleTodostatus",
    payload: props,
  };
};
export const searchFilterChange = (props) => {
  return {
    type: "filter/searchFilterChange",
    payload: props,
  };
};
export const statusFilterChange = (props) => {
  return {
    type: "filter/statusFilterChange",
    payload: props,
  };
};
export const priorityFilterChange = (props) => {
  return {
    type: "filter/priorityFilterChange",
    payload: props,
  };
};
