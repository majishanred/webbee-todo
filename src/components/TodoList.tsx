import { Dispatch, useMemo } from 'react';
import { ITodoItem } from '../interfaces/ITodoItem';
import TodoListElem from './TodoItem';

type TodoListProps = {
  todoList: ITodoItem[];
  filter: string;
  onUpdate: Dispatch<ITodoItem>;
  onDelete: Dispatch<ITodoItem>;
};

export default function TodoList({ todoList, filter, onUpdate, onDelete }: TodoListProps) {
  const filteredTasks = useMemo(
    () => (filter ? todoList.filter((elem) => elem.task.toLowerCase().includes(filter.toLowerCase())) : todoList),
    [todoList, filter],
  );

  return (
    <>
      {filteredTasks.map((todo) => (
        <TodoListElem key={todo.id} todoItem={todo} onUpdate={onUpdate} onDelete={onDelete}></TodoListElem>
      ))}
    </>
  );
}
