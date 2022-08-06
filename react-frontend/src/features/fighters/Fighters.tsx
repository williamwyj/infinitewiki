import React, { useState, useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { fetchDataAsync, selectFighters } from "./fightersSlice";

import Navigation from "../../components/Navigation";
import ShipBox from "../../components/ShipBox";
import ShipBoxHeader from "../../components/ShipBoxHeader";
import "./Fighters.scss";

import type { ShipData } from "../../components/ShipBox";

export default function Aircrafts() {
  const dispatch = useAppDispatch();

  // const [AircraftsData, setAircraftsData] = useState([]);
  const aircraftsData = useAppSelector(selectFighters);
  // console.log("aircraftsData, ", aircraftsData);

  useEffect(() => {
    dispatch(fetchDataAsync());
  }, []);

  return (
    <div className='PageContainer PageFighters'>
      <Navigation />
      <div>
        <p>
          Fighters are the smallest class of Warship in the game. Fighters,
          along with corvettes, use don't use regular command points but are
          instead limited to a certain number of ships. They cannot be used
          until the faction completes the Aircraft Assembly Line as part of
          Expansion zone 5.
        </p>
        <p>
          There are some things that all fighter models have in common. There is
          only one variant for each model (variant A). Even though command
          points are not relevant, fighters are all one command point each.
          While fighters have a listed value for cruise and warp speed, they are
          not able to travel independently, so those values are irrelevant.
        </p>
      </div>
      <div>
        <table className='ship-list-table'>
          <thead>
            <ShipBoxHeader />
          </thead>
          <tbody>
            {aircraftsData.aircrafts.map((shipInfo: ShipData, index) => {
              return (
                <ShipBox
                  thumbnail={shipInfo.thumbnail}
                  shipname={shipInfo.shipname}
                  shiptype={shipInfo.shiptype}
                  commandpoint={shipInfo.commandpoint}
                  firepowership={shipInfo.firepowership}
                  firepowerair={shipInfo.firepowerair}
                  firepowerseige={shipInfo.firepowerseige}
                  hp={shipInfo.hp}
                  armor={shipInfo.armor}
                  cruise={shipInfo.cruise}
                  warp={shipInfo.warp}
                  combatroleship={shipInfo.combatroleship}
                  combatroleair={shipInfo.combatroleair}
                  combatroleseige={shipInfo.combatroleseige}
                  combatrolesupport={shipInfo.combatrolesupport}
                  combatrolesurvival={shipInfo.combatrolesurvival}
                  combatrolestrategic={shipInfo.combatrolestrategic}
                  key={index}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
