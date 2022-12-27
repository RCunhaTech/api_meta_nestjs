import { Injectable } from '@nestjs/common';
import { User,Prisma } from '@prisma/client';
import { PrismaService } from '../prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';




@Injectable()
export class UserService {

  constructor(private readonly prismaClient:PrismaService) {}

  async create(data:CreateUserDto):Promise<User> {

    return await this.prismaClient.user.create({ data })

  }

  async findAll():Promise<User[]> {
    return await this.prismaClient.user.findMany()
  }

  async findOne(id: number):Promise<User> {
    return this.prismaClient.user.findUniqueOrThrow({ where:{ id },include: {
      meta:{
        select:{
          descricao:true
        }
      }
    }})
  }

  async update(id: number, data: UpdateUserDto) {
    return await this.prismaClient.user.update({
      where: { id }, data
    })
  }

  async remove(id: number) {
    return await this.prismaClient.user.delete({
      where: { id }
    })
  }
}
