import {IsNotEmpty,IsString  } from "class-validator";


export class CourseDto {
    @IsString()
    @IsNotEmpty()
    title: string;

    @IsString()
    @IsNotEmpty()
    type: string;
    
    
    @IsNotEmpty()
    subscription_type_id: number;
  }