import './ProductFlavorTitle.css';
import { classnames } from '../../utils/classnames';
import { Numeric } from '../../components/Numeric';

/**
 * Displays the title of a product flavor:
 * <ul>
 *   <li>instance name
 *   <li>Flavor name
 *   <li>Price
 * </ul>
 *
 * @param {ProductFlavorModel} productFlavor
 * @param {string} className
 * @return {JSX.Element}
 * @constructor
 */
export const ProductFavorTitle = ({
  productFlavor,
  className,
}) => {
  return <div className={classnames('tp-product-flavor-title', className)}>
    <span className='tp-product-flavor-title-instance'>{productFlavor.instance.name}</span>
    <span className='tp-product-flavor-title-name'>{productFlavor.name}</span>
    <span className='tp-product-flavor-title-price'><Numeric value={productFlavor.price} precision={2} unit='€'/></span>
  </div>;
}