import { Prisma } from '@prisma/client';
import { IsNotEmpty, IsString } from 'class-validator';
import { IsEmail, isNotEmpty, isString } from 'class-validator/types/decorator/decorators';
import { User } from '../entities/user.entity';


export class CreateUserDto extends User {

    @IsString()
    @IsNotEmpty()
    nome: string;

    @IsString()
    @IsNotEmpty()
    email: string;

    @IsNotEmpty()
    senha: string;

    meta?: Prisma.MetaCreateNestedManyWithoutUserInput;
    jogadores?: Prisma.JogadorCreateNestedManyWithoutUserInput;
}
