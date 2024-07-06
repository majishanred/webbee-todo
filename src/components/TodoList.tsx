import { useMemo } from 'react';
import TodoItem from './TodoItem';
import { observer } from 'mobx-react-lite';
import { useStore } from '../contexts/TodoContext';

const TodoList = observer(() => {
  const { filter, todos } = useStore();

  const filteredTasks = useMemo(() => {
    if (filter) {
      return todos.filter((elem) => elem.task.toLowerCase().includes(filter.toLowerCase()));
    }
    return todos;
  }, [filter, todos]);

  return (
    <>
      {filteredTasks.map((todo) => (
        <TodoItem key={todo.id} todoItem={todo} />
      ))}
    </>
  );
});

export default TodoList;
