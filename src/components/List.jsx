import { classnames } from '../utils/classnames';
import "./List.css";

export const List = ({
  items = [],
  itemId = (item, index) => index,
  itemRenderer = (item) => item,
  className
}) => (
  <div className={classnames('cc-list', className)}>
    {
      items.map((item, index) => (
        <div key={itemId(item, index)} className='cc-list-item'>
          {itemRenderer(item, index)}
        </div>
      ))
    }
  </div>
);