import { Stack, Typography } from '@mui/material';
import { RecoilRoot } from 'recoil';
import TodoFilter from './components/TodoFilter';
import TodoInputForm from './components/TodoInputForm';
import TodoList from './components/TodoList';

function App() {
  return (
    <Stack maxWidth="720px" margin="32px auto" gap="10px">
      <Typography variant="h3">My Todos</Typography>
      <RecoilRoot>
        <TodoFilter />
        <TodoInputForm />
        <TodoList />
      </RecoilRoot>
    </Stack>
  );
}

export default App;
