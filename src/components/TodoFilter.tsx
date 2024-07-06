import { TextField } from '@mui/material';
import { ChangeEvent } from 'react';
import debounce from 'lodash.debounce';
import { observer } from 'mobx-react-lite';
import { setFilter } from '../observables/TodoObservable';

const TodoFilter = observer(() => {
  const handleOnChange = debounce((e: ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
  }, 500);

  return <TextField placeholder="Filter tasks" onChange={handleOnChange} />;
});

export default TodoFilter;
