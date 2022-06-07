import { createAsyncThunk } from "@reduxjs/toolkit";

export const toggleCompleteAsync = createAsyncThunk(
  'todos/completeTodoAsync',
  async (payload) => {
    const resp = await fetch(`${process.env.REACT_APP_URL}/${payload.id}`, {
      method: 'PATCH',
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