import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import 'dotenv/config';

export const dbConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  url: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
  autoLoadEntities: true,
  synchronize: true,
};
