import './ProductFlavorDetails.css';
import { classnames } from '../../utils/classnames';
import { KeyValuePairs, KeyValuePair } from '../../components/KeyValuePairs';
import { Numeric } from '../../components/Numeric';

/**
 * Displays the details of a product flavor using {@link KeyValuePairs} component:
 * <ul>
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
export const ProductFlavorDetails = ({
  productFlavor,
  className,
}) => {
  return <div className={classnames('tp-product-flavor-details', className)}>
    <KeyValuePairs>
      <KeyValuePair pKey="CPUs" value={<Numeric value={productFlavor.cpus}/>}/>
      <KeyValuePair pKey="GPUs" value={<Numeric value={productFlavor.gpus}/>}/>
      <KeyValuePair pKey="Memory" value={<Numeric value={productFlavor.mem} precision={2} unit="MiB"/>}/>
    </KeyValuePairs>

    <div className='tp-product-flavor-details-label'>GPUs</div>
    <div className='tp-product-flavor-details-value'><Numeric value={productFlavor.gpus}/></div>

    <div className='tp-product-flavor-details-label'>Memory</div>
    <div className='tp-product-flavor-details-value'><Numeric value={productFlavor.mem} precision={2} unit='MiB'/></div>
  </div>;
};