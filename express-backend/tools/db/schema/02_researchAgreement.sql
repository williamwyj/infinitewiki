DROP TABLE IF EXISTS researchAgreement;
CREATE TABLE IF NOT EXISTS researchAgreement (
  researchId INT NOT NULL PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  shipName varchar(20) NOT NULL,
  weightData smallint NOT NULL,
  industryFilter varchar(20) NULL,
  strategicFilter varchar(20) NULL,
  tacticalFilter varchar(20) NULL
)