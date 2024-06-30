import { Dispatch, createContext } from 'react';
import { ITodoItem, ITodoItemCreate } from '../interfaces/ITodoItem';

export const WriteTodoContext = createContext<{
  onAdd: Dispatch<ITodoItemCreate>;
  onDelete: Dispatch<ITodoItem>;
  onUpdate: Dispatch<ITodoItem>;
}>({
  onAdd: () => {},
  onUpdate: () => {},
  onDelete: () => {},
});
