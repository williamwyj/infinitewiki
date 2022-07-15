export interface ShipData {
  thumbnail: string;
  name: string;
  type: string;
  commandPoint: string;
  firePower: {
    antiShip: number;
    antiAir: number;
    seige: number;
  };
  basicStats: {
    hp: number;
    armor: number;
    cruise: number;
    warp: number;
  };
  combatRoles: {
    antiShip: string;
    antiAir: string;
    seige: string;
    support: string;
    survivability: string;
    strategic: string;
  };
}

export default function ShipBox(props: ShipData) {
  return (
    <tr>
      <td>
        <img src={props.thumbnail} alt={props.name} />
      </td>
      <td>{props.name}</td>
      <td>{props.type}</td>
      <td>{props.commandPoint}</td>
      <td>{props.firePower.antiShip}</td>
      <td>{props.firePower.antiAir}</td>
      <td>{props.firePower.seige}</td>
      <td>{props.basicStats.hp}</td>
      <td>{props.basicStats.armor}</td>
      <td>{props.basicStats.cruise}</td>
      <td>{props.basicStats.warp}</td>
      <td>{props.combatRoles.antiShip}</td>
      <td>{props.combatRoles.antiAir}</td>
      <td>{props.combatRoles.seige}</td>
      <td>{props.combatRoles.support}</td>
      <td>{props.combatRoles.survivability}</td>
      <td>{props.combatRoles.strategic}</td>
    </tr>
  );
}
