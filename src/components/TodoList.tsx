import { Dispatch, useContext, useMemo } from 'react';
import { ITodoItem } from '../interfaces/ITodoItem';
import TodoItem from './TodoItem';
import ReadFilterContext from '../contexts/readFilterContext';

type TodoListProps = {
  todoList: ITodoItem[];
  onUpdate: Dispatch<ITodoItem>;
  onDelete: Dispatch<ITodoItem>;
};

export default function TodoList({ todoList, onUpdate, onDelete }: TodoListProps) {
  const filter = useContext(ReadFilterContext);

  const filteredTasks = useMemo(
    () => (filter ? todoList.filter((elem) => elem.task.toLowerCase().includes(filter.toLowerCase())) : todoList),
    [todoList, filter],
  );

  return (
    <>
      {filteredTasks.map((todo) => (
        <TodoItem key={todo.id} todoItem={todo} onUpdate={onUpdate} onDelete={onDelete} />
      ))}
    </>
  );
}
