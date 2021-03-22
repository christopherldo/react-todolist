import styled from 'styled-components';

export const ItemList = styled.ul `
  border-top: 1px solid #000;
  margin: 20px 0;
  padding: 20px;
  list-style: none;
  overflow-y: scroll;
  height: 300px;
`;

export const Item = styled.li `
  padding: 10px;
  margin: 5px 0;
  border-radius: 5px;
  background-color: ${props => props.order % 2 === 0 ? '#ddd' : '#ccc'};
  text-decoration: ${props => props.done ? 'line-through' : 'none'};
  cursor: pointer;
`;

export const EmptyListText = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 90%;
  text-align: center;
  font-size: 16px;
  font-weight: normal;
  color: #777;
`;