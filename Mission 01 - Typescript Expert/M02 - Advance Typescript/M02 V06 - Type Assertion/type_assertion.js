const anotherStatus = "allowed";
const showStatus = (status) => {
    console.log("Shown");
};
showStatus(anotherStatus);
const config = {
    port: 3000,
};
const currentPort = config.port;
// constant assertion
const configuration = {
    port: 8000,
    prefix: "/api/v1",
};
export {};
