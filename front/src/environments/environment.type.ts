export interface ApiHost {
  host: string;
  port: number;
  ssl: boolean;
}

export interface EnvironmentInterface {
  name: 'dev' | 'stg' | 'prod';
  production: boolean;
  api: ApiHost;
}
