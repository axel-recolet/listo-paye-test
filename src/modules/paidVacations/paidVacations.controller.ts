import { Controller, Post, HttpCode, Body } from '@nestjs/common';
import { BadRequestException } from '@nestjs/common/exceptions/bad-request.exception';
import { PaidVacationPeriodDto } from './dto/paidVacations.dto';
import { PaidVacationsService } from './paidVacations.service';

@Controller('paid-vacations')
export class paidVacationsController {
  constructor(private readonly _paidVacationsService: PaidVacationsService) {}

  @HttpCode(200)
  @Post('monthly')
  splitPaidVacationsbyMonth(
    @Body() paidVacationPeriodDto: PaidVacationPeriodDto,
  ) {
    try {
      const { start, end } = paidVacationPeriodDto;
      if (!start.isValid() || !end.isValid()) {
        throw new BadRequestException('Invalid date');
      }
      if (start.isAfter(end)) {
        throw new BadRequestException(
          'Paid Vacation start date have to be before the end date',
        );
      }

      const result = this._paidVacationsService.splitByMonthlyPeriod(
        paidVacationPeriodDto,
      );

      return result;
    } catch (error) {
      throw error;
    }
  }
}
