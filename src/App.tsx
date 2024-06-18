import TodoListElem from './components/TodoListElem';
import TodoInputForm from './components/TodoInputForm';
import { useState } from 'react';
import { v1 as uuidv1 } from 'uuid';
import styled from 'styled-components';

export type TodoListElem = {
  id: string;
  task: string;
  isDone: boolean;
};

export type TodoListElemBody = {
  task: string;
  isDone: boolean;
};

const StyledList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  width: 100%;

  margin-block: 0;
  margin-inline: 0;
  padding-inline-start: 0;
  gap: 15px;

  margin-top: 15px;
`;

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  z-index: -99;

  width: 100%;
  height: 100vh;

  background-color: hsl(180, 52%, 96%);
`;

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;

  width: 100%;
  max-width: 800px;
  margin: 50px auto;
`;

function App() {
  const [tasks, setTasks] = useState<TodoListElem[]>([
    {
      id: uuidv1(),
      task: 'Feed a cat',
      isDone: false,
    },
    {
      id: uuidv1(),
      task: 'By a milk',
      isDone: true,
    },
  ]);

  const [filterInput, setFilterInput] = useState('');

  const filteredTasks = filterInput
    ? tasks.filter((elem) => elem.task.toLowerCase().includes(filterInput.toLowerCase()))
    : tasks;

  function onAdd(todo_item: TodoListElemBody) {
    const newTodo = { ...todo_item, id: uuidv1() };
    setTasks(() => [...tasks, newTodo]);
  }

  function onUpdate(todo_item: TodoListElem) {
    const index = tasks.findIndex((elem) => elem.id === todo_item.id);
    const newArr = [...tasks];
    newArr[index] = todo_item;

    setTasks(() => [...newArr]);
  }

  function onDelete(todo_item: TodoListElem) {
    setTasks(tasks.filter((elem) => elem.id !== todo_item.id));
  }

  return (
    <>
      <Background></Background>
      <Wrapper>
        <input value={filterInput} onChange={(e) => setFilterInput(e.target.value)} placeholder="Filter" />

        <StyledList>
          {filteredTasks.map((elem) => (
            <TodoListElem key={elem.id} todo_item={elem} onUpdate={onUpdate} onDelete={onDelete}></TodoListElem>
          ))}
        </StyledList>

        <TodoInputForm onSave={onAdd}></TodoInputForm>
      </Wrapper>
    </>
  );
}

export default App;
