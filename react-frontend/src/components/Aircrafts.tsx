import React, { useState, useEffect } from "react";

import Navigation from "./Navigation";
import ShipBox from "./ShipBox";
import ShipBoxHeader from "./ShipBoxHeader";
import "./Aircrafts.scss";

import { getAircraftsData } from "../helpers/dbHelpers";

import type { ShipData } from "./ShipBox";
// let shipInfos: ShipData[] = [
//   {
//     thumbnail:
//       "https://static.wikia.nocookie.net/infinite-lagrange/images/0/08/A101theRationalVarASystem.png",
//     name: "A101 the Rational",
//     type: "Generic",
//     commandPoint: "1",
//     firePower: {
//       antiShip: 1230,
//       antiAir: 384,
//       seige: 60,
//     },
//     basicStats: {
//       hp: 3750,
//       armor: 0,
//       cruise: 3000,
//       warp: 15000,
//     },
//     combatRoles: {
//       antiShip: "A",
//       antiAir: "B",
//       seige: "C",
//       support: "A",
//       survivability: "B",
//       strategic: "C",
//     },
//   },
//   {
//     thumbnail:
//       "https://static.wikia.nocookie.net/infinite-lagrange/images/c/ca/Fighter_b192-newland.png",
//     name: "B192 Newland",
//     type: "Multi-Role",
//     commandPoint: "1",
//     firePower: {
//       antiShip: 600,
//       antiAir: 600,
//       seige: 90,
//     },
//     basicStats: {
//       hp: 4290,
//       armor: 0,
//       cruise: 3000,
//       warp: 15000,
//     },
//     combatRoles: {
//       antiShip: "C",
//       antiAir: "A",
//       seige: "B",
//       support: "B",
//       survivability: "C",
//       strategic: "A",
//     },
//   },
// ];

export default function Aircrafts() {
  const [AircraftsData, setAircraftsData] = useState([]);

  useEffect(() => {
    getAircraftsData().then((data) => {
      console.log(data);
      setAircraftsData(data);
    });
  }, []);

  return (
    <>
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
        <table className='fighter-list-table'>
          <thead>
            <ShipBoxHeader />
          </thead>
          <tbody>
            {AircraftsData.map((shipInfo: ShipData, index) => {
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
    </>
  );
}
