import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BlogOneService } from './blog-one.service';
import { CreateBlogOneDto, UpdateBlogOneDto } from "./dto";

@Controller('blog-one')
export class BlogOneController {
  constructor(private readonly blogOneService: BlogOneService) {}

  @Post()
  create(@Body() createBlogOneDto: CreateBlogOneDto) {
    return this.blogOneService.create(createBlogOneDto);
  }

  @Get()
  findAll() {
    return this.blogOneService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.blogOneService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBlogOneDto: UpdateBlogOneDto) {
    return this.blogOneService.update(+id, updateBlogOneDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.blogOneService.remove(+id);
  }
}
