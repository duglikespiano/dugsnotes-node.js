import dotenv from 'dotenv';
dotenv.config({ debug: true, path: 'src/9_validation/.env' });

export const backendServerPort = process.env.BACKEND_SERVER_PORT;
