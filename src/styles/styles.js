import styled from 'styled-components'

export const Container = styled.div`
  width: 400px;
  height: 500px;

  border-radius: 10px;

  background: var(--container-color);

  div {
    width: 100%;
    height: 10rem;

    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;

    h1 {
      font-size: 2.8rem;
      color: var(--text-color);
      line-height: 2.8rem;
    }

    input {
      width: 80%;
      height: 50px;

      border-radius: 5px;
      border: none;

      font-size: 1.2rem;
      color: var(--text-color);

      padding: 10px;

      background: var(--input-color);
    }

    hr {
      width: 90%;
      background: var(--text-color);
    }
  }
`