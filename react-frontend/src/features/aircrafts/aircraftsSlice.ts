import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../app/store';

import type { ShipData } from '../../components/ShipBox'
import { getAircraftsData } from '../../helpers/dbHelpers'

export interface AircraftsState {
  data : {aircrafts : ShipData[]}
  status: 'idle' | 'loading' | 'loaded' | 'failed';
}

const initialState: AircraftsState = {
  data: { aircrafts: [] },
  status: 'idle'
}

export const fetchDataAsync = createAsyncThunk(
  'aircrafts/fetchDataAsync',
  async () => {
    const response = await getAircraftsData();
    console.log("Response, ", response)
    return response;
  }
)

export const aircraftsSlice = createSlice({
  name: 'aircrafts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDataAsync.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchDataAsync.fulfilled, (state, action) => {
        state.status = 'loaded';
        state.data.aircrafts = action.payload;
      })
      .addCase(fetchDataAsync.rejected, (state) => {
        state.status = 'failed';
      })
  }
})

export const selectAircrafts = (state: RootState) => state.aircrafts.data;

export default aircraftsSlice.reducer;