import { Stack, Typography } from '@mui/material';
import TodoList from './components/TodoList';
import TodoInputForm from './components/TodoInputForm';
import TodoFilter from './components/TodoFilter';
import { TodoProvider } from './contexts/TodoContext';

function App() {
  return (
    <Stack maxWidth="720px" margin="32px auto" gap="10px">
      <Typography variant="h3">My Todos</Typography>
      <TodoProvider>
        <TodoFilter />
        <TodoInputForm />
        <TodoList />
      </TodoProvider>
    </Stack>
  );
}

export default App;
