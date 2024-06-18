import { ChangeEventHandler, Dispatch, FormEventHandler, useState } from 'react';
import { styled } from 'styled-components';
import { StyledForm } from './TodoInputForm';
import { TodoListElem as TodoElemBody } from '../App';

const TodoElemStyledForm = styled(StyledForm)`
  display: flex;
  flex-direction: row;

  & > div {
    margin-left: auto;
    display: flex;
    gap: 5px;
  }
`;

const StyledTodo = styled.div<{ $isDone: boolean }>`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  box-sizing: border-box;
  height: auto;
  gap: 5px;
  padding: 10px 20px;

  align-items: center;

  border-radius: 5px;

  background-color: #ffffff;

  & span {
    text-decoration-line: ${(props) => (props.$isDone ? 'line-through' : 'none')};
  }

  & div {
    display: flex;
    gap: 10px;
    margin-left: auto;
  }
`;

const StyledButton = styled.button`
  border: 0;
  background-color: hsl(180, 29%, 50%);
  color: #ffffff;

  padding: 10px 15px;

  border-radius: 5px;

  font-size: 15px;
`;

export default function TodoListElem({
  todo_item,
  onUpdate,
  onDelete,
}: {
  todo_item: TodoElemBody;
  onUpdate: Dispatch<TodoElemBody>;
  onDelete: Dispatch<TodoElemBody>;
}) {
  const [isEdit, setIsEdit] = useState<boolean>(false);

  const handleOnSaveClick: FormEventHandler = (e) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());

    const updatedTodo = {
      ...todo_item,
      task: formJson.taskInput as string,
    };

    setIsEdit(false);
    onUpdate(updatedTodo);
  };

  const handleCheckboxClick: ChangeEventHandler<HTMLInputElement> = (e) => {
    const value = e.target.checked;
    const updatedTodo = { ...todo_item, isDone: value };
    onUpdate(updatedTodo);
  };

  const handleOnEditClick = () => setIsEdit(true);
  const handleOnCancleClick = () => setIsEdit(false);
  const handleOnDeleteClick = () => onDelete(todo_item);

  if (isEdit) {
    return (
      <TodoElemStyledForm method="post" onSubmit={handleOnSaveClick}>
        <input name="taskInput" defaultValue={todo_item.task}></input>
        <div>
          <StyledButton type="submit">Save</StyledButton>
          <StyledButton onClick={handleOnCancleClick}>Cancel</StyledButton>
        </div>
      </TodoElemStyledForm>
    );
  }

  return (
    <StyledTodo $isDone={todo_item.isDone}>
      <input
        name="inputCheckbox"
        type="checkbox"
        checked={todo_item.isDone ? true : false}
        onChange={handleCheckboxClick}
      ></input>
      <span>{todo_item.task}</span>
      <div>
        <StyledButton onClick={handleOnEditClick}>Edit</StyledButton>
        <StyledButton onClick={handleOnDeleteClick}>Delete</StyledButton>
      </div>
    </StyledTodo>
  );
}
