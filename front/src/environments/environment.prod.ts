import { EnvironmentInterface } from './environment.type';

export const environment: EnvironmentInterface = {
  name: 'prod',
  production: true,
  api: {
    host: 'hoge',
    port: 8000,
    ssl: true,
  },
};
