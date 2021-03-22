import { Title } from './style';

const ToDoListTitle = (props) => {
  return (
    <Title>
      {props.text}
    </Title>
  );
};

export default ToDoListTitle;