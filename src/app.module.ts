import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { BlogOneModule } from "./blog-one/blog-one.module";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  imports: [TypeOrmModule.forRoot(),
    BlogOneModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {
}
