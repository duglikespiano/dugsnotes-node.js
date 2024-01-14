import dotenv from 'dotenv';
dotenv.config({ debug: true, path: 'src/10_error_handling/.env' });

export const backendServerPortNumber = process.env.BACKEND_SERVER_PORT_NUMBER;
