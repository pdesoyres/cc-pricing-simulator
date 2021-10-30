import { productInstancesService } from './productInstance/ProductInstancesService';

/**
 * This is our main service. It is responsible for :
 * <ul>
 *   <li>Initializing the application
 *   <li>Holding the available product instances
 * </ul>
 */
class ApplicationService {
  /**
   * Product instances
   * @type {Array<ProductInstanceModel>} to be displayed in our application
   * @private
   */
  _productInstances = [];

  /**
   * Initializes our application
   *
   * @return {Promise<void>}
   */
  async init() {
    this._productInstances = await productInstancesService.getProductInstances();
  }

  /**
   * @return {Array<ProductInstanceModel>}
   */
  get productInstances() {
    return this._productInstances;
  }
}

export const applicationService = new ApplicationService();