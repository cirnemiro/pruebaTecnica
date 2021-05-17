import dotenv from 'dotenv'
dotenv.config()

export const {
    NODE_ENV = 'development',
    MONGO_DB_URL_PRODUCTION,
    MONGO_DB_URL_DEVELOPMENT,
    PORT = 4000
} = process.env

export const baseConfig = {
    app: {
        port: PORT || 4000,
    },
    client: {
        url: process.env.CLIENT_URL || 'http://localhost:3000',
    }
}

export const config = {
    development: {
        ...baseConfig,
        db: {
            url: MONGO_DB_URL_DEVELOPMENT
        }
    },
    production: {
        ...baseConfig,
        db: {
            url: MONGO_DB_URL_PRODUCTION
        }
    }
}

export default config[NODE_ENV]