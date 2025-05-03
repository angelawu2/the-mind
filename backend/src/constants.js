import { config } from "@dotenvx/dotenvx";

config({ path: './backend/.env' });

const HOST = process.env.HOST;
const PORT = process.env.PORT;
const CLIENT_PORT = process.env.CLIENT_PORT;

export {
    HOST,
    PORT,
    CLIENT_PORT,
}
