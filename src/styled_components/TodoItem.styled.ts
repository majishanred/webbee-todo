import styled from 'styled-components';

export const StyledTodoItem = styled('div')`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  box-sizing: border-box;
  height: auto;
  gap: 8px;
  padding: 8px 16px;

  align-items: center;

  border-radius: 8px;

  background-color: #ffffff;
`;

export const StyledTodoText = styled<'span', { $isDone: boolean }>('span')`
  text-decoration-line: ${(props) => (props.$isDone ? 'line-through' : 'none')};
`;
