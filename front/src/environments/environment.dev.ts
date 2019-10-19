import { EnvironmentInterface } from './environment.type';

export const environment: EnvironmentInterface = {
  name: 'dev',
  production: true,
  api: {
    host: 'localhost',
    port: 3000,
    ssl: false,
  },
};
