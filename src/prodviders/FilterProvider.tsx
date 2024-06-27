import { PropsWithChildren, useState } from 'react';
import ReadFilterContext from '../contexts/readFilterContext';
import UpdateFilterContext from '../contexts/updateFilterContext';

const FilterProvider = ({ children }: PropsWithChildren) => {
  const [filter, setFilter] = useState('');

  return (
    <ReadFilterContext.Provider value={filter}>
      <UpdateFilterContext.Provider value={setFilter}>{children}</UpdateFilterContext.Provider>
    </ReadFilterContext.Provider>
  );
};

export default FilterProvider;
