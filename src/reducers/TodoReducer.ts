import { ITodoItemCreate, ITodoItem } from '../interfaces/ITodoItem';
import { v1 as uuidv1 } from 'uuid';

export type TodoAction =
  | { type: 'add'; todo: ITodoItemCreate }
  | { type: 'delete'; todo: ITodoItem }
  | { type: 'update'; todo: ITodoItem };

export function TodoReducer(todos: ITodoItem[], action: TodoAction): ITodoItem[] {
  if (!action.todo.task) return todos;

  if (action.type === 'add') {
    const { todo } = action;

    const elemToAdd: ITodoItem = { ...todo, id: uuidv1() };

    return [...todos, elemToAdd];
  } else if (action.type === 'update') {
    const { todo } = action;

    const index = todos.findIndex((elem) => elem.id === todo.id);

    const newArr = [...todos];
    newArr[index] = todo;

    return newArr;
  } else if (action.type === 'delete') {
    const { todo } = action;

    return todos.filter((elem) => elem.id !== todo.id);
  } else {
    return todos;
  }
}
