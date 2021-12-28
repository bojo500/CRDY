import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from "@nestjs/common";
import { UsersService } from './users.service';
import { CreateUserDto, UpdateUserDto } from "./dto";
import { Role, Roles } from "./enum";
import { LocalAuthGuard } from "../auth/guards/local-auth.guard";

@Controller('users')
@UseGuards(LocalAuthGuard)
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @Roles(Role.Admin)
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  @Roles(Role.User)
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  @Roles(Role.User)
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto);
  }

  @Delete(':id')
  @Roles(Role.Admin)
  remove(@Param('id') id: string) {
    return this.usersService.remove(id);
  }
}
