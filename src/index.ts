import express from "express";
import dotenv from "dotenv";
import path from "path";

import * as sessionAuth from "./middleware/sessionAuth"
import * as routes from "./routes";

dotenv.config();

const app = express();

app.use(express.json());

const port = process.env.SERVER_PORT;

sessionAuth.register(app);

routes.register(app);


// app.get("/", (req, res) => {
//   res.send("Hello");
// });

app.listen(port, () => {
  console.log(`server starter at http://localhost:${port}`);
});
