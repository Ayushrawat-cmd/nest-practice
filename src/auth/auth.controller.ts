import {Body, Controller, Post} from "@nestjs/common";
import AuthService from "./auth.service";
import { AuthDto } from "./dto";
@Controller('auth')
class AuthController {
    constructor(private authService: AuthService) { // dependency injection nest js will manage that how to create the object of the authservice class
        this.authService.test();
    }
    @Post('/signup')
    signup(@Body() body: AuthDto){ // read about the pipes and validation in nest js documentation
        console.log({body});
        return this.authService.signup();
    }
    @Post('/login')
    login(){
        return this.authService.login();
    }
}

export default AuthController;