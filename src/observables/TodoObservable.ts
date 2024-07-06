import { action, makeAutoObservable } from 'mobx';
import { ITodoItem } from '../interfaces/ITodoItem';
import { stringHash } from '../utils';

const Store = {
  filter: '',
  todos: [
    {
      id: stringHash('Feed a cat'),
      task: 'Feed a cat',
      isDone: false,
    },
    {
      id: stringHash('Buy a milk'),
      task: 'Buy a milk',
      isDone: true,
    },
  ],
};

export const TodoObservable = makeAutoObservable(Store);

export const addTodo = action((todo: Omit<ITodoItem, 'id'>) => {
  Store.todos.push({ ...todo, id: stringHash(todo.task) });
});

export const setFilter = action((filter: string) => {
  Store.filter = filter;
});

export const updateTodo = action((updatedTodo: ITodoItem) => {
  const index = Store.todos.findIndex((elem) => elem.id === updatedTodo.id);
  Store.todos[index] = updatedTodo;
});

export const deleteTodo = action((deletedTodo: ITodoItem) => {
  Store.todos = Store.todos.filter((todo) => todo.id !== deletedTodo.id);
});
