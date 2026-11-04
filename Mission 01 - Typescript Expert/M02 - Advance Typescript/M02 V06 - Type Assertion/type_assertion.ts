type TStatus = "pending" | "approved" | "rejected";

const anotherStatus: string = "allowed";

const showStatus = (status: TStatus) => {
  console.log("Shown");
};

showStatus(anotherStatus as TStatus);

// non-null assertion
interface IConfig {
  port?: number;
}

const config: IConfig = {
  port: 3000,
};

const currentPort: number = config.port as number;

// constant assertion

const configuration = {
  port: 8000,
  prefix: "/api/v1",
} as const;
