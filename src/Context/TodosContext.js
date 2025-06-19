import { StorageKeys } from "../constants/StorageKeys";
import { createContext, useContext, useReducer } from "react";
import TodosReducer from "../Reducer/TodosReducer";

export const TodosContext = createContext([]);

export function TodosProvider({ children }) {
  const [toDoList, dispatch] = useReducer(
    TodosReducer,
    JSON.parse(localStorage.getItem(StorageKeys.TODOS)) ?? []
  );
  return (
    <TodosContext.Provider value={{ toDoList, dispatch }}>
      {children}
    </TodosContext.Provider>
  );
}

export const useTodos = () => {
  return useContext(TodosContext);
};
