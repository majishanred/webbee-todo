import { ChangeEventHandler, Dispatch, useState } from 'react';
import { ITodoItem } from '../interfaces/ITodoItem';
import { StyledTodoItem, StyledTodoText } from '../styled_components/TodoItem.styled';
import { StyledButton } from '../styled_components/Button.styled';
import { StyledForm } from '../styled_components/Form.styled';
import { StyledFormButtonGroup } from '../styled_components/FormButtonGroup.styled';

type TodoElementProps = {
  todoItem: ITodoItem;
  onUpdate: Dispatch<ITodoItem>;
  onDelete: Dispatch<ITodoItem>;
};

export default function TodoListElem({ todoItem, onUpdate, onDelete }: TodoElementProps) {
  const [isEdit, setIsEdit] = useState(false);
  const [input, setInput] = useState(todoItem.task);

  const handleOnSaveClick = () => {
    const updatedTodo = {
      ...todoItem,
      task: input,
    };

    onUpdate(updatedTodo);
    setIsEdit(false);
  };

  const handleCheckboxClick: ChangeEventHandler<HTMLInputElement> = (e) => {
    const value = e.target.checked;
    const updatedTodo = { ...todoItem, isDone: value };
    onUpdate(updatedTodo);
  };

  if (isEdit) {
    return (
      <StyledForm>
        <input name="editTaskInput" defaultValue={input} onChange={(e) => setInput(e.target.value)} />
        <StyledFormButtonGroup>
          <StyledButton onClick={() => handleOnSaveClick()}>Save</StyledButton>
          <StyledButton onClick={() => setIsEdit(false)}>Cancel</StyledButton>
        </StyledFormButtonGroup>
      </StyledForm>
    );
  }

  return (
    <StyledTodoItem>
      <input name="inputCheckbox" type="checkbox" checked={todoItem.isDone} onChange={handleCheckboxClick} />
      <StyledTodoText $isDone={todoItem.isDone}>{todoItem.task}</StyledTodoText>
      <StyledFormButtonGroup>
        <StyledButton onClick={() => setIsEdit(true)}>Edit</StyledButton>
        <StyledButton onClick={() => onDelete(todoItem)}>Delete</StyledButton>
      </StyledFormButtonGroup>
    </StyledTodoItem>
  );
}
