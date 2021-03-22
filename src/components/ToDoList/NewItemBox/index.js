import { useState } from 'react';
import {
  InputText
} from './style';

const NewItemBox = (props) => {
  const [text, setText] = useState('');

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && text) {
      if (props.onEnter) {
        props.onEnter(text);
      };
      setText('');
    };
  };

  return (
    <InputText
      autoFocus={props.autofocus}
      type={props.type || 'text'}
      placeholder={props.defaultPhrase || 'Digite alguma coisa'}
      value={text}
      onChange={(e) => setText(e.target.value)}
      onKeyPress={handleKeyPress}
    />
  );
};

export default NewItemBox;