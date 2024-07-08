import { Dispatch, PropsWithChildren, SetStateAction, createContext, useState } from 'react';

export const ReadFilterContext = createContext<string>('');
export const WriteFilterContext = createContext<Dispatch<SetStateAction<string>> | null>(null);

export const FilterProvider = ({ children }: PropsWithChildren) => {
  const [filter, setFilter] = useState('');

  return (
    <ReadFilterContext.Provider value={filter}>
      <WriteFilterContext.Provider value={setFilter}>{children}</WriteFilterContext.Provider>
    </ReadFilterContext.Provider>
  );
};
