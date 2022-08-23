DROP TABLE IF EXISTS researchAgreementFilters;
CREATE TABLE IF NOT EXISTS researchAgreementFilters (
  researchFilterId INT NOT NULL PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  filterName varchar(225) NOT NULL,
  filterType varchar(225) NOT NULL,
  difficulty smallint NOT NULL
)