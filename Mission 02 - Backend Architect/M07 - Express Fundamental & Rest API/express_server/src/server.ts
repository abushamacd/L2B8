import express, { Request, Response } from "express";
import { Pool } from "pg";
const app = express();
const port = 5000;

const pool = new Pool({
  connectionString:
    "postgresql://neondb_owner:npg_sj9RkW6ZdbrS@ep-steep-darkness-a1xu95wl-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=false&channel_binding=require",
});

console.log(pool);

const initDB = async () => {
  try {
    await pool.query(`
        CREATE Table users(
        id SERIAL PRIMARY KEY,
        name VARCHAR(255),
        email VARCHAR(255) NOT NULL,
        password VARCHAR(255) NOT NULL,
        age INT,
        is_Active BOOLEAN DEFAULT true,

        created_at TIMESTAMP DEFAULT NOW(),
        updated_at TIMESTAMP DEFAULT NOW()
        );
      `);

    console.log(`Database connected`);
  } catch (error) {
    console.error(error);
  }
};

initDB();

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
