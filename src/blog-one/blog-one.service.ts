import { HttpStatus, Injectable, InternalServerErrorException, NotFoundException } from "@nestjs/common";
import { CreateBlogOneDto, UpdateBlogOneDto } from "./dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { BlogOne } from "./entities/blog-one.entity";

@Injectable()
export class BlogOneService {

  constructor(@InjectRepository(BlogOne) private repository: Repository<BlogOne>) {
  }

  async create(createBlogOneDto: CreateBlogOneDto) {
    try {
      await this.repository.save(createBlogOneDto);
    } catch {
      throw new InternalServerErrorException();
    }
    return {
      message: "Created Successfully",
      statusCode: HttpStatus.CREATED
    };
  }


  findAll() {
    return this.repository.find({ relations: ["user"] });
  }

  findOne(id: number) {
    return this.repository.findOne(id, { relations: ["user"] });
  }

  async update(id: number, updateBlogOneDto: UpdateBlogOneDto) {
    try {
      await this.repository.save({ ...updateBlogOneDto});
    } catch {
      throw new InternalServerErrorException();
    }
    return {
      message: "Updated Successfully",
      statusCode: HttpStatus.OK
    };
  }

  async remove(id: number) {
    let item = await this.findOne(id);
    if (!item) {
      throw new NotFoundException();
    }
    try {
      await this.repository.delete(item.id);
    } catch {
      throw new InternalServerErrorException();
    }
    return {
      message: "Deleted Successfully",
      statusCode: HttpStatus.OK
    };
  }
}
