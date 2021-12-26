import { PartialType } from '@nestjs/mapped-types';
import { CreateBlogOneDto } from './create-blog-one.dto';

export class UpdateBlogOneDto extends PartialType(CreateBlogOneDto) {}
