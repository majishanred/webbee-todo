import { TextField } from '@mui/material';
import { ChangeEvent, useContext } from 'react';
import debounce from 'lodash.debounce';
import { WriteFilterContext } from '../contexts/FilterContext';

const TodoFilter = () => {
  const setFilter = useContext(WriteFilterContext);

  const handleOnChange = debounce((e: ChangeEvent<HTMLInputElement>) => {
    if (!setFilter) return;
    setFilter(e.target.value);
  }, 500);

  return <TextField placeholder="Filter tasks" onChange={handleOnChange} />;
};

export default TodoFilter;
