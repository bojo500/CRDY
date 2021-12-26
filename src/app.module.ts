import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { BlogOneModule } from "./blog-one/blog-one.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [TypeOrmModule.forRoot(),
    BlogOneModule,
    UsersModule,
    AuthModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {
}
