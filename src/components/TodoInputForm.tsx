import { ChangeEvent, useContext, useState } from 'react';
import { Box, Button, ButtonGroup, TextField } from '@mui/material';
import { WriteTodoContext } from '../contexts/TodoContext';
import { v1 as uuidv1 } from 'uuid';
import { ITodoItem } from '../interfaces/ITodoItem';

const TodoInputForm = () => {
  const [input, setInput] = useState('');

  const saveTodos = useContext(WriteTodoContext);

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleOnCreate = () => {
    if (!saveTodos) return;
    const newTodo: ITodoItem = {
      id: uuidv1(),
      task: input,
      isDone: false,
    };

    saveTodos((todos) => [...todos, newTodo]);
    setInput('');
  };

  return (
    <Box display="flex" alignItems="center">
      <TextField placeholder="Type task here" value={input} onChange={handleOnChange} sx={{ width: '70%' }} />
      <ButtonGroup sx={{ marginLeft: 'auto' }}>
        <Button onClick={handleOnCreate} type="button" variant="contained">
          Create new task
        </Button>
      </ButtonGroup>
    </Box>
  );
};

export default TodoInputForm;
