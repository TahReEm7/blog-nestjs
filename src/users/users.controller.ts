import { Controller, Get, Post, Body, Patch, Param, Delete, NotFoundException } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  async findAll() {
    const allUsers = this.usersService.findAll();
    if((await allUsers).length === 0) throw new NotFoundException("No users found");
    return allUsers;
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const foundUser = await this.usersService.findOne(id);
    if(!foundUser) throw new NotFoundException("User not found");
    return foundUser;
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    const updatedUser = this.usersService.update(id, updateUserDto);
    if(!updatedUser) throw new NotFoundException("User not found")
    return `User with ID ${id} updated successfully`;
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const removedUser = this.usersService.remove(id);
    if(!removedUser) throw new NotFoundException("User not found")
    return `User with ID ${id} deleted successfully`;
  }
}
