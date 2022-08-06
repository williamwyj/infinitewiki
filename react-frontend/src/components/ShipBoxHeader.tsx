import "./ShipBoxHeader.scss";

export default function ShipBoxHeader() {
  return (
    <>
      <tr className='ship-data-heading'>
        <th rowSpan={2}>Thumbail</th>
        <th rowSpan={2}>Name</th>
        <th rowSpan={2}>Type</th>
        <th rowSpan={2}>
          <img src='/logos/CommandPointLogo.webp' alt='Command Point' />
        </th>
        <th colSpan={3}>
          <div>Firepower stats</div>
        </th>
        <th colSpan={4}>
          <div>Basic Stats</div>
        </th>
        <th colSpan={6}>
          <div>Rating</div>
        </th>
      </tr>
      <tr className='ship-data-heading'>
        <th className='subheading-heading'>
          <img
            src='/logos/AntiShipIcon.webp'
            alt='AntiShipFire'
            className='subheading-icon'
          />
        </th>
        <th className='subheading-heading'>
          <img
            src='/Logos/AntiAirIcon.webp'
            alt='AntiAirFire'
            className='subheading-icon'
          />
        </th>
        <th className='subheading-heading'>
          <img
            src='/Logos/SiegeDamageIcon.png'
            alt='SeigeFire'
            className='subheading-icon'
          />
        </th>
        <th className='subheading-heading'>
          <img
            src='/Logos/HitPointsIcon.webp'
            alt='HP'
            className='subheading-icon'
          />
        </th>
        <th className='subheading-heading'>
          <img
            src='/Logos/ArmorIcon.webp'
            alt='armor'
            className='subheading-icon'
          />
        </th>
        <th className='subheading-heading'>
          <img
            src='/Logos/CruiseIcon.webp'
            alt='cruise'
            className='subheading-icon'
          />
        </th>
        <th className='subheading-heading'>
          <img
            src='/Logos/WarpIcon.webp'
            alt='warp'
            className='subheading-icon'
          />
        </th>
        <th className='subheading-heading'>
          <img
            src='/logos/AntiShipIcon.webp'
            alt='AntiShipFire'
            className='subheading-icon'
          />
        </th>
        <th className='subheading-heading'>
          <img
            src='/Logos/AntiAirIcon.webp'
            alt='AntiAirFire'
            className='subheading-icon'
          />
        </th>
        <th className='subheading-heading'>
          <img
            src='/Logos/SiegeDamageIcon.png'
            alt='SeigeFire'
            className='subheading-icon'
          />
        </th>
        <th className='subheading-heading'>
          <img
            src='/Logos/SupportIcon.png'
            alt='Support'
            className='subheading-icon'
          />
        </th>
        <th className='subheading-heading'>
          <img
            src='/Logos/ArmorIcon.webp'
            alt='Defensive'
            className='subheading-icon'
          />
        </th>
        <th className='subheading-heading'>
          <img
            src='/Logos/StrategicIcon.png'
            alt='Strategic'
            className='subheading-icon'
          />
        </th>
      </tr>
    </>
  );
}
