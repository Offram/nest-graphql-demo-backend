import { Module } from '@nestjs/common';
import { OwnersModule } from 'src/owners/owners.module';
import { PetsModule } from 'src/pets/pets.module';
import { SeederDataService } from './seeder-data.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Owner } from 'src/owners/entities/owner.entity';
import { Pet } from 'src/pets/pet.entity';
import { User } from 'src/users/entities/user.entity';
import { UsersModule } from 'src/users/users.module';
import { Role } from 'src/users/entities/role.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Owner, Pet, User, Role]),
    OwnersModule,
    PetsModule,
    UsersModule,
  ],
  providers: [SeederDataService],
  exports: [SeederDataService],
})
export class SeederDataModule {}
