import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

import type { ShipData } from "../../components/ShipBox";
import { getFightersData } from "../../helpers/dbHelpers";

export interface FightersState {
  data: { aircrafts: ShipData[] };
  status: "idle" | "loading" | "loaded" | "failed";
}

const initialState: FightersState = {
  data: { aircrafts: [] },
  status: "idle",
};

export const fetchDataAsync = createAsyncThunk(
  "aircrafts/fetchDataAsync",
  async () => {
    const response = await getFightersData();
    console.log("Response, ", response);
    return response;
  }
);

export const fightersSlice = createSlice({
  name: "aircrafts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDataAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchDataAsync.fulfilled, (state, action) => {
        state.status = "loaded";
        state.data.aircrafts = action.payload;
      })
      .addCase(fetchDataAsync.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const selectFighters = (state: RootState) => state.aircrafts.data;

export default fightersSlice.reducer;
