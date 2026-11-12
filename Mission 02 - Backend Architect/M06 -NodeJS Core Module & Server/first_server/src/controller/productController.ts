import type { IncomingMessage, ServerResponse } from "http";
import getProduct from "../services/product.service";

const productController = (req: IncomingMessage, res: ServerResponse) => {
  if (req.method === "GET") {
    getProduct(req, res);
  }
};

export default productController;
