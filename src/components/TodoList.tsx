import { useContext, useMemo } from 'react';
import TodoItem from './TodoItem';
import ReadFilterContext from '../contexts/ReadFilterContext';
import { TodoReadContext } from '../contexts/ReadTodoContext';
import { WriteTodoContext } from '../contexts/WriteTodoContext';

export default function TodoList() {
  const filter = useContext(ReadFilterContext);
  const todoList = useContext(TodoReadContext);
  const { onUpdate, onDelete } = useContext(WriteTodoContext);

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
