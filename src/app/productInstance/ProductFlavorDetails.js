import './ProductFlavorDetails.css';
import { classnames } from '../../utils/classnames';
import { KeyValuePairs, KeyValuePair } from '../../components/KeyValuePairs';
import { Numeric } from '../../components/Numeric';
import { Tag } from '../../components/Tag';
import { MachineLearningSvg, MicroserviceSvg } from '../../utils/icons';

/**
 * Displays the details of a product flavor using {@link KeyValuePairs} component:
 * <ul>
 *   <li>Number of CPUs
 *   <li>Number of GPUs
 *   <li>Amount of memory
 * </ul>
 *
 * Also displays whether the product flavor is suitable for microservice, or for machine learning. Those two
 * elements are displayed using the {@link Tag} component.
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
      <KeyValuePair pKey="CPUs" value={<Numeric value={productFlavor.cpus}/>}
                    valueClassName='tp-text-ellipsis'/>
      <KeyValuePair pKey="GPUs" value={<Numeric value={productFlavor.gpus}/>}
                    valueClassName='tp-text-ellipsis'/>
      <KeyValuePair pKey="Memory" value={<Numeric value={productFlavor.mem} precision={2} unit="MiB"/>}
                    valueClassName='tp-text-ellipsis'/>
    </KeyValuePairs>

    <div className="tp-product-flavor-details-tags">
      {
        productFlavor.microservice
          ? <Tag label="Microservice" icon={MicroserviceSvg}/>
          : null
      }
      {
        productFlavor.machineLearning
          ? <Tag label="Machine learning" icon={MachineLearningSvg}/>
          : null
      }
    </div>
  </div>;
};