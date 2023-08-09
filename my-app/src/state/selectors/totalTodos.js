import { selector } from "recoil";
import { todoState } from "../atoms/todoState";
export const totalTodos = selector({
    key: 'totalTodos', // unique ID (with respect to other atoms/selectors)
    get: ({get}) => {
      const allTodos = get(todoState);
  
      return allTodos.length;
    },
  });