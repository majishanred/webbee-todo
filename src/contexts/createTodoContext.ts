import { Dispatch, createContext } from 'react';
import { ITodoItemCreate } from '../interfaces/ITodoItem';

export const CreateTodoContext = createContext<Dispatch<ITodoItemCreate>>(() => {});
