import * as express from "express";
import pgPromise, { ParameterizedQuery } from "pg-promise";

export const register = (app: express.Application) => {
  const oidc = app.locals.oidc;
  const port = parseInt(process.env.PGPORT || "5440", 10);
  const config = {
    database: process.env.PGDATABASE || "postgres",
    host: process.env.PGHOST || "Localhost",
    port,
    user: process.env.PGUSER || "postgres"
  };
  const pgp = pgPromise();
  const db = pgp(config);

  app.get('/api/guitars/all', oidc.ensureAuthenticated(), async (req: any, res) => {
    try {
      const userId = req.userContext.userinfo.sub;
      const guitars = await db.any(`
        SELECT id, brand, model, year, color FROM guitars WHERE user_id = $1 ORDER by year, brand, model`, [userId]
      );
      return res.json(guitars);
    } catch (err) {
      console.log(err);
      res.json({ error: err.message || err });
    };
  });

  app.get('/api/aircrafts', oidc.ensureAuthenticated(), async (req: any, res) => {
    try {
      const aircrafts = await db.any(`
        SELECT * FROM aircrafts`
      );
      return res.json(aircrafts);
    } catch (err) {
      console.log(err);
      res.json({ error: err.message || err });
    };
  });

  app.get('/api/aircrafts/fighters', oidc.ensureAuthenticated(), async (req: any, res) => {
    try {
      const fighters = await db.any(`
        SELECT * FROM aircrafts WHERE aircraftType = 'fighter'`
      );
      return res.json(fighters);
    } catch (err) {
      console.log(err);
      res.json({ error: err.message || err });
    };
  });

  app.get('/api/researchAgreement', async (req: any, res) => {
    try {
      const researchAgreement = await db.any(`
        SELECT * FROM researchAgreement
      `)
      return res.json(researchAgreement);
    } catch (err) {
      console.log(err);
      res.json({ error: err.message || err });
    }
  })

  app.get('/api/researchAgreementFilters', async (req: any, res) => {
    try {
      const researchAgreementFilters = await db.any(`
        SELECT * FROM researchAgreementFilters
      `)
      return res.json(researchAgreementFilters);
    } catch (err) {
      console.log(err);
      res.json({ error: err.message || err });
    }
  })
};