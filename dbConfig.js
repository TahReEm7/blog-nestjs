"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbConfig = void 0;
require("dotenv/config");
exports.dbConfig = {
    type: 'postgres',
    url: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false,
    },
    autoLoadEntities: true,
    synchronize: true,
};
//# sourceMappingURL=dbConfig.js.map