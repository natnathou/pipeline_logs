import { ENVIRONMENT_TYPES } from './config.constant';
import { devConfig, globalConfig } from './index';

let envConfig;

switch (process.env.NODE_ENV) {
    default: {
        envConfig = devConfig;
        process.env.RUN_ENV = ENVIRONMENT_TYPES.DEVELOPMENT_LOCAL;
    }
}

const finalConfig = { ...globalConfig, ...envConfig };
export default () => finalConfig;
