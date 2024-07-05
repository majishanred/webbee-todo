import { Dispatch, PropsWithChildren, SetStateAction, createContext, useContext, useState } from 'react';
import { ITodoItem } from '../interfaces/ITodoItem';
import { stringHash } from '../utils';

export const ReadTodoContext = createContext<ITodoItem[]>([]);

export const WriteTodoContext = createContext<Dispatch<SetStateAction<ITodoItem[]>> | null>(null);

const defaultTasks: ITodoItem[] = [
  {
    id: stringHash('Feed a cat'),
    task: 'Feed a cat',
    isDone: false,
  },
  {
    id: stringHash('Buy a milk'),
    task: 'Buy a milk',
    isDone: true,
  },
];

export const TodoProvider = ({ children }: PropsWithChildren) => {
  const [todos, setTodos] = useState(defaultTasks);

  return (
    <WriteTodoContext.Provider value={setTodos}>
      <ReadTodoContext.Provider value={todos}>{children}</ReadTodoContext.Provider>
    </WriteTodoContext.Provider>
  );
};

export const useSetTodos = () => {
  const setTodos = useContext(WriteTodoContext);

  if (!setTodos) throw new Error('Set todo is not found, check your contexts pls');

  return setTodos;
};

export default useSetTodos;
