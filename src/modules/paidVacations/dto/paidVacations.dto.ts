import { ValidateIf } from 'class-validator';
import { Transform } from 'class-transformer';
import * as moment from 'moment';
import { Moment } from 'moment';

const formatDate = 'DD-MM-YYYY HH:mm';

export class PaidVacationPeriodDto {
  @ValidateIf((value) => {
    const result = moment(value, formatDate).isValid();
    return result;
  })
  @Transform(({ value }) => {
    const result = moment(value, formatDate);
    return result;
  })
  start: Moment;

  @Transform(({ value }) => {
    const result = moment(value, formatDate);
    return result;
  })
  @ValidateIf((value) => {
    const result = moment(value, formatDate).isValid();
    return result;
  })
  end: Moment;
}
