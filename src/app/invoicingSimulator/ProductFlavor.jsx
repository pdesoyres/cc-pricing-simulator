import './ProductFlavor.css';
import { classnames } from '../../utils/classnames';
import { InvoicingListItem } from './InvoicingListItem';
import { ProductInstanceLogo } from '../productInstance/ProductInstanceLogo';
import { ProductFavorTitle } from '../productInstance/ProductFlavorTitle';
import { ProductFlavorDetails } from '../productInstance/ProductFlavorDetails';
import { Button } from '../../components/Button';
import { ChevronRightSvg } from '../../utils/icons';

/**
 * This component displays a product flavor. It uses the {@see InvoicingListItem} component for placing
 * information in a common way.
 * <p>The button is designed to be an 'add' button with a 'success' intent.
 * <p>If the product flavor is not available, it is displayed and the button is disabled.
 *
 * @param {ProductFlavorModel} productFlavor
 * @param {string} className
 * @param {function} onButtonClick
 * @return {JSX.Element}
 * @constructor
 */
export const ProductFlavor = ({
  productFlavor,
  className,
  onButtonClick
}) => {
  const disabled = !productFlavor.available;

  return <InvoicingListItem
    className={classnames('tp-product-flavor', className)}
    logo={<ProductInstanceLogo productInstance={productFlavor.instance}/>}
    title={<ProductFavorTitle productFlavor={productFlavor}/>}
    details={<ProductFlavorDetails productFlavor={productFlavor}/>}
    button={<Button label="Add"
                    rightIcon={ChevronRightSvg}
                    disabled={disabled}
                    intent="success"
                    onClick={onButtonClick}/>}
    disabled={disabled}
    disabledReason='Not available'
  />;
};