import './ProductFlavorDetails.css';
import { classnames } from '../../utils/classnames';
import { Numeric } from '../../components/Numeric';

/**
 * Displays the details of a product flavor:
 * <ul>
 *   <li>Price
 *   <li>Number of CPUs
 *   <li>Number of GPUs
 *   <li>Amount of memory
 * </ul>
 *
 * @param {ProductFlavorModel} productFlavor
 * @param {string} className
 * @return {JSX.Element}
 * @constructor
 */
export const ProductFavorDetails = ({
  productFlavor,
  className,
}) => {
  return <div className={classnames('tp-product-flavor-details', className)}>
    <div className='tp-product-flavor-details-label'>Price</div>
    <div className='tp-product-flavor-details-value'><Numeric value={productFlavor.price} precision={2} unit='€'/></div>

    <div className='tp-product-flavor-details-label'>CPUs</div>
    <div className='tp-product-flavor-details-value'><Numeric value={productFlavor.cpus}/></div>

    <div className='tp-product-flavor-details-label'>GPUs</div>
    <div className='tp-product-flavor-details-value'><Numeric value={productFlavor.gpus}/></div>

    <div className='tp-product-flavor-details-label'>Memory</div>
    <div className='tp-product-flavor-details-value'><Numeric value={productFlavor.mem} precision={2} unit='MiB'/></div>
  </div>;
}