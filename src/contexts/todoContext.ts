import { Dispatch, createContext } from 'react';
import { ITodoItem } from '../interfaces/ITodoItem';

export const TodoContext = createContext<{
  todoList: ITodoItem[];
  onDelete: Dispatch<ITodoItem>;
  onUpdate: Dispatch<ITodoItem>;
}>({
  todoList: [],
  onDelete: () => {},
  onUpdate: () => {},
});
