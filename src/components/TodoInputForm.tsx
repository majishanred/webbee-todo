import { Dispatch, useState } from 'react';
import { IItemBody } from '../interfaces/ITodoItem';
import { StyledForm } from '../styled_components/Form.styled';
import { StyledFormButtonGroup } from '../styled_components/FormButtonGroup.styled';
import { StyledButton } from '../styled_components/Button.styled';

export default function TodoInputForm({ onSave }: { onSave: Dispatch<IItemBody> }) {
  const [todoInput, setTodoInput] = useState<string>('');

  const handleOnCreate = () => {
    const newTodo = {
      task: todoInput,
      isDone: false,
    };

    onSave(newTodo);
    setTodoInput('');
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
      <StyledFormButtonGroup>
        <StyledButton onClick={() => handleOnCreate()} type="button">
          Create new task
        </StyledButton>
      </StyledFormButtonGroup>
    </StyledForm>
  );
}
