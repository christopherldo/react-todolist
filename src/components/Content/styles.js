import styled from 'styled-components'

export const Container = styled.ul`
  width: 90%;
  height: 50px;

  min-height: 50px;

  display: flex;
  align-items: center;
  justify-content: start;

  margin: 5px 0;

  border-radius: 5px;

  background: ${props => props.order % 2 == 0 ? 'var(--order-color)' : 'var(--input-color)'};

  p {
    font-size: 1.2rem;
    line-height: 1.4rem;
    color: var(--text-color);
  }
`