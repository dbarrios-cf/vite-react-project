import { useState } from 'react';
import styles from './ListGroup.module.css';

interface ListGroupProps {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: ListGroupProps) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <div>
        <h1>{heading}</h1>
        {items.length === 0 && <p>No item found</p>}
        <ul className={[styles.listGroup, styles.container].join(' ')}>
          {items.map((listElement, index) => (
            <li
              key={listElement.toLowerCase().replace(' ', '-')}
              className={
                index === selectedIndex
                  ? 'list-group-item active'
                  : 'list-group-item'
              }
              onClick={() => {
                setSelectedIndex(index);
                onSelectItem(listElement);
              }}
            >
              {listElement}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default ListGroup;
