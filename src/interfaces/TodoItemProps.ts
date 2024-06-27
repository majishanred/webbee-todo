import { Dispatch } from 'react';
import { ITodoItem } from './ITodoItem';

export interface TodoItemProps {
  todoItem: ITodoItem;
  onUpdate: Dispatch<ITodoItem>;
  onDelete: Dispatch<ITodoItem>;
}
