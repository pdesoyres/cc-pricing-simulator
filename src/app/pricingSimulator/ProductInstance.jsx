import './ProductInstance.css';
import { classnames } from '../../utils/classnames';
import { ListItem } from './ListItem';
import { ProductInstanceLogo } from '../productInstance/ProductInstanceLogo';
import { Button } from '../../components/Button';
import { ChevronRightSvg } from '../../utils/icons';

/**
 * This component displays a product instance. It uses the {@see ListItem} component for placing
 * information in a common way.
 * <p>The button is designed to be a 'select' button with a 'normal' intent.
 * <p>If the product instance is not enabled or is coming soon, it is displayed and the button is disabled.
 *
 * @param {ProductInstanceModel} productInstance
 * @param {className} string
 * @param {boolean} selected
 * @param {function} onButtonClick
 * @return {JSX.Element}
 * @constructor
 */
export const ProductInstance = ({
  productInstance,
  className,
  selected = false,
  onButtonClick
}) => {
  const disabled = !productInstance.enabled;
  const buttonIsDisabled = selected || disabled;

  const cls = classnames(
    'tp-product-instance',
    className,
    selected ? 'selected' : null,
  );

  return <ListItem
    className={cls}
    logo={<ProductInstanceLogo productInstance={productInstance}/>}
    title={productInstance.name}
    details={productInstance.description}
    button={<Button label="Select"
                    rightIcon={ChevronRightSvg}
                    disabled={buttonIsDisabled}
                    onClick={onButtonClick}/>}
    disabled={disabled}
    disabledReason={productInstance.comingSoon ? 'Coming soon' : 'Not available'}
  />;
};