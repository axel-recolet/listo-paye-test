import { Module } from '@nestjs/common';
import { MonthlyPeriodModule } from '../monthly.period/monthlyPeriod.module';
import { PaidVacationsModule } from '../paidVacations/paidVacations.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [PaidVacationsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
