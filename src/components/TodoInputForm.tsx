import { Dispatch, useState } from 'react';
import styled from 'styled-components';
import { TodoListElemBody } from '../App';

export const StyledForm = styled.form`
  margin-top: 20px;

  padding: 10px 20px;

  background-color: #ffffff;

  display: flex;
  align-items: center;

  & > button {
    margin-left: auto;
    border: 0;
    background-color: hsl(180, 29%, 50%);
    color: #ffffff;

    padding: 10px 15px;

    border-radius: 5px;

    font-size: 15px;
  }
`;

export default function TodoInputForm({ onSave }: { onSave: Dispatch<TodoListElemBody> }) {
  const [todoInput, setTodoInput] = useState<string>('');

  const handleOnCreate = () => {
    const newTodo = {
      task: todoInput,
      isDone: false,
    };

    setTodoInput('');
    onSave(newTodo);
  };

  return (
    <StyledForm id="todoInsert">
      <label>
        <input
          name="taskInput"
          value={todoInput}
          onChange={(e) => setTodoInput(e.target.value)}
          placeholder="Print here!"
        ></input>
      </label>
      <button onClick={() => handleOnCreate()} type="button">
        Create new task
      </button>
    </StyledForm>
  );
}
