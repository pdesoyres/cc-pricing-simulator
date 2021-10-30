import './ProductInstanceLogo.css';

/**
 * Displays the logo of a product instance.
 *
 * @param {ProductInstanceModel} productInstance
 * @param {number} size
 * @return {JSX.Element}
 * @constructor
 */
export const ProductInstanceLogo = ({
  productInstance,
  size
}) => {
  return <img className='tp-product-instance-logo'
              src={productInstance.logo}
              alt={productInstance.name}
              aria-label={productInstance.name}
              style={
                {
                  width: size,
                  height: size
                }
              }
  />;
};