import { createContext } from 'react';
import { ITodoItem } from '../interfaces/ITodoItem';

export const TodoReadContext = createContext<ITodoItem[]>([]);
