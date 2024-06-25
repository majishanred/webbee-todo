export interface ITodoItem {
  id: string;
  task: string;
  isDone: boolean;
}

export interface ITodoItemCreate extends Omit<ITodoItem, 'id'> {}
