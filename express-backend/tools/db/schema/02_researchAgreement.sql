DROP TABLE IF EXISTS researchAgreement;
CREATE TABLE IF NOT EXISTS researchAgreement (
  researchId INT NOT NULL PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  shipName varchar(225) NOT NULL,
  weightData smallint NOT NULL,
  industryFilter varchar(225) NULL,
  strategicFilter varchar(225) NULL,
  tacticalFilter varchar(225) NULL
)