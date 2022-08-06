export interface ShipData {
  thumbnail: string;
  shipname: string;
  shiptype: string;
  commandpoint: string;
  firepowership: number;
  firepowerair: number;
  firepowerseige: number;
  hp: number;
  armor: number;
  cruise: number;
  warp: number;
  combatroleship: string;
  combatroleair: string;
  combatroleseige: string;
  combatrolesupport: string;
  combatrolesurvival: string;
  combatrolestrategic: string;
}

export default function ShipBox(props: ShipData) {
  return (
    <tr>
      <td>
        <img src={props.thumbnail} alt={props.shipname} />
      </td>
      <td>{props.shipname}</td>
      <td>{props.shiptype}</td>
      <td>{props.commandpoint}</td>
      <td>{props.firepowership}</td>
      <td>{props.firepowerair}</td>
      <td>{props.firepowerseige}</td>
      <td>{props.hp}</td>
      <td>{props.armor}</td>
      <td>{props.cruise}</td>
      <td>{props.warp}</td>
      <td>{props.combatroleship}</td>
      <td>{props.combatroleair}</td>
      <td>{props.combatroleseige}</td>
      <td>{props.combatrolesupport}</td>
      <td>{props.combatrolesurvival}</td>
      <td>{props.combatrolestrategic}</td>
    </tr>
  );
}
