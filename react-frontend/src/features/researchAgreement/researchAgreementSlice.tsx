import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { getResearchAgreement } from "../../helpers/dbHelpers";

export interface researchAgreementData {
  shipName: string;
  weightData: number;
  industryFilter: string;
  strategicFilter: string;
  tacticalFilter: string;
}

export interface ResearchAgreementState {
  data: { researchAgreement: researchAgreementData[] };
  status: "idle" | "loading" | "loaded" | "failed";
}

const initialState: ResearchAgreementState = {
  data: { researchAgreement: [] },
  status: "idle",
};

export const fetchDataAsync = createAsyncThunk(
  "researchAgreement/fetchDataAsync",
  async () => {
    const response = await getResearchAgreement();
    console.log("Response, ", response);
    return response;
  }
);

export const researchAgreementSlice = createSlice({
  name: "researchAgreement",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDataAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchDataAsync.fulfilled, (state, action) => {
        state.status = "loaded";
        state.data.researchAgreement = action.payload;
      })
      .addCase(fetchDataAsync.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const selectResearchAgreement = (state: RootState) =>
  state.researchAgreement.data;

export default researchAgreementSlice.reducer;
