import { Injectable } from '@nestjs/common';
import * as moment from 'moment';
import { Moment } from 'moment';
import { PaidVacationPeriodDto } from './dto/paidVacations.dto';
import { Period } from './period.model';

const formatDate = 'DD-MM-YYYY HH:mm';

@Injectable()
export class PaidVacationsService {
  splitByMonthlyPeriod(paidVacationPeriod: PaidVacationPeriodDto) {
    try {
      const { end } = paidVacationPeriod;
      let { start } = paidVacationPeriod;
      let lastDayOfMonth: Moment;
      const months: Period[] = [];

      do {
        lastDayOfMonth = moment(start).endOf('month').hour(23).minute(59);
        console.log(
          'lastDayOfMonth : ',
          lastDayOfMonth.format(formatDate).toString(),
        );

        if (end.isBefore(lastDayOfMonth) || end.isSame(lastDayOfMonth)) {
          months.push({
            start: moment(start).format(formatDate).toString(),
            end: moment(end).format(formatDate).toString(),
          });
        } else {
          months.push({
            start: moment(start).format(formatDate),
            end: moment(lastDayOfMonth).format(formatDate),
          });
          start = moment(lastDayOfMonth).add(1, 'days').hour(0).minute(0);
        }
      } while (lastDayOfMonth.isBefore(end));

      return months;
    } catch (error) {
      console.log(error);
    }
  }
}
