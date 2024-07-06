import { TextField } from '@mui/material';
import { ChangeEvent } from 'react';
import debounce from 'lodash.debounce';
import { useSetRecoilState } from 'recoil';
import { filterAtom } from '../atoms/TodoAtom';

const TodoFilter = () => {
  const setFilter = useSetRecoilState(filterAtom);

  const handleOnChange = debounce((e: ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
  }, 500);

  return <TextField placeholder="Filter tasks" onChange={handleOnChange} />;
};

export default TodoFilter;
