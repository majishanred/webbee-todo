import { useContext, useMemo } from 'react';
import TodoItem from './TodoItem';
import ReadFilterContext from '../contexts/readFilterContext';
import { TodoContext } from '../contexts/todoContext';

export default function TodoList() {
  const filter = useContext(ReadFilterContext);
  const { todoList, onUpdate, onDelete } = useContext(TodoContext);

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
