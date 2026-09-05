import { faker } from "@faker-js/faker";
import { setSeederFactory } from "typeorm-extension";
import { Blog } from "../blogs/entities/blog.entity";


export const BlogFactory = setSeederFactory(Blog, () => {
  const blog = new Blog();
  blog.title = faker.lorem.sentence();
  blog.content = faker.lorem.paragraph();
  blog.views = faker.number.int({ min: 0, max: 1000 });

  return blog;
});

export default BlogFactory;
