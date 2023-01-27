import { Module } from '@nestjs/common';
import { paidVacationsController } from './paidVacations.controller';
import { PaidVacationsService } from './paidVacations.service';

@Module({
  controllers: [paidVacationsController],
  providers: [PaidVacationsService],
})
export class PaidVacationsModule {}
