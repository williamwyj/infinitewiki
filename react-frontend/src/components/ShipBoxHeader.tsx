import "./ShipBoxHeader.scss";

export default function ShipBoxHeader() {
  return (
    <tr>
      <th>Thumbail</th>
      <th>Name</th>
      <th>Type</th>
      <th>Command Point</th>
      <th>
        <div>Firepower stats</div>
        <div>
          <div>Anti Ship</div>
          <div>Anti Air</div>
          <div>Seige</div>
        </div>
      </th>
    </tr>
  );
}
