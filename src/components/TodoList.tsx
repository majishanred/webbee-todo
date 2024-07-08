import { useMemo } from 'react';
import TodoItem from './TodoItem';
import { useRecoilValue } from 'recoil';
import { filterAtom, todoListAtom } from '../atoms/TodoAtom';

export default function TodoList() {
  const filter = useRecoilValue(filterAtom);
  const todoList = useRecoilValue(todoListAtom);

  const filteredTasks = useMemo(() => {
    if (filter) {
      return todoList.filter((elem) => elem.task.toLowerCase().includes(filter.toLowerCase()));
    }
    return todoList;
  }, [todoList, filter]);

  return (
    <>
      {filteredTasks.map((todo) => (
        <TodoItem key={todo.id} todoItem={todo} />
      ))}
    </>
  );
}
