/**
 * {@see ProductInstanceModel} comparator for sorting by name.
 *
 * @param {ProductInstanceModel} p1
 * @param {ProductInstanceModel} p2
 * @return {number}
 */
export const productInstanceComparator = (p1, p2) => p1.name.localeCompare(p2.name);

/**
 * {@see ProductFlavorModel} comparator for sorting by instance name and then by descending price.
 *
 * @param {ProductFlavorModel} f1
 * @param {ProductFlavorModel} f2
 *
 * @return {number}
 */
export const productFlavorComparator = (f1, f2) => {
  return f1.instance.name.localeCompare(f2.instance.name) || f1.price - f2.price;
}