import { UserModel } from "../../data";
import { RegisterUserDto } from "../../domain";

export class AuthService {
  constructor() {}

  public async registerUser(registerDto: RegisterUserDto) {
    const existUser = await UserModel.findOne({ email: registerDto.email });
    if (existUser) return ["User already exists", undefined];

    return "todo ok";
  }
}
