import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';

//Tipo parcial pemrite vc usar o email ou nome ou o que for.Ele diz: mesmo que seja obrigat[ório, dentro desse partial type o creatUserDTO as propriedades são opcionais]
export class UpdateUserDto extends PartialType(CreateUserDto) {}
