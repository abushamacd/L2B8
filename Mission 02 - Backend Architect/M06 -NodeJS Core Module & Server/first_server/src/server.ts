import { createServer, IncomingMessage, Server, ServerResponse } from "http";
const port = 5000;

const server: Server = createServer(
  (req: IncomingMessage, res: ServerResponse) => {
    if (req.url === "/" && req.method === "GET") {
      res
        .writeHead(200, {
          "Content-Type": "application/json",
        })
        .end(JSON.stringify({ message: "Server Root Route" }));
    } else if (req.url?.startsWith("/products")) {
      res
        .writeHead(200, {
          "Content-Type": "application/json",
        })
        .end(JSON.stringify({ message: "Product Route" }));
    } else {
      res
        .writeHead(200, {
          "Content-Type": "application/json",
        })
        .end(JSON.stringify({ message: "Route not found" }));
    }
  },
);

server.listen(port, () => {
  console.log(`Server running on ${port}`);
});
