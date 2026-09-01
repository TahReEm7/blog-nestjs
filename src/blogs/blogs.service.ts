import { Injectable } from '@nestjs/common';
import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Blog } from './entities/blog.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BlogsService {
  constructor(
    @InjectRepository(Blog)
    private readonly blogRepository: Repository<Blog>,
  ) {}

  create(createBlogDto: CreateBlogDto) {
    const blog = this.blogRepository.create(createBlogDto);

    return this.blogRepository.save(blog);
  }

  findAll() {
    return this.blogRepository.find();
  }

  findOne(id: string) {
    return this.blogRepository.findOne({
      where: { id },
    });
  }

  update(id: string, updateBlogDto: UpdateBlogDto) {
    return this.blogRepository.update(id, updateBlogDto);
  }

  remove(id: string) {
    return this.blogRepository.delete(id);
  }
}