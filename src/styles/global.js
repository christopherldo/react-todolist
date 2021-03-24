import { createGlobalStyle } from 'styled-components'
import { light } from '../themes'

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
  
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    outline: none;
  }

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.3);
  }

  ::-webkit-scrollbar-thumb:hover {
    background: rgba(0, 0, 0, 0.6);
  }

  :root {
    --background-color: ${props => props.theme.background};
    --text-color: ${props => props.theme.text};
    --container-color: ${props => props.theme.container};
    --input-color: ${props => props.theme.input};
  }

  html {
    font-family: 'Roboto', sans-serif;
  }

  body {
    width: 100vw;
    height: 100vh;

    max-width: 100%;
    max-height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    position: relative;

    background: var(--background-color);

    .switch__theme {
      position: absolute;
      bottom: 1%;
      right: 1%;
    }
  }
`