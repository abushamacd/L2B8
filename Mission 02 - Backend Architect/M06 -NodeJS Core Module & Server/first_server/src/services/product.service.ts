import type { IncomingMessage, ServerResponse } from "http";
import path from "path";

const getProduct = (req: IncomingMessage, res: ServerResponse) => {
  const filePath = path.join(process.cwd(), "./src/database/db.json");

  console.log(filePath);
  res
    .writeHead(200, {
      "Content-Type": "application/json",
    })
    .end(JSON.stringify({ message: "Product Get Route" }));
};
export default getProduct;
