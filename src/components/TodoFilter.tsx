import { TextField } from '@mui/material';
import { ChangeEvent, Dispatch } from 'react';
import debounce from 'lodash.debounce';

type TodoFilterProps = {
  filter: string;
  onFilterSet: Dispatch<string>;
};

export default function TodoFilter({ filter, onFilterSet }: TodoFilterProps) {
  const handleOnChange = debounce((e: ChangeEvent<HTMLInputElement>) => {
    onFilterSet(e.target.value);
  }, 500);

  return <TextField defaultValue={filter} placeholder="Filter tasks" onChange={handleOnChange}></TextField>;
}
