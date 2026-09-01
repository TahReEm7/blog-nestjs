"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbConfig = void 0;
exports.dbConfig = {
    port: 5432,
    host: "localhost",
    database: "blog",
    username: "blog",
    password: "password",
    schema: "public",
    type: 'postgres',
    entities: [],
    migrations: [],
    subscribers: [],
    url: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false,
    },
    autoLoadEntities: true,
    synchronize: true,
};
//# sourceMappingURL=dbConfig.js.map