import { classnames } from '../utils/classnames';
import { round } from '../utils/round';
import './Currency.css'

export const Currency = ({
  value = 0,
  unit = '€',
  precision = -1,
  className
}) => {
  if (precision > -1) {
    value = round(value, precision);
  }

  return <span className={classnames('cc-currency', className)}>
    {value} {unit}
  </span>
};