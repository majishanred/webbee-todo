export type ITodoItem = {
  id: string;
  task: string;
  isDone: boolean;
};

export type ITodoItemBody = Omit<ITodoItem, 'id'>;
