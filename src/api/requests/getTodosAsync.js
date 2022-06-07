import { createAsyncThunk } from "@reduxjs/toolkit";

export const getTodosAsync = createAsyncThunk(
  'todos/getTodosAsync',
  async () => {
    const resp = await fetch(process.env.REACT_APP_URL);

    if (resp.ok) {
      const todos = await resp.json();
      //console.log(todos);
      return { todos };
    }
  }
);
