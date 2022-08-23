import React, { useState, useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import {
  fetchDataAsync,
  selectResearchAgreement,
} from "./researchAgreementSlice";
import "./ResearchAgreement.scss";
import Navigation from "../../components/Navigation";

import type {
  researchAgreementData,
  researchAgreementFilter,
} from "./researchAgreementSlice";

export default function ResearchAgreement() {
  const dispatch = useAppDispatch();
  const researchAgreementDataInfo = useAppSelector(selectResearchAgreement);
  useEffect(() => {
    dispatch(fetchDataAsync());
  }, []);
  // console.log("ResearchAgreementData, ", researchAgreementDataInfo);
  const [phaseDropdown, setPhaseDropdown] = useState([
    "empty",
    "empty",
    "empty",
  ]);
  return (
    <div className='PageContainer PageResearchAgreement'>
      <Navigation />
      <div>
        <table className='research-agreement-table'>
          <thead>
            <tr>
              <th colSpan={5}>Search by Phase to see Blueprints choice</th>
            </tr>
            <tr className='research-agreement-heading'>
              <th colSpan={2}></th>
              <th>Difficulty</th>
              <th>Time Phases (h)</th>
              <th>Time Phases (d)</th>
            </tr>
          </thead>
          <tbody>
            {phaseDropdown.map((phase, index) => {
              return (
                <tr key={index}>
                  <td>Phase {index + 1}</td>
                  <td>{phase}</td>
                  <td>Difficulty</td>
                  <td>Time hour</td>
                  <td>Time day</td>
                </tr>
              );
            })}
            {/* <td>Phase 1</td>
              <td>
                <div className='researchAgreementDropdown'>
                  <button className='dropbtn'>
                    {phaseDropdown.phaseOne}
                  </button>
                  <div className='dropdownMenu'>
                    <a href='#'>Link 1</a>
                  </div>
                </div>
              </td>
              <td>Difficulty</td>
              <td>Time hour</td>
              <td>Time day</td> */}
          </tbody>
        </table>
      </div>
    </div>
  );
}
