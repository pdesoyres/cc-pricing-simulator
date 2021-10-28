import { classnames } from '../utils/classnames';
import { Icon } from './Icon';
import './Button.css';

export const Button = ({
  icon,
  rightIcon,
  label,
  intent,
  disabled,
  className,
  onClick
}) => {
  return <button type="button"
                 className={classnames('cc-button', className, intent, disabled ? 'disabled' : null)}
                 onClick={disabled ? null : onClick} title={label} aria-label={label}>
    {icon ? <div className="cc-button-icon"><Icon svg={icon}/></div> : null}
    {label ? <div className="cc-button-label">{label}</div> : null}
    {rightIcon ? <div className="cc-button-icon"><Icon svg={rightIcon}/></div> : null}
  </button>;
};
