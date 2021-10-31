import './KeyValuePairs.css';
import React from 'react';
import { classnames } from '../utils/classnames';

/**
 * Display a set of key-value pairs using a grid layout.
 *
 * <p>Example:
 * ```jsx
 *  <KeyValuePairs>
 *    <KeyValuePair pKey='unit price' value='2.99 €'/>
 *    <KeyValuePair pKey='amount' value={5}/>
 *    <KeyValuePair pKey='total' value='14.95 €'/>
 *  </KeyValuePairs>
 * ```
 *
 * <p>Only {@link KeyValuePair} children are displayed. All other elements will be ignored.
 *
 * @param {string} className
 * @param {ReactNode | Array<ReactNode>} children
 * @return {JSX.Element}
 * @constructor
 */
export const KeyValuePairs = ({
  className,
  children
}) => {
  const pairs = React.Children.toArray(children)
    .filter(child => {
      return child.type.name === KeyValuePair.name;
    });

  return <div className={classnames('cc-key-value-pairs', className)}>
    {pairs}
  </div>;
};

/**
 * Display a single key-value pair. This component is to be used as a child of {@see KeyValuePairs}.
 *
 * @param {string|ReactNode} pKey
 * @param {string|ReactNode} value
 * @return {JSX.Element}
 * @constructor
 */
export const KeyValuePair = ({
  pKey,
  value,
}) => {
  return <>
    <div className='cc-key-value-pair-key'>{pKey}</div>
    <div className='cc-key-value-pair-value'>{value}</div>
  </>
};
