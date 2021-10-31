import './Button.css';
import { classnames } from '../utils/classnames';
import { resolveIntent } from './Intents';
import { Icon } from './Icon';

/**
 * Simple Button component.
 *
 * @param {ReactComponent} icon - Left icon
 * @param {ReactComponent} rightIcon - Right icon
 * @param {string} label - Label
 * @param {undefined|Intent} intent - Intent to give to this button
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
  onClick,
}) => {
  let cls = classnames(
    'cc-button',
    className,
    resolveIntent(intent),
    disabled ? 'disabled' : null
  );

  return <button type="button"
                 className={cls}
                 title={label}
                 aria-label={label}
                 onClick={disabled ? null : onClick}
                 tabIndex={disabled ? -1 : null}>
    {icon ? <div className="cc-button-icon"><Icon svg={icon}/></div> : null}
    {label ? <div className="cc-button-label">{label}</div> : null}
    {rightIcon ? <div className="cc-button-icon"><Icon svg={rightIcon}/></div> : null}
  </button>;
};
