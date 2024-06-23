import TodoListElem from './components/TodoItem';
import TodoInputForm from './components/TodoInputForm';
import { useCallback, useMemo, useState } from 'react';
import { v1 as uuidv1 } from 'uuid';
import { ITodoItemBody, ITodoItem } from './interfaces/ITodoItem';
import { StyledBackground } from './styled_components/Background.styled';
import { StyledWrapper } from './styled_components/Wrapper.styled';
import { StyledMenu } from './styled_components/Menu.styled';

function App() {
  const [tasks, setTasks] = useState<ITodoItem[]>([
    {
      id: uuidv1(),
      task: 'Feed a cat',
      isDone: false,
    },
    {
      id: uuidv1(),
      task: 'Buy a milk',
      isDone: true,
    },
  ]);

  const [filterInput, setFilterInput] = useState('');

  const filteredTasks = useMemo(
    () => (filterInput ? tasks.filter((elem) => elem.task.toLowerCase().includes(filterInput.toLowerCase())) : tasks),
    [tasks, filterInput],
  );

  const onAdd = useCallback((newTodoItem: ITodoItemBody) => {
    if (!newTodoItem.task) return;
    const newTodo = { ...newTodoItem, id: uuidv1() };
    setTasks((tasks) => [...tasks, newTodo]);
  }, []);

  const onUpdate = useCallback((todoItem: ITodoItem) => {
    if (!todoItem.task) return;
    setTasks((tasks) => {
      const index = tasks.findIndex((elem) => elem.id === todoItem.id);
      const newArr = [...tasks];
      newArr[index] = todoItem;

      return newArr;
    });
  }, []);

  const onDelete = useCallback((todoItem: ITodoItem) => {
    setTasks((tasks) => tasks.filter((elem) => elem.id !== todoItem.id));
  }, []);

  const onBatchAdd = useCallback((newTodoItems: ITodoItemBody[]) => {
    const newTodos = newTodoItems.map((todo) => {
      return { ...todo, id: uuidv1() };
    });
    setTasks((tasks) => [...tasks, ...newTodos]);
  }, []);

  return (
    <>
      <StyledBackground></StyledBackground>
      <StyledWrapper>
        <input value={filterInput} onChange={(e) => setFilterInput(e.target.value)} placeholder="Filter" />

        <StyledMenu>
          {filteredTasks.map((elem) => (
            <TodoListElem key={elem.id} todoItem={elem} onUpdate={onUpdate} onDelete={onDelete}></TodoListElem>
          ))}
        </StyledMenu>

        <TodoInputForm onSave={onAdd}></TodoInputForm>
      </StyledWrapper>
    </>
  );
}

export default App;
