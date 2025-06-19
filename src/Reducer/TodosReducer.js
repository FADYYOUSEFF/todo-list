import { StorageKeys } from "../constants/StorageKeys";
import { v4 as uuidv4 } from "uuid";
import { TodosReducerType } from "../constants/TodosReducerType";
export default function TodosReducer(currentTodos, action) {
  switch (action.type) {
    case TodosReducerType.Updated: {
      const newToDoList = currentTodos.map((t) => {
        if (t.id === action.payload.id) {
          return action.payload;
        }
        return t;
      });
      localStorage.setItem(StorageKeys.TODOS, JSON.stringify(newToDoList));
      return newToDoList;
    }

    case TodosReducerType.Added: {
      const newToDo = {
        id: uuidv4(),
        title: action.payload.title,
        detail: "",
        isCompeleted: false,
      };
      const newToDoList = [...currentTodos, newToDo];
      localStorage.setItem(StorageKeys.TODOS, JSON.stringify(newToDoList));
      return newToDoList;
    }

    case TodosReducerType.Deleted: {
      const newToDoList = currentTodos.filter(
        (todo) => todo.id !== action.payload.id
      );
      localStorage.setItem(StorageKeys.TODOS, JSON.stringify(newToDoList));

      return newToDoList;
    }

    case TodosReducerType.ChangeCompleteState: {
      const newToDoList = currentTodos.map((todo) => {
        if (todo.id === action.payload.id) {
          const newTodo = { ...todo, isCompeleted: !todo.isCompeleted };
          return newTodo;
        }
        return todo;
      });
      localStorage.setItem(StorageKeys.TODOS, JSON.stringify(newToDoList));
      return newToDoList;
    }

    default: {
      throw new Error("this action is not valid" + action.type);
    }
  }
}
