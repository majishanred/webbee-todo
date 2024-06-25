import { ChangeEvent, Dispatch, memo, useState } from 'react';
import { ITodoItem } from '../interfaces/ITodoItem';
import { Box, BoxProps, Button, ButtonGroup, Checkbox, TextField, Typography, styled } from '@mui/material';

type TodoElementProps = {
  todoItem: ITodoItem;
  onUpdate: Dispatch<ITodoItem>;
  onDelete: Dispatch<ITodoItem>;
};

const TodoListElem = memo(function ({ todoItem, onUpdate, onDelete }: TodoElementProps) {
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

  const handleCheckboxClick = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.checked;
    const updatedTodo = { ...todoItem, isDone: value };
    onUpdate(updatedTodo);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  if (isEdit) {
    return (
      <TodoStyledBox>
        <TextField value={input} onChange={handleChange} />
        <ButtonGroup disableRipple={true} sx={{ marginLeft: 'auto' }}>
          <Button onClick={handleOnSaveClick} variant="contained" color="success">
            Save
          </Button>
          <Button
            onClick={() => {
              setInput(todoItem.task);
              setIsEdit(false);
            }}
          >
            Cancel
          </Button>
        </ButtonGroup>
      </TodoStyledBox>
    );
  }

  return (
    <TodoStyledBox component="div">
      <Checkbox checked={todoItem.isDone} onChange={handleCheckboxClick} />
      <Typography component={'span'} variant="body1" sx={{ textDecoration: todoItem.isDone ? 'line-through' : 'none' }}>
        {todoItem.task}
      </Typography>
      <ButtonGroup disableRipple={true} sx={{ marginLeft: 'auto' }}>
        <Button onClick={() => setIsEdit(true)} variant="contained">
          Edit
        </Button>
        <Button onClick={() => onDelete(todoItem)} variant="contained" color="error">
          Delete
        </Button>
      </ButtonGroup>
    </TodoStyledBox>
  );
});

export default TodoListElem;

const TodoStyledBox = styled(Box)<BoxProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-top: 1px solid #a0a0a0;
  border-bottom: 1px solid #a0a0a0;
  padding: 8px 16px;
`;
