import { TextField } from '@mui/material';
import { ChangeEvent, memo, useContext } from 'react';
import debounce from 'lodash.debounce';
import UpdateFilterContext from '../contexts/updateFilterContext';

const TodoFilter = memo(function TodoFilter() {
  const setFilter = useContext(UpdateFilterContext);

  const handleOnChange = debounce((e: ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
  }, 500);

  return <TextField placeholder="Filter tasks" onChange={handleOnChange} />;
});

export default TodoFilter;
