import './Numeric.css'
import { classnames } from '../utils/classnames';
import { round } from '../utils/round';

export const Numeric = ({
  value = 0,
  unit,
  precision = -1,
  className
}) => {
  if (precision > -1) {
    value = round(value, precision);
  }

  const values = [value];
  if (unit) {
    values.push(unit);
  }

  return <span className={classnames('cc-numeric', className)}>
    {values.join(' ')}
  </span>
};