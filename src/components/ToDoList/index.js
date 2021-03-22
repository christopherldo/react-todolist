import { useState } from 'react';
import { Div } from './style';
import ToDoListTitle from './ToDoListTitle';
import NewItemBox from './NewItemBox';
import List from './List';

const ToDoList = () => {
  const [list, setList] = useState([]);

  const addAction = newItem => {
    const newList = [...list];
    newList.push({
      title: newItem,
      done: false,
    });
    setList(newList);
  };

  const itemDoneToggle = key => {
    const newList = [...list];
    newList[key].done = !newList[key].done;
    setList(newList);
  };

  return (
    <Div>
      <ToDoListTitle text={'Lista de Tarefas'} />
      <NewItemBox
        autofocus
        defaultPhrase='Adicione um item e aperte ENTER'
        onEnter={addAction}
      />
      <List list={list} onItemClick={itemDoneToggle}/>
    </Div>
  );
};

export default ToDoList;