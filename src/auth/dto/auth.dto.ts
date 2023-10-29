import { IsEmail,IsNotEmpty,IsString  } from "class-validator";


export class AuthDto{
    @IsEmail()
    @IsNotEmpty()
    email: string;
   
    @IsNotEmpty()
    organization_id: number;
    
    @IsString()
    @IsNotEmpty()
    password: string;

    
}

