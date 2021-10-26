/**
 * Constructs the CSS classnames string with the given classNames. It ignores the nullish classNames.
 * You can also pass arrays of classNames.
 * @param classNames one or more classNames
 * @returns {string|null} the CSS className or null instead of empty string.
 */
export const classnames = (...classNames) => {
  const result = classNames
    .flatMap(c => Array.isArray(c) ? c : [c])
    .filter(c => c)
    .join(" ");
  if (result.length === 0) {
    return null;
  }
  return result;
}