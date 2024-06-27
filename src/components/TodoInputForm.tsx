import { ChangeEvent, Dispatch, memo, useState } from 'react';
import { ITodoItemCreate } from '../interfaces/ITodoItem';
import { Box, Button, ButtonGroup, TextField } from '@mui/material';

const TodoInputForm = memo(function ({ onSave }: { onSave: Dispatch<ITodoItemCreate> }) {
  const [input, setInput] = useState('');

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleOnCreate = () => {
    const newTodo: ITodoItemCreate = {
      task: input,
      isDone: false,
    };

    onSave(newTodo);
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
});

export default TodoInputForm;
