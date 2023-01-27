import { Transform } from 'class-transformer';
import { IsDefined } from 'class-validator';
import * as moment from 'moment';
import { Moment } from 'moment';

const formatDate = 'DD-MM-YYYY HH:mm';

export class PaidVacationPeriodDto {
  @Transform(({ value }) => {
    const result = moment(value, formatDate);
    return result;
  })
  @IsDefined()
  start: Moment;

  @Transform(({ value }) => {
    const result = moment(value, formatDate);
    return result;
  })
  @IsDefined()
  end: Moment;
}
