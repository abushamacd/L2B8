import { createServer } from "http";
const port = 5000;

const server = createServer((req, res) => {
  console.log(req);
});

server.listen(port, () => {
  console.log(`Server running on ${port}`);
});
