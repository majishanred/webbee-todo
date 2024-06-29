import { ChangeEvent, useContext, useState } from 'react';
import { ITodoItemCreate } from '../interfaces/ITodoItem';
import { Box, Button, ButtonGroup, TextField } from '@mui/material';
import { CreateTodoContext } from '../contexts/createTodoContext';

const TodoInputForm = () => {
  const [input, setInput] = useState('');

  const onAdd = useContext(CreateTodoContext);

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleOnCreate = () => {
    const newTodo: ITodoItemCreate = {
      task: input,
      isDone: false,
    };

    onAdd(newTodo);
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
