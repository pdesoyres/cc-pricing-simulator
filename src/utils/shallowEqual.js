/**
 * Computes a shallow equality between the two given items. The deepness parameter allows to control how deep
 * in the object we want to check for shallow equality. After this limit, a strict equality is used.
 *
 * @param {any} o1 - Object to compare to o2
 * @param {any} o2 - Object to compare to o1
 * @param {number} deepness - How deep the shallow equality should be performed
 * @return {boolean} - Whether the two objects are equal
 */
export const shallowEqual = (o1, o2, deepness = 1) => {
  return innerShallowEqual(o1, o2, deepness, 0);
};

/**
 * Computes a shallow equality between the two given items. It stops recursive call to shallow equality as soon as
 * level is higher or equal to deepness.
 *
 * @param {any} o1
 * @param {any} o2
 * @param {number} deepness - How deep the shallow equality should be performed
 * @param {number} level - the current level (the higher, the deeper)
 * @return {boolean} - true when the values of all keys are strictly equal.
 */
const innerShallowEqual = (o1, o2, deepness = 1, level = 0) => {
  if (o1 === o2) {
    return true;
  }

  if (typeof o1 !== 'object' || o1 === null || typeof o2 !== 'object' || o2 === null) {
    return false;
  }

  const keys1 = Object.keys(o1);
  const keys2 = Object.keys(o2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (let i = 0; i < keys1.length; i++) {
    const key = keys1[i];

    if (!o2.hasOwnProperty(key)) {
      return false;
    }

    if (level < deepness) {
      if (!innerShallowEqual(o1[key], o2[key], deepness, level + 1)) {
        return false;
      }
    } else {
      if (o1[key] !== o2[key]) {
        return false;
      }
    }
  }

  return true;
};