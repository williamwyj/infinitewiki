import Navigation from "./Navigation";
import ShipBox from "./ShipBox";

export default function Fighter() {
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
        <table></table>
      </div>
    </>
  );
}
