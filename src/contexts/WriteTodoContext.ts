import { Dispatch, createContext } from 'react';
import { TodoAction } from '../reducers/TodoReducer';

export const WriteTodoContext = createContext<Dispatch<TodoAction>>(() => {});
