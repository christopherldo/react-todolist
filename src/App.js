import React, { useState, useEffect } from 'react'

import GlobalStyles from './styles/global'
import { Container } from './styles/styles'

import { ThemeProvider } from 'styled-components'
import { light, dark } from './themes'

import Switch from '@material-ui/core/Switch';

import Content from './components/Content'

const App = () => {
  const [theme, setTheme] = useState('light')
  const [activeTheme, isActiveTheme] = useState(false)
  
  
  function handleChangeTheme(event) {
    if (!event.target.checked) {
      localStorage.setItem('theme', 'light')
      setTheme('light')
    } else {
      localStorage.setItem('theme', 'dark')
      setTheme('dark')
    }
  }
  
  const currentTheme = localStorage.getItem('theme')
  useEffect(() => {
    currentTheme && setTheme(currentTheme)
    currentTheme === 'dark' ? isActiveTheme(true) : isActiveTheme(false)
  }, [currentTheme])

  const [taskName, setTaskName] = useState('')
  const [list, setList] = useState([])

  function handleSubmit(event) {
    setList([...list, taskName])
    event.preventDefault()
    setTaskName('')
  }
  

  return (
    <>
      <ThemeProvider theme={ theme === 'light' ? light : dark }>
        <Container>
          <div>
            <p>Minhas Tarefas</p>
            <form onSubmit={ handleSubmit }>
              <input 
                type="text"
                placeholder="Qual é nome da sua tarefa ?"
                maxLength={ 25 }
                value={ taskName }
                onChange={ event => setTaskName(event.target.value) }
                required
              />
            </form>
            <hr/>
          </div>
          <div>
            { list.map((name, index) => {
              return <Content task={ name } key={ index } order={ index } />
            })}
          </div>
        </Container>
        <Switch 
          className="switch__theme" 
          onChange={ handleChangeTheme } 
          checked={ activeTheme } />
        <GlobalStyles />
      </ThemeProvider>
    </>
  );
};

export default App