import styled from 'styled-components'

export const Container = styled.div`
  width: 400px;
  height: 500px;

  border-radius: 5px;

  background: var(--container-color);

  div:first-child {
    width: 100%;
    height: 10rem;

    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;

    p {
      font-size: 2.4rem;
      font-weight: 400;
      color: var(--text-color);
      line-height: 2.8rem;
    }

    form {
      width: 80%;
      display: flex;
      align-items: center;
      justify-content: center;
      
      input {
        width: 100%;
        height: 50px;

        border-radius: 2px;
        border: none;

        font-size: 1.2rem;
        color: var(--text-color);

        padding: 10px;

        background: var(--input-color);
      }
    }

    

    hr {
      width: 90%;
      background: var(--text-color);
    }
  }
  
  div:last-child {
    width: 100%;
    height: 20rem;

    display: flex;
    align-items: center;
    justify-content: start;
    flex-direction: column;
    overflow-y: scroll;
  }
`