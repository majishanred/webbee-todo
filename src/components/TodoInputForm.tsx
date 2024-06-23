import { Dispatch, memo, useState } from 'react';
import { ITodoItemBody } from '../interfaces/ITodoItem';
import { StyledForm } from '../styled_components/Form.styled';
import { StyledFormButtonGroup } from '../styled_components/FormButtonGroup.styled';
import { StyledButton } from '../styled_components/Button.styled';

const TodoInputForm = memo(function ({ onSave }: { onSave: Dispatch<ITodoItemBody> }) {
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
    <StyledForm>
      <label>
        <input
          name="newTaskInput"
          value={todoInput}
          onChange={(e) => setTodoInput(e.target.value)}
          placeholder="Print here!"
        ></input>
      </label>
      <StyledFormButtonGroup>
        <StyledButton onClick={handleOnCreate} type="button">
          Create new task
        </StyledButton>
      </StyledFormButtonGroup>
    </StyledForm>
  );
});

export default TodoInputForm;
