import { Module } from '@nestjs/common';
import { PaidVacationsModule } from '../paidVacations/paidVacations.module';

@Module({
  imports: [PaidVacationsModule],
})
export class AppModule {}
