import { Dispatch, PropsWithChildren, SetStateAction, createContext, useState } from 'react';
import { ITodoItem } from '../interfaces/ITodoItem';
import { v1 as uuidv1 } from 'uuid';

export const ReadTodoContext = createContext<ITodoItem[]>([]);

export const WriteTodoContext = createContext<Dispatch<SetStateAction<ITodoItem[]>> | null>(null);

const defaultTasks: ITodoItem[] = [
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
];

export const TodoProvider = ({ children }: PropsWithChildren) => {
  const [todos, setTodos] = useState(defaultTasks);

  return (
    <WriteTodoContext.Provider value={setTodos}>
      <ReadTodoContext.Provider value={todos}>{children}</ReadTodoContext.Provider>
    </WriteTodoContext.Provider>
  );
};
