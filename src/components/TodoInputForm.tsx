import { ChangeEvent, useState } from 'react';
import { Box, Button, ButtonGroup, TextField } from '@mui/material';
import { ITodoItem } from '../interfaces/ITodoItem';
import useSetTodos from '../contexts/TodoContext';
import { stringHash } from '../utils';

const TodoInputForm = () => {
  const [input, setInput] = useState('');

  const setTodos = useSetTodos();

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleOnCreate = () => {
    if (!input) return;
    setTodos((todos) => {
      const newTodo: ITodoItem = {
        id: stringHash(input),
        task: input,
        isDone: false,
      };

      return [...todos, newTodo];
    });
    setInput('');
  };

  return (
    <Box display="flex" alignItems="center">
      <TextField placeholder="Type task here" value={input} onChange={handleOnChange} sx={{ width: '50%' }} />
      <ButtonGroup sx={{ marginLeft: 'auto' }}>
        <Button onClick={handleOnCreate} type="button" variant="contained">
          Create new task
        </Button>
      </ButtonGroup>
    </Box>
  );
};

export default TodoInputForm;
