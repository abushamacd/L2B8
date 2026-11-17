import express, { Request, Response } from "express";
import { Pool } from "pg";
const app = express();
const port = 5000;

const pool = new Pool({
  connectionString:
    "postgresql://neondb_owner:npg_sj9RkW6ZdbrS@ep-steep-darkness-a1xu95wl-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require",
});

console.log(pool);

app.get("/", (req: Request, res: Response) => {
  console.log(req);
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
