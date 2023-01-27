import { Module } from '@nestjs/common';
import { PaidVacationsService } from './paidVacations.service';

@Module({
  providers: [PaidVacationsService],
})
export class PaidVacationsModule {}
