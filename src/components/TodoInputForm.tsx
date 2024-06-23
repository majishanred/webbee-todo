import { Dispatch, memo, useRef, useState } from 'react';
import { ITodoItemBody } from '../interfaces/ITodoItem';
import { StyledForm } from '../styled_components/Form.styled';
import { StyledFormButtonGroup } from '../styled_components/FormButtonGroup.styled';
import { StyledButton } from '../styled_components/Button.styled';

const TodoInputForm = memo(function ({ onSave }: { onSave: Dispatch<ITodoItemBody> }) {
  const [todoInput, setTodoInput] = useState<string>('');

  const inputRef = useRef<HTMLInputElement>(null);

  const setInput = () => {
    setTodoInput(inputRef.current!.value);
  };

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
          onChange={setInput}
          placeholder="Print here!"
          ref={inputRef}
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
