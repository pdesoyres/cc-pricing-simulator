import { classnames } from '../utils/classnames';
import './List.css';

export const List = ({
  items = [],
  itemId = (item, index) => index,
  itemRenderer = (item) => item,
  className,
  emptyState
}) => {
  const hasItems = items?.length;

  return <div className={classnames('cc-list', className, !hasItems? 'cc-list-empty' : null)}>
    {
      hasItems
        ? items.map((item, index) => (
          <div key={itemId(item, index)} className="cc-list-item">
            {itemRenderer(item, index)}
          </div>
        ))
        : (emptyState ? <div className='cc-list-empty-state'>{emptyState}</div> : null)
    }
  </div>
};