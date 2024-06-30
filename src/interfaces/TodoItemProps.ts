import { Dispatch } from 'react';
import { ITodoItem } from './ITodoItem';
import { TodoAction } from '../reducers/TodoReducer';

export interface TodoItemProps {
  todoItem: ITodoItem;
  onUpdate: Dispatch<TodoAction>;
  onDelete: Dispatch<TodoAction>;
}
