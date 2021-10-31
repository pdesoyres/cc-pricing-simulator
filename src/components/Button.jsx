import './Button.css';
import { classnames } from '../utils/classnames';
import { Intents } from './Intents';
import { Icon } from './Icon';

/**
 * Simple Button component.
 *
 * @param {ReactComponent} icon - Left icon
 * @param {ReactComponent} rightIcon - Right icon
 * @param {string} label - Label
 * @param {undefined|'normal'|'primary'|'success'|'danger'} intent - Intent to give to this button. {@see Intents}
 * @param {boolean} disabled - Whether the button should be disabled
 * @param {string} className - the class to give to the button
 * @param {function} onClick - the on click handler
 * @return {JSX.Element}
 * @constructor
 */
export const Button = ({
  icon,
  rightIcon,
  label,
  intent,
  disabled,
  className,
  onClick
}) => {
  const resolvedIntent = Object.values(Intents).indexOf(intent) === -1 ? 'normal' : intent;

  return <button type="button"
                 className={classnames('cc-button', className, resolvedIntent, disabled ? 'disabled' : null)}
                 onClick={disabled ? null : onClick} title={label} aria-label={label}
                 tabIndex={disabled ? -1 : null}>
    {icon ? <div className="cc-button-icon"><Icon svg={icon}/></div> : null}
    {label ? <div className="cc-button-label">{label}</div> : null}
    {rightIcon ? <div className="cc-button-icon"><Icon svg={rightIcon}/></div> : null}
  </button>;
};
