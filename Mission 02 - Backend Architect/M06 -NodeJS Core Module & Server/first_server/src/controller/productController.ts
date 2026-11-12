import type { IncomingMessage, ServerResponse } from "http";

const productController = (req: IncomingMessage, res: ServerResponse) => {
  res
    .writeHead(200, {
      "Content-Type": "application/json",
    })
    .end(JSON.stringify({ message: "Product Route" }));
};

export default productController;
