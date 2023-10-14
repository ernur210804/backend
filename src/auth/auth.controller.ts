import { Body,Controller, Post, Req } from "@nestjs/common";
import { Request } from 'express';
import { AuthService } from "./auth.service";
import { AuthDto } from "./dto";
import { CourseDto } from "src/courses/dto/course.dto";

@Controller('auth')
export class AuthController{
    constructor(private authService : AuthService){}

    @Post('signup')
    signup(@Body() dto: AuthDto,coursesdto: CourseDto[]){
       
        return this.authService.signup(dto,coursesdto);
    }

    @Post('signin')
    signin(@Body() dto: AuthDto){
        
        return this.authService.signin(dto);
    }

    @Post('register')
    async registerUser(@Body() userDto: AuthDto, @Body() coursesDto: CourseDto[]): Promise<any> {
        coursesDto = this.authService.getCoursesFromJsonFile();
        return await this.authService.signup(userDto, coursesDto);
  }
}