DROP TABLE IF EXISTS aircrafts;
CREATE TABLE IF NOT EXISTS aircrafts (
  ship_id INT NOT NULL PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  thumbnail varchar(200) NOT NULL,
  shipName varchar(50) NOT NULL,
  shipType varchar(50) NOT NULL,
  commandPoint smallint NULL,
  firePowerShip smallint NULL,
  firePowerAir smallint NULL,
  firePowerSeige smallint NULL,
  hp smallint NULL,
  armor smallint NULL,
  cruise smallint NULL,
  warp smallint NULL,
  combatRoleShip varchar(3) NULL,
  combatRoleAir varchar(3) NULL,
  combatRoleSeige varchar(3) NULL,
  combatRoleSupport varchar(3) NULL,
  combatRoleSurvival varchar(3) NULL,
  combatRoleStrategic varchar(3) NULL
);