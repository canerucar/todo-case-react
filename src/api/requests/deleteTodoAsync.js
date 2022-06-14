import { createAsyncThunk } from "@reduxjs/toolkit";

export const deleteTodoAsync = createAsyncThunk(
  'todos/deleteTodoAsync',
  async (payload) => {
    const resp = await fetch(`${process.env.REACT_APP_URL}/${payload.id}`, {
      method: 'DELETE',
    });

    if (resp.ok) {
      return { id: payload.id };
    }
  }
);