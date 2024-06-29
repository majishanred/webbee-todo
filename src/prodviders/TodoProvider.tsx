import { useState, useCallback, PropsWithChildren } from 'react';
import { v1 as uuidv1 } from 'uuid';
import { ITodoItem, ITodoItemCreate } from '../interfaces/ITodoItem';
import { TodoContext } from '../contexts/TodoContext';
import { CreateTodoContext } from '../contexts/CreateTodoContext';

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

  return (
    <CreateTodoContext.Provider value={onAdd}>
      <TodoContext.Provider value={{ todoList: tasks, onDelete: onDelete, onUpdate: onUpdate }}>
        {children}
      </TodoContext.Provider>
    </CreateTodoContext.Provider>
  );
};
