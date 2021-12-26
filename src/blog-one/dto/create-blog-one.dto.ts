import { IsNotEmpty, IsString } from "class-validator";

export class CreateBlogOneDto {

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  content: string;

}
