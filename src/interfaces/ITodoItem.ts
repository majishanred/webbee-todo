export interface ITodoItem {
  id: string;
  task: string;
  isDone: boolean;
}

export interface ITodoItemBody extends Omit<ITodoItem, 'id'> {}
