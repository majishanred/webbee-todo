import { useContext, useMemo } from 'react';
import TodoItem from './TodoItem';
import { ReadTodoContext } from '../contexts/TodoContext';
import { ReadFilterContext } from '../contexts/FilterContext';

export default function TodoList() {
  const filter = useContext(ReadFilterContext);
  const todoList = useContext(ReadTodoContext);

  const filteredTasks = useMemo(
    () => (filter ? todoList.filter((elem) => elem.task.toLowerCase().includes(filter.toLowerCase())) : todoList),
    [todoList, filter],
  );

  return (
    <>
      {filteredTasks.map((todo) => (
        <TodoItem key={todo.id} todoItem={todo} />
      ))}
    </>
  );
}
