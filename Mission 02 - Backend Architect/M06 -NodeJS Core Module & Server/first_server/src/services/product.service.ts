import fs from "fs";
import type { IncomingMessage, ServerResponse } from "http";
import path from "path";

const getProduct = (req: IncomingMessage, res: ServerResponse) => {
  const filePath = path.join(process.cwd(), "./src/database/db.json");
  const result = fs.readFileSync(filePath, "utf-8");

  res
    .writeHead(200, {
      "Content-Type": "application/json",
    })
    .end(
      JSON.stringify({
        message: "Product Get Route",
        data: JSON.parse(result),
      }),
    );
};
export default getProduct;
