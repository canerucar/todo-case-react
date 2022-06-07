import { createAsyncThunk } from "@reduxjs/toolkit";

export const addTodoAsync = createAsyncThunk(
  'todos/addTodoAsync',
  async (payload) => {
    const resp = await fetch(process.env.REACT_APP_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id: payload.id, title: payload.title, completed: payload.completed }),
    });

    if (resp.ok) {
      const todo = await resp.json();
      return { todo };
    }
  }
);