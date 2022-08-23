import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import {
  getResearchAgreement,
  getResearchAgreementFilters,
} from "../../helpers/dbHelpers";

export interface researchAgreementData {
  shipName: string;
  weightData: number;
  industryFilter: string;
  strategicFilter: string;
  tacticalFilter: string;
}

export interface researchAgreementFilter {
  filterName: string;
  filterType: string;
  difficulty: string;
}

export interface ResearchAgreementState {
  data: {
    researchAgreementData: researchAgreementData[];
    researchAgreementFilters: researchAgreementFilter[];
  };
  status: "idle" | "loading" | "loaded" | "failed";
}

const initialState: ResearchAgreementState = {
  data: { researchAgreementData: [], researchAgreementFilters: [] },
  status: "idle",
};

export const fetchDataAsync = createAsyncThunk(
  "researchAgreement/fetchDataAsync",
  async () => {
    let response;
    await Promise.all([
      getResearchAgreement(),
      getResearchAgreementFilters(),
    ]).then((values) => {
      response = values;
    });
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
        if (action.payload) {
          state.data.researchAgreementData = action.payload[0];
          state.data.researchAgreementFilters = action.payload[1];
        }
      })
      .addCase(fetchDataAsync.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const selectResearchAgreement = (state: RootState) =>
  state.researchAgreement.data;

export default researchAgreementSlice.reducer;
