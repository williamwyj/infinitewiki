import React, { useState, useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import {
  fetchDataAsync,
  selectResearchAgreement,
} from "./researchAgreementSlice";

import Navigation from "../../components/Navigation";

import type { researchAgreementData } from "./researchAgreementSlice";

export default function ResearchAgreement() {
  const dispatch = useAppDispatch();
  const researchAgreementDataInfo = useAppSelector(selectResearchAgreement);
  useEffect(() => {
    dispatch(fetchDataAsync());
  }, []);
  console.log("ResearchAgreementData, ", researchAgreementDataInfo);
  return (
    <div className='PageContainer PageResearchAgreement'>
      <Navigation />
    </div>
  );
}
