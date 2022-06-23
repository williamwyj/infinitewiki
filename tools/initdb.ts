import dotenv from "dotenv";
import fs from "fs-extra";
import { Client } from "pg";

const init = async () => {
  //read environment variables
  dotenv.config();
  //create an instance of the PostgreSQL client
  let dbParams = {};
  if (process.env.PG_URL) {
    dbParams = {
      connectionString: process.env.PG_URL
    }
  } else {
    dbParams = {
      host: process.env.PGHOST,
      port: process.env.PGPORT,
      user: process.env.PGUSER,
      password: process.env.PGPASSWORD,
      database: process.env.PGDATABASE
    };
  }

  const client = new Client(dbParams);
  
  try {
    // connect to the local database server
    await client.connect();
    
    // Loads the schema files from db/schema
    console.log(`-> Loading Schema Files ...`);
    const schemaFilenames = await fs.readdir('./tools/db/schema');

    for (const fn of schemaFilenames) {
      const sql = await fs.readFile(`./tools/db/schema/${fn}`, 'utf8');
      console.log(`\t-> Running ${fn}`);
      await client.query(sql);
    }
    // Loads seed files from db/seeds
    console.log(`-> Loading Seeds ...`);
    const seedFilenames = fs.readdirSync('./tools/db/seeds');
    
    for (const fn of seedFilenames) {
      const sql = await fs.readFile(`./tools/db/seeds/${fn}`, 'utf8');
      console.log(`\t-> Running ${fn}`);
      await client.query(sql);
    }

  } catch (err) {
    console.log(err);
    throw err;
  } finally {

    await client.end();
  }
};

init().then(() => {
  console.log("finished")
}).catch(() => {
  console.log("finished with errors");
});