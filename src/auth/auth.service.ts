import { Injectable } from "@nestjs/common";
import { user as User, bookmark as Bookmark } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";
@Injectable({})
class AuthService {
    constructor(private prisma:PrismaService){

    }
    login(){
        return {"msg":"I have login"};
    }
    signup(){   
        return {"msg":"I have signup"};
    }
    test(){}
}

export default AuthService