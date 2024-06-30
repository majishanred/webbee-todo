import { useState, useCallback, PropsWithChildren, useMemo } from 'react';
import { v1 as uuidv1 } from 'uuid';
import { ITodoItem, ITodoItemCreate } from '../interfaces/ITodoItem';
import { TodoReadContext } from '../contexts/ReadTodoContext';
import { WriteTodoContext } from '../contexts/WriteTodoContext';

export const TodoProvider = ({ children }: PropsWithChildren) => {
  const [tasks, setTasks] = useState<ITodoItem[]>([
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
  ]);

  const onAdd = useCallback((newTodo: ITodoItemCreate) => {
    if (!newTodo.task) return;
    const elemToAdd = { ...newTodo, id: uuidv1() };
    setTasks((tasks) => [...tasks, elemToAdd]);
  }, []);

  const onUpdate = useCallback((todoItem: ITodoItem) => {
    if (!todoItem.task) return;
    setTasks((tasks) => {
      const index = tasks.findIndex((elem) => elem.id === todoItem.id);
      const newArr = [...tasks];
      newArr[index] = todoItem;

      return newArr;
    });
  }, []);

  const onDelete = useCallback((todoItem: ITodoItem) => {
    setTasks((tasks) => tasks.filter((elem) => elem.id !== todoItem.id));
  }, []);

  const writeFuncs = useMemo(() => {
    return {
      onAdd,
      onUpdate,
      onDelete,
    };
  }, [onAdd, onUpdate, onDelete]);

  return (
    <WriteTodoContext.Provider value={writeFuncs}>
      <TodoReadContext.Provider value={tasks}>{children}</TodoReadContext.Provider>
    </WriteTodoContext.Provider>
  );
};
