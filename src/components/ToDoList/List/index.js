import { useEffect, useRef } from 'react';
import {ItemList, Item, EmptyListText} from './style';

const List = (props) => {
  const listEndRef = useRef(null);

  const scrollToBottom = () => {
    listEndRef.current.scrollTop = Number.MAX_SAFE_INTEGER;
  };

  useEffect(() => {
    scrollToBottom();
  }, [props.list.length])

  const handleItemClick = key => {
    if (props.onItemClick) {
      props.onItemClick(key);
    };
  };

  return (
    <ItemList ref={listEndRef}>
      {
        props.list.length === 0 &&
        <EmptyListText>Adicione um item para vê-lo aparecer aqui</EmptyListText>
      }
      {props.list.map((item, key) => 
          <Item
            key={key}
            onClick={() => handleItemClick(key)}
            done={item.done}
            order={key}
          >
            {item.title}
          </Item>
      )}
    </ItemList>
  );
};

export default List;