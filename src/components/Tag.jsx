import './Tag.css';
import { classnames } from '../utils/classnames';
import { resolveIntent } from './Intents';
import { Icon } from './Icon';

/**
 * Tag is a simple wrapper around a label and an icon.
 *
 * @param {string|JSX.Element} label
 * @param {ReactComponent} icon
 * @param {Intent} intent
 * @param {string} className
 * @return {JSX.Element}
 * @constructor
 */
export const Tag = ({
  label,
  icon,
  intent,
  className,
}) => {
  return <div className={classnames('cc-tag', className, resolveIntent(intent))}>
    {icon ? <div className="cc-tag-icon"><Icon svg={icon}/></div> : null}
    {label ? <div className="cc-tag-label">{label}</div> : null}
  </div>;
};