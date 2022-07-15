import "./ShipBoxHeader.scss";

export default function ShipBoxHeader() {
  return (
    <th>
      <td>Thumbail</td>
      <td>Name</td>
      <td>Type</td>
      <td>Command Point</td>
      <td>
        <div>Firepower stats</div>
        <div>
          <div>Anti Ship</div>
          <div>Anti Air</div>
          <div>Seige</div>
        </div>
      </td>
    </th>
  );
}
