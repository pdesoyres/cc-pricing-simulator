import './SelectedFlavor.css';
import { classnames } from '../../utils/classnames';
import { ListItem } from './ListItem';
import { ProductInstanceLogo } from '../productInstance/ProductInstanceLogo';
import { ProductFavorTitle } from '../productInstance/ProductFlavorTitle';
import { ProductFlavorDetails } from '../productInstance/ProductFlavorDetails';
import { Button } from '../../components/Button';
import { TrashSvg } from '../../utils/icons';

/**
 * This component displays a selected product flavor. It uses the {@see ListItem} component for placing
 * information in a common way.
 * <p>The button is designed to be a 'remove' button with a 'danger' intent.
 *
 * @param {ProductFlavorModel} productFlavor
 * @param {string} className
 * @param {function} onButtonClick
 * @return {JSX.Element}
 * @constructor
 */
export const SelectedFlavor = ({
  productFlavor,
  className,
  onButtonClick,
}) => {
  const cls = classnames('tp-selected-flavor', className);

  return <ListItem
    className={cls}
    logo={<ProductInstanceLogo productInstance={productFlavor.instance}/>}
    title={<ProductFavorTitle productFlavor={productFlavor}/>}
    details={<ProductFlavorDetails productFlavor={productFlavor}/>}
    button={<Button label="Remove"
                    icon={TrashSvg}
                    intent="danger"
                    onClick={onButtonClick}/>}
  />;
};