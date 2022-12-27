import { Prisma } from "@prisma/client";

export class User implements Prisma.UserUncheckedCreateInput {
    id?: number;
    nome: string;
    email: string;
    senha: string;
    meta?: Prisma.MetaUncheckedCreateNestedManyWithoutUserInput;
    jogadores?: Prisma.JogadorUncheckedCreateNestedManyWithoutUserInput;
}
