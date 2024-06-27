import { Dispatch, createContext } from 'react';

const UpdateFilterContext = createContext<Dispatch<string>>(() => {});

export default UpdateFilterContext;
