import { Injectable } from '@nestjs/common';
import { CreateBlogOneDto } from './dto/create-blog-one.dto';
import { UpdateBlogOneDto } from './dto/update-blog-one.dto';

@Injectable()
export class BlogOneService {
  create(createBlogOneDto: CreateBlogOneDto) {
    return 'This action adds a new blogOne';
  }

  findAll() {
    return `This action returns all blogOne`;
  }

  findOne(id: number) {
    return `This action returns a #${id} blogOne`;
  }

  update(id: number, updateBlogOneDto: UpdateBlogOneDto) {
    return `This action updates a #${id} blogOne`;
  }

  remove(id: number) {
    return `This action removes a #${id} blogOne`;
  }
}
