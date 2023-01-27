import { Test } from '@nestjs/testing';
import { plainToInstance } from 'class-transformer';
import { PaidVacationPeriodDto } from './dto/paidVacations.dto';
import { PaidVacationsService } from './paidVacations.service';

describe('PaidVacationsService', () => {
  let paidVacationsService: PaidVacationsService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [PaidVacationsService],
    }).compile();

    paidVacationsService = moduleRef.get(PaidVacationsService);
  });

  describe('splitByMonthlyPeriod', () => {
    it('should return a unique period', async () => {
      const paidVacation: PaidVacationPeriodDto = plainToInstance(
        PaidVacationPeriodDto,
        {
          start: '10-01-2023 15:38',
          end: '31-01-2023 23:59',
        },
      );
      const result = await paidVacationsService.splitByMonthlyPeriod(
        paidVacation,
      );

      expect(result).toEqual([
        {
          start: '10-01-2023 15:38',
          end: '31-01-2023 23:59',
        },
      ]);
    });

    it('should return two periods', async () => {
      const paidVacation: PaidVacationPeriodDto = plainToInstance(
        PaidVacationPeriodDto,
        {
          start: '10-01-2023 15:38',
          end: '28-02-2023 23:59',
        },
      );
      const result = await paidVacationsService.splitByMonthlyPeriod(
        paidVacation,
      );

      expect(result).toEqual([
        {
          start: '10-01-2023 15:38',
          end: '31-01-2023 23:59',
        },
        {
          start: '01-02-2023 00:00',
          end: '28-02-2023 23:59',
        },
      ]);
    });
  });
});
