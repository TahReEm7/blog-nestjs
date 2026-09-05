import 'dotenv/config';
import { DataSource, DataSourceOptions } from 'typeorm';
import { runSeeders, SeederOptions } from 'typeorm-extension';
import { User } from '../users/entities/user.entity';
import { Blog } from '../blogs/entities/blog.entity';
import UserFactory from './users.factory';
import BlogFactory from './blogs.factory';
import MainSeeder from './main.seeder';

const options: DataSourceOptions & SeederOptions = {
  type: 'postgres',
  url: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
  entities: [User, Blog],
  factories: [UserFactory, BlogFactory],
  seeds: [MainSeeder],
};

const dataSource = new DataSource(options);

async function seed() {
  try {
    await dataSource.initialize();
    console.log('Database connected. Starting seeding...');

    await runSeeders(dataSource);
    console.log('Seeding completed successfully!');
  } catch (error) {
    console.error('Error during seeding:', error);
    process.exitCode = 1;
  } finally {
    if (dataSource.isInitialized) {
      await dataSource.destroy();
    }
    process.exit();
  }
}

seed();
