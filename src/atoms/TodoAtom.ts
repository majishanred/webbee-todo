import { atom } from 'recoil';
import { ITodoItem } from '../interfaces/ITodoItem';
import { stringHash } from '../utils';

export const filterAtom = atom({
  key: 'filter',
  default: '',
});

export const todoListAtom = atom<ITodoItem[]>({
  key: 'todoList',
  default: [
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
});
