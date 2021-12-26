import { IsNotEmpty, IsNumberString, IsString } from "class-validator";


export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
   username: string;

  @IsNumberString()
  @IsNotEmpty()
  password: string;


}
