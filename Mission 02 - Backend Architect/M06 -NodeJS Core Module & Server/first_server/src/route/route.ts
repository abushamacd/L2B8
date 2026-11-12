import type { IncomingMessage, ServerResponse } from "http";
import productController from "../controller/productController";

const routeHandler = (req: IncomingMessage, res: ServerResponse) => {
  if (req.url === "/" && req.method === "GET") {
    res
      .writeHead(200, {
        "Content-Type": "application/json",
      })
      .end(JSON.stringify({ message: "Server Root Route" }));
  } else if (req.url?.startsWith("/products")) {
    productController(req, res);
  } else {
    res
      .writeHead(200, {
        "Content-Type": "application/json",
      })
      .end(JSON.stringify({ message: "Route not found" }));
  }
};

export default routeHandler;
