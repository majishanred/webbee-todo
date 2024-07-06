import { ChangeEvent, useState } from 'react';
import { Box, Button, ButtonGroup, TextField } from '@mui/material';
import { addTodo } from '../observables/TodoObservable';

const TodoInputForm = () => {
  const [input, setInput] = useState('');

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleOnCreate = () => {
    if (!input) return;
    addTodo({
      task: input,
      isDone: false,
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
