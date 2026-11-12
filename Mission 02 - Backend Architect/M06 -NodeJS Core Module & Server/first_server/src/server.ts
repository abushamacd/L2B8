import { createServer, IncomingMessage, Server, ServerResponse } from "http";
import routeHandler from "./route/route";
const port = 5000;

const server: Server = createServer(
  (req: IncomingMessage, res: ServerResponse) => {
    routeHandler(req, res);
  },
);

server.listen(port, () => {
  console.log(`Server running on ${port}`);
});
