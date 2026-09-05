import { DataSource } from 'typeorm';
import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import { faker } from '@faker-js/faker';
import { User } from '../users/entities/user.entity';
import { Blog } from '../blogs/entities/blog.entity';

export class MainSeeder implements Seeder {
  async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager,
  ): Promise<void> {
    const userFactory = factoryManager.get(User);
    const blogFactory = factoryManager.get(Blog);

    // 1. Create and save 5 users
    const users = await userFactory.saveMany(5);

    // 2. Create and save 10 blogs, assigning each to a random user
    for (let i = 0; i < 10; i++) {
      await blogFactory.save({
        user: faker.helpers.arrayElement(users),
      });
    }
  }
}

export default MainSeeder;