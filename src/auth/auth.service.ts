import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthDto} from './dto';
import { CourseDto } from 'src/courses/dto/course.dto';
import * as fs from 'fs';
import * as path from 'path';
import *as argon from "argon2";
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService){}  


  async signup(dto: AuthDto ,coursesdto : CourseDto[]) {
    //generate the password hash
    const hash = await argon.hash(dto.password);

    try{
      //save the new user in db
      const user = await this.prisma.user.create({
      data: {
        email: dto.email,
        hash,
        subscriptionType: dto.subscriptionType,
      },
      
    })
    for (const courseDto of coursesdto) {
      await this.createCourse(user.id, courseDto);
    }
    
    delete user.hash;
    //return the saved user
    return user;
    }
    catch(error){
      if(error instanceof PrismaClientKnownRequestError ){
        if(error.code === "P2002"){//trying to add uniq element again 
          throw new ForbiddenException(
            'Credential taken'
          )
        }
      }
      throw error;
    }

    
  }

  async signin(dto : AuthDto) {
    //find the user by email
    const user = await this.prisma.user.findUnique({
      where: {
        email: dto.email,
      }
    })
    //if user does not exists throw exception
    if(!user) throw new ForbiddenException('Credentials incorrect')

    //compare password
    const pwMatches = await argon.verify(
      user.hash,
      dto.password,
    )
    //if password incorrect throw exception 
    if(!pwMatches) throw new ForbiddenException(
      'Credentials incorrect',
    );

    //send back the user
    delete user.hash;
    return user;
  }


  async createCourse(userId: number, courseDto: CourseDto) {
    try {
      // Save the new course in the db
      const course = await this.prisma.courses.create({
        data: {
          title: courseDto.title,
          type: courseDto.type,
          user: { connect: { id: userId } }, // Connect the course to the user
        },
      });
  
      return course;
    } catch (error) {
      // Handle errors
      throw error;
    }
  }
  

  getCoursesFromJsonFile(): CourseDto[] {
    const isProduction = process.env.NODE_ENV === 'production';
    const baseDirectory = isProduction ? 'dist/auth/' : 'src/auth/';
    // Read the JSON file
    const filePath = path.join(__dirname,  'courses.json');
    
    try {
      const jsonData = fs.readFileSync(filePath, 'utf8');
      const coursesData = JSON.parse(jsonData);

      // Map the data to CourseDto objects
      const coursesDto: CourseDto[] = coursesData.map((course: any) => ({
        title: course.title,
        type: course.type,
      }));

      return coursesDto;
    } catch (error) {
      // Handle error reading or parsing the JSON file
      console.error('Error reading courses JSON file:', error);
      return [];
    }
  }


}









  