import { createSlice } from "@reduxjs/toolkit";

import { getTodosAsync } from "api/requests/getTodosAsync";
import { addTodoAsync } from "api/requests/addTodoAsync";
import { toggleCompleteAsync } from "api/requests/toggleCompleteAsync";
import { deleteTodoAsync } from "api/requests/deleteTodoAsync";

const todoSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {},
  extraReducers: {
    [getTodosAsync.fulfilled]: (state, action) => {
      return (action.payload.todos).reverse();
    },
    [addTodoAsync.fulfilled]: (state, action) => {
      state.unshift(action.payload.todo);
    },
    [toggleCompleteAsync.fulfilled]: (state, action) => {
      const index = state.findIndex(
        (todo) => todo.id === action.payload.todo.id
      );
      state[index].completed = action.payload.todo.completed;
    },
    [deleteTodoAsync.fulfilled]: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload.id);
    },
  },
});

export const { addTodo, toggleTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;