import { useCallback, useState } from 'react';
import { v1 as uuidv1, v1 } from 'uuid';
import { ITodoItem, ITodoItemCreate } from './interfaces/ITodoItem';
import { Stack, Typography } from '@mui/material';
import TodoList from './components/TodoList';
import TodoInputForm from './components/TodoInputForm';
import TodoFilter from './components/TodoFilter';
import FilterProvider from './prodviders/FilterProvider';

function App() {
  const [tasks, setTasks] = useState<ITodoItem[]>([
    {
      id: uuidv1(),
      task: 'Feed a cat',
      isDone: false,
    },
    {
      id: uuidv1(),
      task: 'Buy a milk',
      isDone: true,
    },
  ]);

  const onAdd = useCallback((newTodo: ITodoItemCreate | ITodoItemCreate[]) => {
    if (newTodo instanceof Array) {
      const newTodos = newTodo
        .filter((elem) => elem.task)
        .map((elem) => {
          return { ...elem, id: uuidv1() };
        });

      setTasks((tasks) => [...tasks, ...newTodos]);
    } else {
      if (!newTodo.task) return;
      const elemToAdd = { ...newTodo, id: v1() };
      setTasks((tasks) => [...tasks, elemToAdd]);
    }
  }, []);

  const onUpdate = useCallback((todoItem: ITodoItem) => {
    if (!todoItem.task) return;
    setTasks((tasks) => {
      const index = tasks.findIndex((elem) => elem.id === todoItem.id);
      const newArr = [...tasks];
      newArr[index] = todoItem;

      return newArr;
    });
  }, []);

  const onDelete = useCallback((todoItem: ITodoItem) => {
    setTasks((tasks) => tasks.filter((elem) => elem.id !== todoItem.id));
  }, []);

  return (
    <Stack maxWidth="720px" margin="32px auto" gap="10px">
      <Typography variant="h3">My Todos</Typography>
      <FilterProvider>
        <TodoFilter />
        <TodoInputForm onSave={onAdd} />
        <TodoList todoList={tasks} onDelete={onDelete} onUpdate={onUpdate} />
      </FilterProvider>
    </Stack>
  );
}

export default App;
