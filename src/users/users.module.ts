import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from 'src/typeorm/users.entity';

@Module({

  imports:[TypeOrmModule.forFeature([UserEntity])],

  controllers: [UsersController],

  providers: [UsersService , ],

  exports:[TypeOrmModule],

})

export class UsersModule {}
