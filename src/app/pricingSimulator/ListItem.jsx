import './ListItem.css';
import { classnames } from '../../utils/classnames';

/**
 * This component displays an item of the lists displayed in the {@see PricingSimulator} component.
 * It makes all the items displayed in those lists to be displayed in a common way.
 * <p>It has the ability to be displayed in a disabled mode. In this case, the opacity is set to 50%.
 * It is also possible to give the reason of that, and if specified, it is displayed over the disabled component.
 *
 * @param {JSX.Element} logo - the logo
 * @param {JSX.Element | string} title - the title
 * @param {JSX.Element} details - the details
 * @param {JSX.Element} button - the button
 * @param {string} className - the class
 * @param {boolean} disabled - whether the component should be displayed as disabled
 * @param {string} disabledReason - the optional reason of it to be disabled.
 * @return {JSX.Element}
 * @constructor
 */
export const ListItem = ({
  logo,
  title,
  details,
  button,
  className,
  disabled = false,
  disabledReason,
}) => {
  return <div className={classnames('tp-list-item', className, disabled ? 'disabled' : null)}>
    <div className='tp-list-item-header'>
      <div className="tp-list-item-logo">{logo}</div>
      <div className="tp-list-item-title">{title}</div>
    </div>
    <div className='tp-list-item-body'>
      <div className="tp-list-item-details">{details}</div>
      <div className="tp-list-item-button">{button}</div>
    </div>
    {
      (disabled && disabledReason)
        ? <div className="tp-list-item-disabledReason">{disabledReason}</div>
        : null
    }
  </div>;
};