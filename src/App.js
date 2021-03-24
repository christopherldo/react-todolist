import React, { useState } from 'react'

import GlobalStyles from './styles/global'
import { Container } from './styles/styles'
import { light, dark } from './themes';

import Switch from '@material-ui/core/Switch';

const App = () => {

  const [theme, setTheme] = useState(light)

  const handleChangeTheme = event => {
    if (!event.target.checked) {
      return setTheme(light)
    }
    setTheme(dark)
  }

  return (
    <>
      <Container>
        <div>
          <h1>Minhas Tarefas</h1>
          <input 
            type="text"
            placeholder="Qual é o nome da tarefa ?"
            maxLength={ 25 }
          />
          <hr/>
        </div>
      </Container>
      <Switch className="switch__theme" onChange={ handleChangeTheme }/>
      <GlobalStyles theme={ theme } />
    </>
  );
};

export default App