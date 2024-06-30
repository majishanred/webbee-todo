import { PropsWithChildren, useReducer } from 'react';
import { v1 as uuidv1 } from 'uuid';
import { ITodoItem } from '../interfaces/ITodoItem';
import { TodoReadContext } from '../contexts/ReadTodoContext';
import { WriteTodoContext } from '../contexts/WriteTodoContext';
import { TodoReducer } from '../reducers/TodoReducer';

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
  const [tasks, dispatchActions] = useReducer(TodoReducer, defaultTasks);

  return (
    <WriteTodoContext.Provider value={dispatchActions}>
      <TodoReadContext.Provider value={tasks}>{children}</TodoReadContext.Provider>
    </WriteTodoContext.Provider>
  );
};
