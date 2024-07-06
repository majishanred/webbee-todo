import { PropsWithChildren, createContext, useContext } from 'react';
import { TodoObservable } from '../observables/TodoObservable';

export const TodoContext = createContext<typeof TodoObservable | null>(null);

export const TodoProvider = ({ children }: PropsWithChildren) => {
  return <TodoContext.Provider value={TodoObservable}>{children}</TodoContext.Provider>;
};

export const useStore = () => {
  const ctx = useContext(TodoContext);
  if (!ctx) throw new Error('No context provided');

  return ctx;
};
