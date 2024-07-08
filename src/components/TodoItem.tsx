import { ChangeEvent, useState } from 'react';
import { Box, BoxProps, Button, ButtonGroup, Checkbox, TextField, Typography, styled } from '@mui/material';
import { ITodoItem } from '../interfaces/ITodoItem';
import { TodoItemProps } from '../interfaces/TodoItemProps';
import useSetTodos from '../contexts/TodoContext';

const TodoItem = ({ todoItem }: TodoItemProps) => {
  const { task, isDone } = todoItem;

  const [isEdit, setIsEdit] = useState(false);
  const [input, setInput] = useState(todoItem.task);

  const setTodos = useSetTodos();

  const onDelete = () => {
    setTodos((todos) => todos.filter((elem) => elem.id !== todoItem.id));
  };

  const onUpdate = (updatedTodo: ITodoItem) => {
    if (!updatedTodo.task) return;
    setTodos((todos) => {
      const index = todos.findIndex((elem) => elem.id === updatedTodo.id);

      const newArr = [...todos];
      newArr[index] = updatedTodo;

      return newArr;
    });
  };

  const handleOnSaveClick = () => {
    const updatedTodo: ITodoItem = {
      ...todoItem,
      task: input,
    };

    onUpdate(updatedTodo);
    setIsEdit(false);
  };

  const handleCheckboxClick = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.checked;
    const updatedTodo: ITodoItem = { ...todoItem, isDone: value };

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
              setInput(task);
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
      <Checkbox checked={isDone} onChange={handleCheckboxClick} />
      <Typography component={'span'} variant="body1" sx={{ textDecoration: todoItem.isDone ? 'line-through' : 'none' }}>
        {todoItem.task}
      </Typography>
      <ButtonGroup disableRipple={true} sx={{ marginLeft: 'auto' }}>
        <Button onClick={() => setIsEdit(true)} variant="contained">
          Edit
        </Button>
        <Button onClick={onDelete} variant="contained" color="error">
          Delete
        </Button>
      </ButtonGroup>
    </TodoStyledBox>
  );
};

export default TodoItem;

const TodoStyledBox = styled(Box)<BoxProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-top: 1px solid #a0a0a0;
  border-bottom: 1px solid #a0a0a0;
  padding: 8px 16px;
`;
