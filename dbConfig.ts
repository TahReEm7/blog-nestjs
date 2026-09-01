import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const dbConfig: TypeOrmModuleOptions = {
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
