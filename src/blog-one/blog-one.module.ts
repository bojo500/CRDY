import { Module } from '@nestjs/common';
import { BlogOneService } from './blog-one.service';
import { BlogOneController } from './blog-one.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { BlogOne } from "./entities/blog-one.entity";

@Module({
  imports: [TypeOrmModule.forFeature([BlogOne])],
  controllers: [BlogOneController],
  providers: [BlogOneService]
})
export class BlogOneModule {}
